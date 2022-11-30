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

  $(".simpleQuiz input[type='submit']").click(function (e) {
    e.preventDefault();
    var quizData = $('form').serializeArray();
    var qdata = {};
    quizData.forEach((entry) => {
      console.log(entry);
      qdata[entry.name] = entry.value;
    });
  
    console.log(qdata);
    firebase.firestore().collection('quizData').add({name:" ",score:" "});
  });

firebase
.firestore()
.collection('quizData')
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


function changestyle() {
    var classname = this.getAttribute("class");
    if (classname=="answer") {
    this.setAttribute("class","answer selected");
    }
    else {
        this.setAttribute("class", "answer");
    }
}
