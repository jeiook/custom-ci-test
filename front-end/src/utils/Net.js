const Net = (() => {
  const debug = false;
  const getObj = (response) => {
    if (typeof response === 'string') {
      return JSON.parse(response);
    }
    return response;
  };
  const getCallBack = (xhr, callback, mode) => {
    if (debug) {
      return () => {
        if (this.readyState === 4) {
          const data = getObj(xhr.response);
          console.log(`status: ${this.status};
            ${mode} response: ${JSON.stringify(data)}`);
          callback(data);
        }
      };
    }
    return () => {
      if (this.readyState === 4) {
        callback(getObj(xhr.response));
      }
    };
  };
  const post = (jsonStr, route, callback = () => {}) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', route);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = getCallBack(xhr, debug, callback, 'get');
    xhr.send(jsonStr);
  };
  const get = (route, callback = () => {}) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', route);
    xhr.onreadystatechange = getCallBack(xhr, debug, callback, 'get');
    xhr.send();
  };
  return {
    post,
    get,
  };
})();

export default Net;
