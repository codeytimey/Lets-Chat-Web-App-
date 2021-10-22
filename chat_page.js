// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCcFs4q4UNlZN34L5A5r8Gp-S3t3P2p6xg",
      authDomain: "lets-chat-web-app-1b382.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-1b382-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-1b382",
      storageBucket: "lets-chat-web-app-1b382.appspot.com",
      messagingSenderId: "82256188255",
      appId: "1:82256188255:web:345c7fb75e5396ab239cea"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name, 
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
      
}