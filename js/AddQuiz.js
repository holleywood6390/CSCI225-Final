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
  firebase.firestore().collection('quizData').add({ name: " ", score: " " });
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

/*
function changestyle() {
    var classname = this.getAttribute("class");
    if (classname=="answer") {
    this.setAttribute("class","answer selected");
    }
    else {
        this.setAttribute("class", "answer");
    }
} */

function numbers1() {
  var num1 = Math.floor(Math.random() * 10 + 1);
  return num1;
}

function numbers2() {
  var num2 = Math.floor(Math.random() * 100 + 10);
  return num2;
}

function numbers3() {
  var num3 = Math.floor(Math.random() * 1000 + 100);
  return num3;
}

var M = null;
var N = null;

function SetNum() {
  M = numbers1();
  N = numbers1();

  document.getElementById('n1').innerHTML = M.toString();
  document.getElementById('n2').textContent = N.toString();

  console.log(M);
  console.log(N);
}

SetNum();

var ans = M+N;

//var answer = document.getElementsByName('answer')[0].value;
var count = 0;
console.log(count);

function counter() {
  var answer = document.getElementsByName('answer')[0].value;
    if (answer == ans) {
      count = count + 1;
    }
  console.log(count);
  console.log(answer);
  console.log(ans);
}
document.getElementById('SubmitAns').addEventListener('click', counter, false);

function ChangeNum() {
  if (count < 3) {
    M = numbers1();
    N = numbers1();
  }
  else if (count >= 3 && count < 6) {
    M = numbers2();
    N = numbers2();
  }
  else {
    M = numbers3();
    N = numbers3();
  }

  document.getElementById('n1').textContent = M.toString();
  document.getElementById('n2').textContent = N.toString();
}
document.getElementById('SubmitAns').addEventListener('click', ChangeNum, false);




