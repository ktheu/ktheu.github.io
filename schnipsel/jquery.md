#### JQuery

With jQuery you select (query) HTML elements and perform "actions" on them.

Basic syntax is: $(selector).action()

```
$(this).hide() - hides the current element.
$("p").hide() - hides all <p> elements.
$(".test").hide() - hides all elements with class="test".
$("#test").hide() - hides the element with id="test".
```

Damit jQuery-Anweisungen erst ausgeführt werden, wenn das Dokument geladen ist, werden sie in
ein document.ready Event geschrieben
```
$(document).ready(function(){
  // jQuery methods go here...
});
```
oder so:
```
$(function(){
  // jQuery methods go here...
});
```

##### jQuery-Selectors
jQuery selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes,values of attributes and much more. It's based on the existing CSS Selectors, and in addition, it has some own custom selectors.

All selectors in jQuery start with the dollar sign and parentheses: $().


__[JQuery Selector Testpage](https://www.w3schools.com/jquery/trysel.asp)__

##### jQuery Event Methods

Liste Events __[doc](https://www.w3schools.com/jquery/jquery_ref_events.asp)__

```
$("p").click(function(){
  // action goes here!!
});

dblclick()   // Doppelklick
mouseenter(), mouseleave(), mouseup(), mousedown()
```
The hover() method takes two functions and is a combination of the mouseenter() and mouseleave() methods.

```
$("#p1").hover(function(){
  alert("You entered p1!");
},
function(){
  alert("Bye! You now leave p1!");
});

```

```
focus(), blur() - Wenn ein Feld den Fokus erhält/verliert.
 
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
```

Die on()-Methode versieht ein Element mit einem oder mehreren Eventhandlern

```
$("p").on("click", function(){
  $(this).hide();
});
```
```
$("p").on({
mouseenter: function(){
    $(this).css("background-color", "lightgray");
},  
mouseleave: function(){
    $(this).css("background-color", "lightblue");
}, 
click: function(){
    $(this).css("background-color", "yellow");
}  
});
```

##### jQuery Effects

Liste der jQuery Effect Methods __[doc](https://www.w3schools.com/jquery/jquery_ref_effects.asp)__
```
hide(), hide(1000), show(), toggle()

```

```
$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle();
  });
});
</script>
</head>
<body>

<button>Toggle between hiding and showing the paragraphs</button>

<p>This is a paragraph with little content.</p>
<p>This is another small paragraph.</p>
```

##### jQuery Dom Manipulation Methodes

Liste der jQuery HTML-Methoden __[doc](https://www.w3schools.com/jquery/jquery_ref_html.asp)__

Three simple, but useful, jQuery methods for DOM manipulation are:
 
- text() - Sets or returns the text content of selected elements
- html() - Sets or returns the content of selected elements (including HTML markup)
- val() - Sets or returns the value of form fields

The jQuery attr() method is used to get/set attribute values.

Diese jQuery-Methoden fügen neuen Inhalt ein:

- append() - Inserts content at the end of the selected elements
- prepend() - Inserts content at the beginning of the selected elements
- after() - Inserts content after the selected elements
- before() - Inserts content before the selected elements

Diese jQuery-Methoden löschen Inhalt:

- remove() - Removes the selected element (and its child elements)
- empty() - Removes the child elements from the selected element

##### jQuery Traversing

Liste der jQuery Traversing-Methoden __[doc](https://www.w3schools.com/jquery/jquery_ref_traversing.asp)__

##### jQuery Ajax

Liste der jQuery Ajax-Methoden __[doc](https://www.w3schools.com/jquery/jquery_ref_ajax.asp)__.
Im Zentrum steht das XMLHttpRequest-Objekt __[doc](https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp)__
Using XMLHttpRequest __[doc](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)__

AJAX = Asynchronous JavaScript and XML.

AJAX is the art of exchanging data with a server, and update parts of a web page - without reloading the whole page.

AJAX is not a programming language.

AJAX just uses a combination of:
- A browser built-in XMLHttpRequest object (to request data from a web server)
- JavaScript and HTML DOM (to display or use the data)
  
AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.



Der typische Ablauf mit AJAX:

1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript  
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

For security reasons, modern browsers do not allow access across domains.
This means that both the web page and the XML file it tries to load, must be located on the same server.

```
<html>
<body>

<h1>The XMLHttpRequest Object</h1>

<p id="demo">Let AJAX change this text.</p>

<button type="button" onclick="loadDoc()">Change Content</button>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
</script>

</body>
</html>
```

The url parameter of the open() method, is an address to a file on a server:
```
xhttp.open("GET", "ajax_test.asp", true);
```
Server requests should be sent asynchronously.
The async parameter of the open() method should be set to true.


With the XMLHttpRequest object you can define a function to be executed when the request receives an answer.
The function is defined in the onreadystatechange property of the XMLHttpResponse object.
```
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
```

Sometimes async = false are used for quick testing. You will also find synchronous requests in older JavaScript code. Since the code will wait for server completion, there is no need for an onreadystatechange function:

```
xhttp.open("GET", "ajax_info.txt", false);
xhttp.send();
document.getElementById("demo").innerHTML = xhttp.responseText;
```

The onreadystatechange property defines a function to be executed when the readyState changes.
__[doc](https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)__
The onreadystatechange event is triggered four times (1-4), one time for each change in the readyState.

The responseText property returns the server response as a JavaScript string, and you can use it accordingly:

```
document.getElementById("demo").innerHTML = xhttp.responseText;

```

#### Ajax and PHP 
Example __[doc](https://www.w3schools.com/xml/ajax_php.asp)__