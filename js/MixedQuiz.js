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
    var mixedQuiz = $('form').serializeArray();
    var mdata = {};
    mixedQuiz.forEach((entry) => {
        console.log(entry);
        mdata[entry.name] = entry.value;
    });

    console.log(mdata);
    firebase.firestore().collection('mixedQuiz').add({ score, mdata });
});

firebase
    .firestore()
    .collection('mixedQuiz')
    .orderBy('score', 'desc')
    .limit(5)
    .onSnapshot((querySnapshot) => {
        console.log(querySnapshot.size);
        querySnapshot.forEach((doc) => {
            //console.log(doc.data());
           // console.log(doc.data().name);
            //console.log(doc.data().score);
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
    var num1 = Math.floor(Math.random() * 500 + 1);
    return num1;
}

function numbers2() {
    var num2 = Math.floor(Math.random() * 100 + 0);
    return num2;
}
function symbol1() {
    var sym = ("+");
    return sym;
}

var M = null;
var N = null;
var E = null;

function SetNum() {
    M = numbers1();
    N = numbers2();
    E = symbol1();

    document.getElementById('n1').innerHTML = M.toString();
    document.getElementById('n2').textContent = N.toString();
    document.getElementById('n3').innerHTML = E;

    console.log(M);
    console.log(N);
    console.log(E);
}

SetNum();

var ans = M + N;



var count = 0;
console.log(count);
var score = 0;
var questions = 0;

function counter() {
    var answers = document.getElementsByName('answer')[0].value;
    var answer = parseInt(answers);
    if (answer == Math.floor(ans)) {
        if (count < 3) {
            score = score + 1;
          }
          else if (count >= 3 && count < 6) {
            score = score + 2;
          }
          else {
            score = score + 3;
          }
        count = count + 1;
    }
    console.log(count);
    console.log(answer);
    console.log(ans);
    questions = questions + 1;

    if (questions == 12) {
        location.href = "EndMixed.html";
    }
    else {
        ChangeNum();
    }
}
document.getElementById('SubmitAns').addEventListener('click', counter, false);

function ChangeNum() {
    if (count < 3) {
        M = numbers1();
        N = numbers2();
        E = "+"
        ans = M+N;
    }
    else if (count >= 3 && count < 6) {
        M = numbers1();
        N = numbers2();
        E = "-"
        ans = M-N;
    }
    else if (count >= 6 && count < 9) {
        M = numbers1();
        N = numbers2();
        E = "*"
        ans = M*N;
    }
    else {
        M = numbers1();
        N = numbers2();
        E = "/"
        ans = M/N;
    }

    document.getElementById('n1').textContent = M.toString();
    document.getElementById('n2').textContent = N.toString();
    document.getElementById('n3').innerHTML = E;


    
}

