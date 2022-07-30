"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cm;

var init = function init() {
  cm = new ContactManager(); // cm.addTestData();
  //print to browser console

  cm.printContactsToConsole(); // Display contacts in a table

  cm.contactsTable("contacts");
};

window.onload = init;

function submitForm() {
  // Get the values from input fields
  var name = document.querySelector("#name");
  var email = document.querySelector("#email");
  var tel = document.getElementById("tel");
  var state = document.getElementById("state");
  var newContact = new Contact(name.value, email.value, tel.value, state.value);
  cm.add(newContact); // Empty the input fields

  name.value = "";
  email.value = "";
  tel.value = "";
  state.value = ""; // refresh the html table

  cm.contactsTable("contacts"); // do not let your browser submit the form using HTTP

  return false;
}

var Contact = function Contact(name, email, tel, state) {
  _classCallCheck(this, Contact);

  this.name = name;
  this.email = email;
  this.tel = tel;
  this.state = state;
};

var ContactManager =
/*#__PURE__*/
function () {
  function ContactManager() {
    _classCallCheck(this, ContactManager);

    // the contact manager initially has an empty list of contacts
    this.contactsList = [];
  } //add new contact to contact manager


  _createClass(ContactManager, [{
    key: "add",
    value: function add(contact) {
      this.contactsList.push(contact);
    } //save contact to local storage

  }, {
    key: "save",
    value: function save() {
      // We can only save strings in local storage. So, let's convert
      // our array of contacts to JSON
      localStorage.contacts = JSON.stringify(this.contactsList);
    } //empty contact manager

  }, {
    key: "empty",
    value: function empty() {
      this.contactsList = [];
    } //load contact manager

  }, {
    key: "load",
    value: function load() {
      if (localStorage.contacts !== undefined) {
        // the array of contacts is saved in JSON, let's convert
        // it back to a reak JavaScript object.
        this.contactsList = JSON.parse(localStorage.contacts);
      }
    } //sorting contacts

  }, {
    key: "sortByName",
    value: function sortByName() {
      this.contactsList.sort(ContactManager.compareName);
    }
  }, {
    key: "sortByEmail",
    value: function sortByEmail() {
      this.contactsList.sort(ContactManager.compareEmail);
    }
  }, {
    key: "sortByTel",
    value: function sortByTel() {
      this.contactsList.sort(ContactManager.compareTel);
    }
  }, {
    key: "sortByState",
    value: function sortByState() {
      this.contactsList.sort(ContactManager.compareState);
    } //Reverse sorting

  }, {
    key: "sortByNameRev",
    value: function sortByNameRev() {
      this.contactsList.sort(ContactManager.compareNameRev);
    }
  }, {
    key: "sortByEmailRev",
    value: function sortByEmailRev() {
      this.contactsList.sort(ContactManager.compareEmailRev);
    }
  }, {
    key: "sortByTelRev",
    value: function sortByTelRev() {
      this.contactsList.sort(ContactManager.compareTelRev);
    }
  }, {
    key: "sortByStateRev",
    value: function sortByStateRev() {
      this.contactsList.sort(ContactManager.compareStateRev);
    } // class method for comparing two contacts

  }, {
    key: "contactsTable",
    // addTestData() {
    // 	let c1 = new Contact("Jimi Hendrix", "jimi@rip.com", "01112000", "aks");
    // 	let c2 = new Contact("Robert Fripp", "robert.fripp@kingcrimson.com", "0340000", "kd");
    // 	let c3 = new Contact("angus Young", "angus@acdc.com", "02240000", "Yb");
    // 	let c4 = new Contact("Arnold Schwarzenneger", "T2@terminator.com", "0934000", "la");
    // 	this.add(c1);
    // 	this.add(c2);
    // 	this.add(c3);
    // 	this.add(c4);
    // 	// Let's sort the list of contacts by Name
    // 	// this.sort();
    // }
    value: function contactsTable(tableContainer) {
      // the table is initially empty
      var container = document.querySelector("#" + tableContainer);
      container.innerHTML = "";

      if (this.contactsList.length === 0) {
        container.innerHTML = "<p>No contacts to display!</p>"; // stops the execution of this method

        return;
      } // creates and populates the table with users


      var table = document.createElement("table");
      table.id = "contactTable"; //create table header

      var title = table.insertRow();
      title.innerHTML = "<th>Name</th>" + "<th>Email</th>" + "<th>Tel</th>" + "<th>State</th>";
      title.style.cursor = "pointer";
      var nameCell = title.cells[0];
      nameCell.onclick = sortListByName;
      var emailCell = title.cells[1];
      emailCell.onclick = sortListByEmail;
      var telCell = title.cells[2];
      telCell.onclick = sortListByTel;
      var stateCell = title.cells[3];
      stateCell.onclick = sortListByState; // iterates on the array of users

      this.contactsList.forEach(function (currentContact) {
        // creates a row
        var row = table.insertRow(); // let delContact = document.createElement('img');
        // delContact.src = "delete-icon.png";
        // delContact.className = "del-row";
        // delContact.style.cursor = "pointer";
        // delContact.dataset.container = 1;

        row.innerHTML = "<td>" + currentContact.name + "</td>" + "<td>" + currentContact.email + "</td>" + "<td>" + currentContact.tel + "</td>" + "<td>" + currentContact.state + "</td>"; // row.appendChild(delContact);
      }); // adds the table to the div

      container.appendChild(table);
    }
  }, {
    key: "printContactsToConsole",
    value: function printContactsToConsole() {
      this.contactsList.forEach(function (c) {
        console.log(c.name);
      });
    }
  }], [{
    key: "compareName",
    value: function compareName(c1, c2) {
      var a = c1.name.toUpperCase();
      var b = c2.name.toUpperCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
  }, {
    key: "compareEmail",
    value: function compareEmail(c1, c2) {
      var a = c1.email.toUpperCase();
      var b = c2.email.toUpperCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
  }, {
    key: "compareTel",
    value: function compareTel(c1, c2) {
      var a = c1.tel.toUpperCase();
      var b = c2.tel.toUpperCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
  }, {
    key: "compareState",
    value: function compareState(c1, c2) {
      var a = c1.state.toUpperCase();
      var b = c2.state.toUpperCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    } // class method for reverse comparism of two contacts

  }, {
    key: "compareNameRev",
    value: function compareNameRev(c1, c2) {
      var a = c1.name.toUpperCase();
      var b = c2.name.toUpperCase();
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    }
  }, {
    key: "compareEmailRev",
    value: function compareEmailRev(c1, c2) {
      var a = c1.email.toUpperCase();
      var b = c2.email.toUpperCase();
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    }
  }, {
    key: "compareTelRev",
    value: function compareTelRev(c1, c2) {
      var a = c1.tel.toUpperCase();
      var b = c2.tel.toUpperCase();
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    }
  }, {
    key: "compareStateRev",
    value: function compareStateRev(c1, c2) {
      var a = c1.state.toUpperCase();
      var b = c2.state.toUpperCase();
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    }
  }]);

  return ContactManager;
}();

var emptyList = function emptyList() {
  cm.empty();
  cm.contactsTable("contacts");
};

var loadList = function loadList() {
  cm.load();
  cm.contactsTable("contacts");
};

var sortListByName = function sortListByName() {
  cm.sortByName();
  cm.contactsTable("contacts"); // if (cm.sortByName()) {
  // 	cm.sortByNameRev();
  // 	cm.contactsTable("contacts");
  // } else {
  // 	cm.sortByName();
  // 	cm.contactsTable("contacts");
  // }
};

var sortListByEmail = function sortListByEmail() {
  cm.sortByEmail();
  cm.contactsTable("contacts");
};

var sortListByTel = function sortListByTel() {
  cm.sortByTel();
  cm.contactsTable("contacts");
};

var sortListByState = function sortListByState() {
  cm.sortByState();
  cm.contactsTable("contacts");
};

var searchTable = function searchTable() {
  var search, sort, table, tr, td, i, searchValue;
  search = document.getElementById("searchTable");
  sort = search.value.toUpperCase();
  table = document.getElementById("contactTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      searchValue = td.textContent || td.innerText;

      if (searchValue.toUpperCase().indexOf(sort) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

var editCell = function editCell() {
  var search, sort, table, tr, td, i, searchValue;
  table = document.getElementById("contactTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr.getElementsByTagName("td");

    for (i = 0; i < td.length; i++) {}
  }
};

var addContactBtn = document.getElementById("addContact");
var emptyBtn = document.getElementById("empty");
var saveBtn = document.getElementById("save");
var loadBtn = document.getElementById("load");
var delRowBtn = document.querySelectorAll(".del-row");
var searchInput = document.getElementById("searchTable");
addContactBtn.addEventListener("click", submitForm);
emptyBtn.addEventListener("click", emptyList);
saveBtn.addEventListener("click", function () {
  cm.save();
});
loadBtn.addEventListener("click", loadList);
searchInput.onkeyup = searchTable;