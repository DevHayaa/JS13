
 var mainContent = document.getElementById("main-content");

 // ii. 
 console.log("Children of 'main-content' using children:");
 var children = mainContent.children
 for (var i = 0; i < children.length; i++) {
   console.log(children[i]); 
 }


 console.log("Children of 'main-content' using childNodes:");
 var childNodes = mainContent.childNodes; 
 for (var j = 0; j < childNodes.length; j++) {
   console.log(childNodes[j]);
 }

 // iii.
 var renderElements = document.getElementsByClassName("render");
 for (var k = 0; k < renderElements.length; k++) {
   console.log(renderElements[k].innerHTML); 

 }

 // iv. 
 document.getElementById("first-name").value = "Alex";

 // v.
 document.getElementById("last-name").value = "Bank";
 document.getElementById("email").value = "alexbank@example.com";



// 2:


// i:
var formContentNode = document.getElementById('form-content');
console.log(formContentNode.nodeType);

// ii:
var lastNameNode = document.getElementById('lastName');
console.log(lastNameNode.nodeType);

var lastNameChildNode = lastNameNode.childNodes[0];
console.log(lastNameChildNode.nodeType);


// iii:
lastNameNode.textContent = "Last Name: Updated";


// iv:

var mainContentNode = document.getElementById('main-content');
console.log(mainContentNode.firstChild); 
console.log(mainContentNode.lastChild);

// v:

var emailNode = document.getElementById('email');
console.log(emailNode.parentNode); 
console.log(emailNode.parentNode.nodeType); 