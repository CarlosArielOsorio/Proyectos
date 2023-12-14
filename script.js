
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
	//   copy your firebase config informations
	apiKey: "AIzaSyBU29QncCfvqd57BXuxpmdEPKJkd2iqjt8",
	databaseURL: "https://webb-1f3d1-default-rtdb.firebaseio.com/",
    authDomain: "webb-1f3d1.firebaseapp.com",
    projectId: "webb-1f3d1",
    storageBucket: "webb-1f3d1.appspot.com",
    messagingSenderId: "96237937124",
    appId: "1:96237937124:web:a2be14c8b71d240c9767f1",
    measurementId: "G-2V7FGBDZB0"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
	e.preventDefault();
  
	var name = getElementVal("name");
	var emailid = getElementVal("emailid");
	var msgContent = getElementVal("msgContent");
  
	saveMessages(name, emailid, msgContent);
  
	//   enable alert
	document.querySelector(".alert").style.display = "block";
  
	//   remove the alert
	setTimeout(() => {
	  document.querySelector(".alert").style.display = "none";
	}, 3000);
  
	//   reset the form
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