
const firebaseConfig = {
    apiKey: "AIzaSyDck2ShGplLdMv4_-SKdVhAywake9YRe_0",
  authDomain: "lecona-39ef9.firebaseapp.com",
  databaseURL: "https://lecona-39ef9-default-rtdb.firebaseio.com",
  projectId: "lecona-39ef9",
  storageBucket: "lecona-39ef9.appspot.com",
  messagingSenderId: "892874588189",
  appId: "1:892874588189:web:bfbbd871671cf17be546f4",
  measurementId: "G-8KZG4NCTNM"
  };


firebase.initializeApp(firebaseConfig);


var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();

var name = getElementVal("name");
var emailid = getElementVal("emailid");
var msgContent = getElementVal("msgContent");

saveMessages(name, emailid, msgContent);

document.querySelector(".alert").style.display = "block";


setTimeout(() => {
  document.querySelector(".alert").style.display = "none";
}, 3000);

document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
var newContactForm = contactFormDB.push();

newContactForm.set({
  name: name,
  emailid: emailid,
  msgContent: msgContent,
});
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};