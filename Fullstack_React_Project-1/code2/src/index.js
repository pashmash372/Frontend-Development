// //sendEmail

// let promise = new Promise(function (resolve, reject) {
//   // let x = sendEmail(email)
//   //if(x)
//   // resolve('album sent')
//   // else
//   // reject('album not sent email invalid')
//   reject(1);
// });
// // promise takes a executor function
// // this function is always going to executed immidiately
// // executor function has to parameter
// // two callbacks
// // then callback
// // which has two parameters
// // function to be called at the case of resolved
// // rejected
// //.then() function
// // resolver function

// // state: pending
// // fullfilled
// // rejected
// // when the promise is completed either it is resolved or rejected
// // then would be called
// // tell the end user the result of the pormise

// promise.then(
//   function (res) {
//     console.log(res);
//     // resolved
//   },
//   function (res) {
//     // reject
//     console.log(res);
//   }
// );

// let myPromise = new Promise(function (myResolve, myReject) {
//   let req = new XMLHttpRequest();
//   req.open(
//     "GET",
//     "https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products"
//   );
//   req.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       myResolve(this.response);
//     } else if (this.status === 500) {
//       myReject(this.error);
//     }
//   };
//   req.send();
// });

// myPromise.then(
//   function (v) {
//     console.log(v);
//   },
//   function (e) {
//     console.log(e);
//   }
// );

// function fetch(url, options) {
//   return new Promise(function (myResolve, myReject) {
//     let req = new XMLHttpRequest();
//     req.open(options, url);
//     req.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         myResolve(this.response);
//       } else if (this.status === 500) {
//         myReject(this.error);
//       }
//     };
//     req.send();
//   });
// }

// myPromise.then(
//   function (v) {
//     abc(v);
//     console.log(v);
//   },
//   function (e) {
//     console.log(e);
//   }
// );

// myPromise.then(
//   function (value) {
//     console.log(value);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

// function abc(x) {
//   console.log(x);
// }

// fetch(url, options)

fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
  .then(function (res) {
    // console.log(res.json());
    // console.log(res);
    return res.json();
  })
  // .then(function (res) {
  //   console.log(res);
  //   return res * 2;
  // })
  .then(function (r) {
    console.log(r);
  });
