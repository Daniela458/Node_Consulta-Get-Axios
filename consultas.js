const { default: axios } = require("axios");

axios.get('https://jsonplaceholder.typicode.com/users').then((re)=>{console.log(re)})
.catch((error)=>{console.log(error)})

axios.get('https://jsonplaceholder.typicode.com/comments').then((re)=>{console.log(re)})
.catch((error)=>{console.log(error)})

axios.get('https://jsonplaceholder.typicode.com/albums').then((re)=>{console.log(re)})
.catch((error)=>{console.log(error)})

axios.get('https://jsonplaceholder.typicode.com/photos').then((re)=>{console.log(re)})
.catch((error)=>{console.log(error)})

axios.get('https://jsonplaceholder.typicode.com/todos').then((re)=>{console.log(re)})
.catch((error)=>{console.log(error)})

axios.get('https://jsonplaceholder.typicode.com/users').then((re)=>{console.log(re)})
.catch((error)=>{console.log(error)})