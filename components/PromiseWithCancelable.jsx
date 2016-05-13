const JSONFrom = (url, method) => {
    let promise = new Promise(function(resolve, reject) {
        let client = new XMLHttpRequest();
        
        if (method) {
            client.open(method, url);
        } else {
            client.open("POST", url);
        }
        
        client.onreadystatechange = handler;
        client.responseType = "json";
        // client.setRequestHeader("Accept", "application/json");
        client.send();
        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
    });
    return promise;
}

// const makeCancelable = (promise) => {
//     let hasCanceled_ = false;

//     const wrappedPromise = new Promise((resolve, reject) => {
//         promise.then((val) =>
//             hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)
//         );
//         promise.catch((error) =>
//             hasCanceled_ ? reject({ isCanceled: true }) : reject(error)
//         );
//     });

//     return {
//         promise: wrappedPromise,
//         cancel() {
//             hasCanceled_ = true;
//         },
//     };
// };

// const InteractiveData = (url, method, data) => {
//     makeCancelable(JSONFrom(url, method));
// }

export default JSONFrom;
