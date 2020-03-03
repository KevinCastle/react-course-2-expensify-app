// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/database'

// const firebaseConfig = {
//     apiKey: "AIzaSyCDL19wdwAK9NZWiFm4erwliI6gC3Vt5II",
//     authDomain: "expensify-f664f.firebaseapp.com",
//     databaseURL: "https://expensify-f664f.firebaseio.com",
//     projectId: "expensify-f664f",
//     storageBucket: "expensify-f664f.appspot.com",
//     messagingSenderId: "431556513933",
//     appId: "1:431556513933:web:1c219e33e373038db852c4"
// };

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();



// //child_removed
// database.ref('Expenses').on('child_removed', (snapshot) => {
//     console.log("removed", snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('Expenses').on('child_changed', (snapshot) => {
//     console.log("changed", snapshot.key, snapshot.val());
// })

// //child_added
// database.ref('Expenses').on('child_added', (snapshot) => {
//     console.log("added", snapshot.key, snapshot.val());
// })


// database.ref('Expenses').once('value').then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('Expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });


// database.ref('Expenses').push({
//     description: 'Phone Bill',
//     note: '',
//     amount: 10000,
//     createdAt: 123455
// });




// database.ref('/notes/-M1NcdI7JcPBj3TnZ-Bj').remove();
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//     notes: {
//         aposdfads: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         asdlf: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref('location').once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('Error fetching data', e)
// });

// database.ref().set({
//     name: 'Kevin Castillo',
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'Web UI developer',
//         company: 'Globant'
//     },
//     isSingle: true,
//     location: {
//         city: 'Santiago',
//         country: 'Chile'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('data was removed');
// }).catch((e) => {
//     console.log('did not remove data', e);
// });
