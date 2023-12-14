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
	apiKey: "AIzaSyAxFqxSdn5OzRMcPQq_SrLOxUe2hbLOZbA",
	authDomain: "pagina-web-2af43.firebaseapp.com",
	databaseURL: "https://pagina-web-2af43-default-rtdb.firebaseio.com",
	projectId: "pagina-web-2af43",
	storageBucket: "pagina-web-2af43.appspot.com",
	messagingSenderId: "479718051784",
	appId: "1:479718051784:web:2241939793df522cc1fafd",
	measurementId: "G-ELMGBK0D32"
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