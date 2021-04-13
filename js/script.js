// window.onload = init;

// //Global Variables Declaration
// let cm; //contact manager variable

// function init() {
// 	cm = new ContactManager(); //an instance of the contact manager
// 	cm.sampleData(); //preloaded sample data
// 	cm.printContactsToConsole();
// 	cm.displayContactsAsATable("contacts"); // Display contacts in a table contained in a div with id contacts
// }

// function formSubmitted() {
// 	// Get the values from input fields
// 	let name = document.querySelector("#name");
// 	let email = document.querySelector("#email");
// 	let tel = document.querySelector("#tel");
// 	let state = document.querySelector("#state");
// 	let newContact = new Contact(name.value, email.value, tel.value, state.value);
// 	cm.add(newContact);

// 	//The input fields should initially be empty
// 	name.value = "";
// 	email.value = "";
// 	tel.value = "";
// 	state.value = "";

// 	// refresh the html table
// 	cm.displayContactsAsATable("contacts");

// 	// do not let your browser submit the form using HTTP
// 	return false;
// }


// function emptyList() {
// 	cm.empty();
// 	cm.displayContactsAsATable("contacts");
// }

// function loadList() {
// 	cm.load();
// 	cm.displayContactsAsATable("contacts");
// }


// class Contact {
// 	constructor(name, email, tel, state) {
// 		this.name = name;
// 		this.email = email;
// 		this.tel = tel;
// 		this.state = state
// 	}
// }

// class ContactManager {
// 	constructor() {
// 		// when we build the contact manager, it
// 		// has an empty list of contacts
// 		this.listOfContacts = [];
// 	}

// 	sampleData() {
// 		let c1 = new Contact("Martin Isonguyo", "martin@example.com", "00000000", "Akwa Ibom");
// 		let c2 = new Contact("Abdul Karim", "abdul@example.com", "00000122", "Kaduna");
// 		let c3 = new Contact("Henry Jegede", "henry@example.com", "02350000", "Lagos");
// 		let c4 = new Contact("Mark Tony", "mark@example.com", "03070000", "Abuja");

// 		this.add(c1);
// 		this.add(c2);
// 		this.add(c3);
// 		this.add(c4);


// 		this.sort();//sorting the list of contacts by Name
// 	}

// 	// erase all contacts
// 	empty() {
// 		this.listOfContacts = [];
// 	}

// 	add(contact) {
// 		this.listOfContacts.push(contact);
// 	}

// 	remove(contact) {
// 		for (let i = 0; i < this.listOfContacts.length; i++) {
// 			var c = this.listOfContacts[i];

// 			if (c.email === contact.email) {
// 				// remove the contact at index i
// 				this.listOfContacts.splice(i, i);
// 				// stop/exit the loop
// 				break;
// 			}
// 		}
// 	}

// 	sort() {
// 		// As our array contains objects, we need to pass as argument
// 		// a method that can compare two contacts.
// 		// we use for that a class method, similar to the distance(p1, p2)
// 		// method we saw in the ES6 Point class in module 4
// 		// We always call such methods using the name of the class followed
// 		// by the dot operator
// 		this.listOfContacts.sort(ContactManager.compareByName);
// 	}

// 	// class method for comparing two contacts by name
// 	static compareByName(c1, c2) {
// 		// JavaScript has builtin capabilities for comparing strings
// 		// in alphabetical order
// 		if (c1.name < c2.name)
// 			return -1;

// 		if (c1.name > c2.name)
// 			return 1;

// 		return 0;
// 	}

// 	printContactsToConsole() {
// 		this.listOfContacts.forEach(function (c) {
// 			console.log(c.name);
// 		});
// 	}

// 	load() {
// 		if (localStorage.contacts !== undefined) {
// 			// the array of contacts is savec in JSON, let's convert
// 			// it back to a reak JavaScript object.
// 			this.listOfContacts = JSON.parse(localStorage.contacts);
// 		}
// 	}

// 	save() {
// 		// We can only save strings in local Storage. So, let's convert
// 		// ou array of contacts to JSON
// 		localStorage.contacts = JSON.stringify(this.listOfContacts);
// 	}

// 	displayContactsAsATable(idOfContainer) {
// 		// empty the container that contains the results
// 		let container = document.querySelector("#" + idOfContainer);
// 		container.innerHTML = "";


// 		if (this.listOfContacts.length === 0) {
// 			container.innerHTML = "<p>No contacts to display!</p>";
// 			// stop the execution of this method
// 			return;
// 		}

// 		// creates and populate the table with users
// 		var table = document.createElement("table");
// 		var title = table.insertRow();

// 		title.innerHTML = "<th>Name</th>" + "<th>Email</th>" + "<th>Tel</th>" + "<th>State</th>",

// 			// iterate on the array of users
// 			this.listOfContacts.forEach(function (currentContact) {
// 				// creates a row
// 				var row = table.insertRow();

// 				row.innerHTML = "<td>" + currentContact.name + "</td>"
// 					+ "<td>" + currentContact.email + "</td>" + "<td>" + currentContact.tel + "</td>"
// 					+ "<td>" + currentContact.state + "</td>"
// 			});

// 		// adds the table to the div
// 		container.appendChild(table);
// 	}
// }

//Global declarations
let addContactBtn = document.getElementById("addContact");
let cm;

let submitForm = function () {
	//Get new contact input values
	let name = document.getElementById("name");
	let email = document.getElementById("email");
	let tel = document.getElementById("tel");
	let state = document.getElementById("state");
	//create an object of the new contact
	let newContact = {
		name: name.value,
		email: email.value,
		tel: tel.value,
		state: state.value
	}
};
addContactBtn.addEventListener("click", submitForm);