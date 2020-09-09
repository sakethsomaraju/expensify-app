import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain:process.env.AUTH_DOMAIN ,
    databaseURL:'https://expensify-76c4c.firebaseio.com',
    projectId:process.env.PROJECT_ID ,
    storageBucket:process.env.STORAGE_BUCKET,
    messagingSenderId:process.env.MESSAGING_SENDER_ID,
    appId:process.env.APP_ID,
    measurementId:process.env.MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

export {firebase,database as default }
// database.ref('expenses').push(
//     {
//         description:'rent',
//         amount:5300,
//         note:'',
//         createdAt:6302789
//     }
    
// )
// database.ref('expenses').push({
//         description:'car fuel',
//         amount:3590,
//         note:'',
//         createdAt:63985469
//     }
// )

// database.ref('expenses').push(
//     {
//         description:'water bill',
//         amount:4206,
//         note:'',
//         createdAt:6396523.69
//     }
// )
// database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val())
// })
// database.ref().update({
//     name:'somaraju'
// })
// database.ref('location')
//     .once('value')
//     .then((snapshot)=>{
//         console.log(snapshot.val())
//     }).catch((e)=>{

//     })

// database.ref().set({
//   name:'saketh',
//   age:19,
//   isSingle:true,
//   location:{
//        city:'kcl',
//       country:'india'
//   }

// }).then(()=>{
//     console.log('Data saved!')
// }).catch((e)=>{
//     console.log('error: ',e)
// })

// database.ref('isSingle').remove().then(()=>{
//     console.log('removed sucessfully')
// }).catch((e)=>{
//     console.log('error: ',e)
// })
// database.ref().update({
//     name:'saketh durga',
//     age:18,
//     job:'software developer'
// })