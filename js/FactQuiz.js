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
    var factQuiz = $('form').serializeArray();
    var fdata = {};
    factQuiz.forEach((entry) => {
      console.log(entry);
      fdata[entry.name] = entry.value;
    });
  
    console.log(fdata);
    firebase.firestore().collection('factQuiz').add({ score, fdata });
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
    var num1 = Math.floor(Math.random() * (3-0+1) + 0);
    return num1;
  }
  
  function numbers2() {
    var num2 = Math.floor(Math.random() * (6-3+1) + 3);
    return num2;
  }
  
  function numbers3() {
    var num3 = Math.floor(Math.random() * (9-6+1) + 6);
    return num3;
  }
  
  var M = null;
  
  function SetNum() {
    M = numbers1();
  
    document.getElementById('n1').innerHTML = M.toString();
  
    console.log(M);
  }
  
  SetNum();

  function factorialize(M) {
    if (M < 0) 
          return null;
    else if (M == 0) 
        return 1;
    else {
        return (M * factorialize(M - 1));
    }
  }
  
  var ans = factorialize(M);
  
  
  
  var count = 0;
  console.log(count);
  var score = 0;
  var questions = 0;
  
  
  function counter() {
    var answers = document.getElementsByName('answer')[0].value;
    var answer = parseInt(answers);
      if (answer == ans) {
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
  
    if (questions==10) {
      location.href="EndFact.html";
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
    ans = factorialize(M);
  }
  
  