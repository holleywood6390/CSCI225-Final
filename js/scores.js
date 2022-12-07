const firebaseConfig = {
    apiKey: "AIzaSyDHXPU2CKFOKO_sNJzJNXMApBreYh-VRNs",
    authDomain: "csci225-finalproject.firebaseapp.com",
    projectId: "csci225-finalproject",
    storageBucket: "csci225-finalproject.appspot.com",
    messagingSenderId: "926899349028",
    appId: "1:926899349028:web:40426a6aa169d088215ab1",
    measurementId: "G-GGTS96ZDMH"
  };
  
  firebase.initializeApp(firebaseConfig);
  
    console.log(sdata);
    firebase.firestore().collection('subQuiz').add({ name: " ", score: " " });
  
  firebase
    .firestore()
    .collection('addQuiz')
    .orderBy('score', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data().name);
        console.log(doc.data().score);
        
      });
    });