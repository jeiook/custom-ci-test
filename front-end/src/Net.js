const Net = (() => {
  const debug = false;
  const post = (jsonStr, route, callback = x => {}) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", route);
    xhr.setRequestHeader("Content-Type", "application/json");
    if (debug) {
      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log("post response:" + xhr.response);
          callback(xhr.response);
        }
      };
    } else {
      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          callback(xhr.response);
        }
      };
    }
    xhr.send(jsonStr);
  };
  const get = (route, callback = x => {}) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", route);
    xhr.onreadystatechange = callback(xhr.response);
    xhr.send();
  };
  return {
    post,
    get,
  };
})();

export default Net;