import { BASE_URI } from "./constants";

let API = {
  fetch(path) {
    let uri = `${BASE_URI}/${path}`;
    let request = new XMLHttpRequest();

    return new Promise((resolve, reject) => {

      request.open("GET", uri, true);
      request.onload = () => {
        if(request.status >=  200 && request.status < 400){
          resolve(JSON.parse(request.response));
        };
      };

      request.onerror = () => {
        reject( new Error("Something went wrong on the API"));
      }

      request.send();
    });
  }
}

export default API;
