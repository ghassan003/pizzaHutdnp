import { initializeApp } from 'firebase/app';

import { getfirestore } from 'firebase/firebasestore';


const firebaseApp =initializeApp({

    apiKey: "AIzaSyDXQK-rdJHHix7Ik-PCbdtdrfJdS3VVssE",
    authDomain: "pizzaapp-f0d29.firebaseapp.com",
    projectId: "pizzaapp-f0d29",
    storageBucket: "pizzaapp-f0d29.appspot.com",
    messagingSenderId: "353502191405",
    appId: "1:353502191405:web:c11e7763e0610c56f4bda4",
    measurementId: "G-SPX2E2JYH2"
    

});


const firebaseConfig = {
   
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);