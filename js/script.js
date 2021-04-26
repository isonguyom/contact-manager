let cm;
let init = function () {
	cm = new ContactManager();

	cm.addTestData();

	//print to browser console
	cm.printContactsToConsole();

	// Display contacts in a table
	cm.contactsTable("contacts");
}
window.onload = init;

function submitForm() {
	// Get the values from input fields
	let name = document.querySelector("#name");
	let email = document.querySelector("#email");
	let tel = document.getElementById("tel");
	let state = document.getElementById("state");
	let newContact = new Contact(name.value, email.value, tel.value, state.value);
	cm.add(newContact);

	// Empty the input fields
	name.value = "";
	email.value = "";
	tel.value = "";
	state.value = "";

	// refresh the html table
	cm.contactsTable("contacts");

	// do not let your browser submit the form using HTTP
	return false;
}

class Contact {
	constructor(name, email, tel, state) {
		this.name = name;
		this.email = email;
		this.tel = tel;
		this.state = state;
	}
}

class ContactManager {
	constructor() {
		// the contact manager initially has an empty list of contacts
		this.contactsList = [];
	}

	//add new contact to contact manager
	add(contact) {
		this.contactsList.push(contact);
	}

	//save contact to local storage
	save() {
		// We can only save strings in local storage. So, let's convert
		// our array of contacts to JSON
		localStorage.contacts = JSON.stringify(this.contactsList);
	}

	//empty contact manager
	empty() {
		this.contactsList = [];
	}

	//delete individual row
	delRow() {
		this.contactsList.row = [];
	}

	//load contact manager
	load() {
		if (localStorage.contacts !== undefined) {
			// the array of contacts is saved in JSON, let's convert
			// it back to a reak JavaScript object.
			this.contactsList = JSON.parse(localStorage.contacts);
		}
	}

	//sort contacts by name
	sort() {
		this.contactsList.sort(ContactManager.compareName);
	}

	// class method for comparing two contacts by name
	static compareName(c1, c2) {
		if (c1.name < c2.name)
			return -1;

		if (c1.name > c2.name)
			return 1;

		return 0;
	}

	// addTestData() {
	// 	let c1 = new Contact("Jimi Hendrix", "jimi@rip.com", "00000000", "aks");
	// 	let c2 = new Contact("Robert Fripp", "robert.fripp@kingcrimson.com", "00000000", "aks");
	// 	let c3 = new Contact("Angus Young", "angus@acdc.com", "00000000", "aks");
	// 	let c4 = new Contact("Arnold Schwarzenneger", "T2@terminator.com", "00000000", "aks");

	// 	this.add(c1);
	// 	this.add(c2);
	// 	this.add(c3);
	// 	this.add(c4);

	// 	// Let's sort the list of contacts by Name
	// 	this.sort();
	// }

	// let idOfContainer = document.getElementById("contacts");

	contactsTable(tableContainer) {
		// the table is initially empty
		let container = document.querySelector("#" + tableContainer);
		container.innerHTML = "";

		if (this.contactsList.length === 0) {
			container.innerHTML = "<p>No contacts to display!</p>";
			// stops the execution of this method
			return;
		}
		// creates and populates the table with users
		let table = document.createElement("table");

		//create table header
		let title = table.insertRow();
		title.innerHTML = "<th>Name</th>" + "<th>Email</th>" + "<th>Tel</th>" + "<th>State</th>",

			// iterates on the array of users
			this.contactsList.forEach(function (currentContact) {
				// creates a row
				let row = table.insertRow();
				let delContact = document.createElement('img');
				delContact.src = "delete-icon.png";
				delContact.id = "del";
				// delContact.dataset.container = 3;
				row.innerHTML = "<td>" + currentContact.name + "</td>" +
					"<td>" + currentContact.email + "</td>" + "<td>" + currentContact.tel + "</td>" +
					"<td>" + currentContact.state + "</td>";
				row.appendChild(delContact);
			});

		// adds the table to the div
		container.appendChild(table);
	}
	printContactsToConsole() {
		this.contactsList.forEach(function (c) {
			console.log(c.name);
		});
	}

}

let emptyList = function () {
	cm.empty();
	cm.contactsTable("contacts");
}

let loadList = function () {
	cm.load();
	cm.contactsTable("contacts");
}

let addContactBtn = document.getElementById("addContact");
let emptyBtn = document.getElementById("empty");
let saveBtn = document.getElementById("save");
let loadBtn = document.getElementById("load");



addContactBtn.addEventListener("click", submitForm);
emptyBtn.addEventListener("click", emptyList);
saveBtn.addEventListener("click", function () {
	cm.save();
});
loadBtn.addEventListener("click", loadList);