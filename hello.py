from cloudant import Cloudant
from flask import Flask, render_template, request, jsonify
import atexit
import requests
import os
import json
import copy

app = Flask(__name__, static_url_path='', 
                        static_folder='front-end/build/', 
                        template_folder='front-end/build/')

db_name = 'mydb'
client = None
db = None

if 'VCAP_SERVICES' in os.environ:
    vcap = json.loads(os.getenv('VCAP_SERVICES'))
    print('Found VCAP_SERVICES')
    if 'cloudantNoSQLDB' in vcap:
        creds = vcap['cloudantNoSQLDB'][0]['credentials']
        user = creds['username']
        password = creds['password']
        url = 'https://' + creds['host']
        client = Cloudant(user, password, url=url, connect=True)
        db = client.create_database(db_name, throw_on_exists=False)
elif "CLOUDANT_URL" in os.environ:
    client = Cloudant(os.environ['CLOUDANT_USERNAME'], os.environ['CLOUDANT_PASSWORD'], url=os.environ['CLOUDANT_URL'], connect=True)
    db = client.create_database(db_name, throw_on_exists=False)
elif os.path.isfile('vcap-local.json'):
    with open('vcap-local.json') as f:
        vcap = json.load(f)
        print('Found local VCAP_SERVICES')
        creds = vcap['services']['cloudantNoSQLDB'][0]['credentials']
        user = creds['username']
        password = creds['password']
        url = 'https://' + creds['host']
        client = Cloudant(user, password, url=url, connect=True)
        db = client.create_database(db_name, throw_on_exists=False)

# On IBM Cloud Cloud Foundry, get the port number from the environment variable PORT
# When running this app on the local machine, default the port to 8000
port = int(os.getenv('PORT', 8000))

@app.route('/')
def root():
    return render_template('index.html');

# /* Endpoint to greet and add a new visitor to database.
# * Send a POST request to localhost:8000/api/visitors with body
# * {
# *     "name": "Bob"
# * }
# */
@app.route('/api/visitors', methods=['GET'])
def get_visitor():
    if client:
        return jsonify(list(map(lambda doc: doc['name'], db)))
    else:
        print('No database')
        return jsonify([])

# /**
#  * Endpoint to get a JSON array of all the visitors in the database
#  * REST API example:
#  * <code>
#  * GET http://localhost:8000/api/visitors
#  * </code>
#  *
#  * Response:
#  * [ "Bob", "Jane" ]
#  * @return An array of all the visitor names
#  */
@app.route('/api/visitors', methods=['POST'])
def put_visitor():
    user = request.json['name']
    data = {'name':user}
    budget_data = request.json['budget']
    product_data = request.json['product']

    response_ref = requests.get('https://data.energystar.gov/resource/p5st-her9.json', 
        headers={'X-App-Token': 'k01giiJ5UAtRU31Z5myYGnVAk'}) .text
    response_info_ref = json.loads(response_ref)

    link1 = 'https://api.bestbuy.com/v1/products((categoryPath.id=abcat0901000))?apiKey=qhqws47nyvgze2mq3qx4jadt&sort=name.asc&show=name,modelNumber,regularPrice,url&pageSize=99&'
    link2 = 'page='
    link3 = '&format=json'

    info_list = []

    for i in range(15):
        link = '' . join((link1,link2,str(i+1),link3))
        fridgeCostRef = requests.get(link) .text
        fridgecost_info = json.loads(fridgeCostRef)
        if fridgecost_info and 'products' in fridgecost_info:
            for j in range(len(fridgecost_info['products'])):
                if (budget_data >= fridgecost_info['products'][j]['regularPrice']):
                    dict1 = {'loc':i+1,'index':j,'price':fridgecost_info['products'][j]['regularPrice'],'modelNum':fridgecost_info['products'][j]['modelNumber']}
                    info_list.append(dict1)

    priceOfFridge = 100000
    indexLoc = -1
    for x in response_info_ref:
        modelNumberEn = x['model_number']
        for y in range(len(info_list)):
            priceInfo = info_list[y]['price']
            if(modelNumberEn == info_list[y]['modelNum'] and priceInfo < priceOfFridge):
                priceOfFridge = priceInfo
                indexLoc = y

    data_to_front = {}

    if (indexLoc != -1):
        link ='' .join((link1,link2,str(info_list[indexLoc]['loc']),link3))
        fridgeCostRef = requests.get(link) .text
        fridgecost_info = json.loads(fridgeCostRef)
        dictToCopy = fridgecost_info['products'][info_list[indexLoc]['index']]
        data_to_front = copy.deepcopy(dictToCopy)

    if client:
        # my_document = db.create_document(data)
        # data['_id'] = my_document['_id']
        return jsonify(data_to_front)
    else:
        print('No database')
        return jsonify(data_to_front)

@atexit.register
def shutdown():
    if client:
        client.disconnect()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port, debug=True)
