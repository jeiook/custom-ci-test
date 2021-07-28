const Net = (() => {
  const url = "/api/visitors";
  const post = (jsonStr, route = url) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "." + route);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {};
    xhr.send(jsonStr);
  };
  const get = (route = url) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "." + route);
    xhr.onreadystatechange = function () {};
    xhr.send();
  };
  return {
    post,
    get,
  };
})();

export default Net;