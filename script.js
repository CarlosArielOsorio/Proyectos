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
	apiKey: "AIzaSyBU29QncCfvqd57BXuxpmdEPKJkd2iqjt8",
    authDomain: "webb-1f3d1.firebaseapp.com",
    projectId: "webb-1f3d1",
    storageBucket: "webb-1f3d1.appspot.com",
    messagingSenderId: "96237937124",
    appId: "1:96237937124:web:a2be14c8b71d240c9767f1",
    measurementId: "G-2V7FGBDZB0"
  };
  
  // Import necessary functions from firebase
  import { initializeApp } from 'firebase/app';
  import { getAnalytics } from 'firebase/analytics';
  import { database } from 'firebase/database';
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  // Use the database from the imported firebase module
  const contactFormDB = database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
	e.preventDefault();
  
	var name = getElementById("name").value;
	var emailid = getElementById("emailid").value;
	var msgContent = getElementById("msgContent").value;
  
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
  
  const getElementById = (id) => {
	return document.getElementById(id);
  };
  