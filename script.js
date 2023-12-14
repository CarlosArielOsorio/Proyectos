
const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
	target.addEventListener('click', () => {
		content.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(target.dataset.target)
		t.classList.add('active')
	})
})


const firebaseConfig = {
	apiKey: "AIzaSyBGT30mAGo303-c-tR0ww1eXiJKWEHv68o",
  authDomain: "proyecto-60679.firebaseapp.com",
  databaseURL: "https://proyecto-60679-default-rtdb.firebaseio.com",
  projectId: "proyecto-60679",
  storageBucket: "proyecto-60679.appspot.com",
  messagingSenderId: "966958460051",
  appId: "1:966958460051:web:9e8b17c4cabe86185cf166",
  measurementId: "G-GLWZWMQ8HP"
  };


firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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