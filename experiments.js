// const magicSquare = [[2,7,6],[9,5,1],[4,3,8]]
// function rowTotal(arr){
//     let sum=0;
//     for(let row of arr){
//         for(let num of row){
//             sum+=num;
//         }
//     }
//     return (sum)
// }
//Note: the string of conditionals evals to True or False, ergo no if () {return whatEver}
// function isValidPassword (userName, passWord) {
//     return (passWord.length >= 8 && passWord.indexOf(' ') === -1 && passWord.indexOf(userName) === -1);
// }

//accept an array and return the average

// function getAverage(arr) {
//     let total = 0;
//     for(let i of arr) {
//         total += i;
//     }
//     return total / arr.length;
// }

//isPangram..final solution, 2 refactors
// const alpha = 'abcdefghijklmnopqrstuvwxyz';
// const chars = alpha.split('');

// function isPangram(str) {
//     let lowerCased = str.toLowerCase();
//     for(let char of alpha) {
//         if (!lowerCased.includes(char)){
//             return false;
//         }
//     }
//     return true;
// }
// let i = 0;
// let j = 10;
// checkiandj: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkj: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if ((j % 2) === 0) {
//       continue checkiandj;
//     }
//     console.log(j, ' is odd.');
//   }
//   console.log('i = ', i);
//   console.log('j = ', j);
// }

const nums = [646, 25.3, 14.4, 6.5]
const words = ['dog', 'hog', 'bog', 'indian']
const doubles2 = nums.map(n => {return n *2})
const doubles3 = nums.map(n => n*2);
const parityList = nums.map(n => n%2 === 0 ? 'even' : 'odd');

const found = nums.find(n => n > 6);
const odds = nums.filter(n => n%2 ===1);

const wordCheck = words.some(w => w[0] === 'e');
const sort1 = nums.slice().sort((a,b) => a - b);
const sort2 = nums.sort((a,b) => b - a);
//reduce
const totals = nums.reduce((accum, currVal) => accum + currVal);
const totals2 = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 7);
const totals3 = nums.reduce((max, curr) => {if(curr > max) return curr; return max;})  
const minGrade = nums.reduce((min, curr) => Math.min(min, curr));
const minGrade2 = nums.reduce((accum, currVal) => Math.max(accum, currVal));

//function multiply(a, b=1) {return a * b};

function sum(){
  const argsArr = [...arguments];
  return argsArr.reduce((accum, curr) => {
    return accum + curr
  }) 
}
function betterSum(...nums){
  return nums.reduce((accum, curr) => {
    return accum + curr
  })
}

const multiply = (...nums) => nums.reduce((accum, curr) => accum * curr);

const auth = {
  username: 'Tommyboy',
  login(){
    console.log('logged ya in')
  },
  logout(){
    console.log('logged ya out')
  }
}
//this is an object and that object represents the current execution scope. It's behavior varies based on how a function is called, ie its runtime binding. 
function sayHi(){
  console.log("Hi")
  console.log(this)
}
//'you can have a method that is AWARE of the contents of other key:value pairs inside its object. That's useful.
const person = {
  first: 'Cherilyn',
  nickName: 'Cher',
  fullName(){
    const {first, nickName} = this;
    return `${first} ${nickName}`
  },
  printBio(){

    const fullName = this.fullName();
    console.log(fullName)
  }
}
//the value of this depends on the invocation context the function it is used in. Below will throw an error, b/c even though to the left of the dot in person.printBio, this is scoped to the method above, calling const printBio, the this is scoped to the global...window. 
// const printBio = person.printBio;

// const annoyer = {
//   phrases: ["literally", "craycray", "can't even", "jewAIDS", "stankNig"],
//   pickPhrase(){
//     const {phrases} = this;
//     const idx = Math.floor(Math.random() * phrases.length);
//     return phrases[idx];
//   },
//   start(){
//     this.timerId = setInterval(() => {
//       console.log(this.pickPhrase())
//     }, 1000)
//   },
//   stop() {
//     clearInterval
//   }
// }

// const makeDogPromise = () => {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if(rand < .5){
//         resolve();
//       }else{
//         reject();
//       }
//     }) 
//   }).then(() => {
//     console.log('Yay, got one.')
//   }).catch(() => {
//     console.log('No dog')
//   })
// }

const fakeRequest = (url) => {
  return new Promise((resolve, reject) =>
  setTimeout (() => {
    const pages = {
      '/users' : [
        {id: 1, username: 'Bilbo'},
        {id: 5, usename: 'Esmerelda'}
      ],
      '/users/1' : {
        id : 1,
        username: 'Bilbo',
        upvotes : 360, 
        city : 'Lisbon',
        topPostId : 454321
      },
      '/users/5' : {
        id : 5,
        username: 'Essie',
        upvotes : 143, 
        city : 'Seattle',
        topPostId : 21
      },
      '/posts/454321' : {
        id : 454321,
        title : 'Ladies and Gentlemen...Whit!'
      },
      '/about' : 'This is the about page!'
    }
    const data = pages[url];
    if ( data) {
      resolve({status: 200, data})
    }else{
      reject({status: 404})
    }
  }, 1500
  ))
}
fakeRequest('/users')
.then((res) => {
  console.log(res)
  const id = res.data[0].id
  return fakeRequest(`/users/${id}`)
})
.then((res) => {
  console.log(res)
  const postId = res.data.topPostId
  return fakeRequest(`/posts/${postId}`)
})
.then((res) => {
  console.log(res)
})
.catch((err) => {
  console.log('it no worky', err)
})

