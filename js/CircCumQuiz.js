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
    var circQuiz = $('form').serializeArray();
    var cqdata = {};
    circQuiz.forEach((entry) => {
        console.log(entry);
        cqdata[entry.name] = entry.value;
    });

    console.log(cqdata);
    firebase.firestore().collection('circQuiz').add({ name: " ", score: " " });
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

    document.getElementById('n1').innerHTML = M.toString();

    console.log(M);
}

SetNum();

var ans = Math.PI * (M*M);


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
    console.log(score);

    questions = questions + 1;
    console.log(questions);

    if (questions == 10) {
        location.href = "EndCircCum.html";
    }
    else {
        ChangeNum();
    }
}
document.getElementById('SubmitAns').addEventListener('click', counter, false);

function ChangeNum() {
    if (count < 3) {
        M = numbers1();
    }
    else if (count >= 3 && count < 6) {
        M = numbers2();
    }
    else {
        M = numbers3();
    }

    document.getElementById('n1').textContent = M.toString();

    // Update ans
    ans = Math.PI * (M*M);
}