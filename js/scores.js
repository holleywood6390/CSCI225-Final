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

firebase
    .firestore()
    .collection('addQuiz')
    .orderBy('score', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data().adata);
        console.log(doc.data().score);
        information_add.innerHTML += "<div class='list-item'><h3>" + doc.data().name + "</h3><h3>" + doc.data().score + "</h3></div>"
      });
    });

firebase
    .firestore()
    .collection('circQuiz')
    .orderBy('score', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data().cqdata);
        console.log(doc.data().score);
        information_circ.innerHTML += "<div class='list-item'><h3>" + doc.data().name + "</h3><h3>" + doc.data().score + "</h3></div>"
      });
    });

    firebase
    .firestore()
    .collection('divQuiz')
    .orderBy('score', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data().ddata);
        console.log(doc.data().score);
        information_div.innerHTML += "<div class='list-item'><h3>" + doc.data().name + "</h3><h3>" + doc.data().score + "</h3></div>"
      });
    });

    firebase
    .firestore()
    .collection('expQuiz')
    .orderBy('score', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data().edata);
        console.log(doc.data().score);
        information_exp.innerHTML += "<div class='list-item'><h3>" + doc.data().name + "</h3><h3>" + doc.data().score + "</h3></div>"
      });
    });

    firebase
    .firestore()
    .collection('factQuiz')
    .orderBy('score', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data().fdata);
        console.log(doc.data().score);
        information_fact.innerHTML += "<div class='list-item'><h3>" + doc.data().name + "</h3><h3>" + doc.data().score + "</h3></div>"
      });
    });

    firebase
    .firestore()
    .collection('mixedQuiz')
    .orderBy('score', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data().mdata);
        console.log(doc.data().score);
        information_mixed.innerHTML += "<div class='list-item'><h3>" + doc.data().name + "</h3><h3>" + doc.data().score + "</h3></div>"
      });
    });

firebase
    .firestore()
    .collection('modQuiz')
    .orderBy('score', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data().moddata);
        console.log(doc.data().score);
        information_mod.innerHTML += "<div class='list-item'><h3>" + doc.data().name + "</h3><h3>" + doc.data().score + "</h3></div>"
      });
    });

    firebase
    .firestore()
    .collection('multQuiz')
    .orderBy('score', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data().multdata);
        console.log(doc.data().score);
        information_multi.innerHTML += "<div class='list-item'><h3>" + doc.data().name + "</h3><h3>" + doc.data().score + "</h3></div>"
      });
    });

    firebase
    .firestore()
    .collection('pythagQuiz')
    .orderBy('score', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data().pdata);
        console.log(doc.data().score);
        information_pythag.innerHTML += "<div class='list-item'><h3>" + doc.data().name + "</h3><h3>" + doc.data().score + "</h3></div>"
      });
    });

    firebase
    .firestore()
    .collection('subQuiz')
    .orderBy('score', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data().sdata);
        console.log(doc.data().score);
        information_sub.innerHTML += "<div class='list-item'><h3>" + doc.data().name + "</h3><h3>" + doc.data().score + "</h3></div>"
      });
    });