# Hashtag Labs 
––––––––––––––––––––––––––––––––––––

## 1. What is the difference between HTTP and HTTPS? 
The difference between HyperText Transfer Protocol (HTTP) and HyperText Transfer Protocol Secure (HTTP) is that http computers agree on the code given, often times scrambling messages and encyrpting data to keep users safe from hackers. HTTPS is more secure than HTTP because HTTPS creates an encrypted connection through the usel of SSL certificates.


## 2. What is the difference between HTTP GET and POST?
HTTP POST requests get additial data from the client server, while the GET requests already have all the data which is inscribed in the URL. A GET request is sending a request to a server 'requesting' information. A POST request is when you are sending data to a server. An example of GET would be getting your weather, and a POST example would be posting a facebook update. 


## 3. What is the difference between the HTTP 2xx status codes and 4xx status codes?
The HTTP 2xx status codes are success codes from the server and HTTP 4xx status codes are client error codes from the server. HTTP 2xx success codes can include OK, created, accepted, no content, reset content, partial content, and multi status. While the HTTP 4xx status codes can include Bad request, unauthorized, Forbidden, not found, method not allowed, Not acceptable, and Request time-out. 


## 4. What is ajax? Describe a situation where it is useful.
AJAX is the method of exchanging data with a server, and updating parts of a web page without reloading the entire page. For example making callbacks, which is retrieving or saving data, making asynchronous calls, being user-friendly, and having increased speed. A situation where AJAX is useful is Netflix. By using AJAX calls, when hovering over a movie, the user is shown the overall movie rating and can input their own rating without having to reload the page. It creates more user friendly interfaces and speeds up requests. 


## 5. What is responsive design?
Responsive design is the approach that the design and development should respond to the user's screen size, platform, and orientation. For example making web pages fit to screen regardless of screen size, or making a site mobile responsive to fit the screen size of the user's cellphone. 


## 6. What is the difference between these 3 CSS rules?
`div {background:#fff;} #div {background:#fff;} .div {background:#fff;}##`

div{background:#fff;} means that every div will have the background be #fff. 
div {background:#fff;} means that every element with an id of div will have the background become #fff. 
.div {background:#fff} means that every element with a class of div will have the background become #fff 

## 7. What is the difference between these 2 uses of the <script> tag?
`<script src=”http://example.com/whatever.js”></script> <script>var whatever = true</script>`
The first <script src"http...." > </script> means that its linked to an html site, and the second </script> <script>var whatever = true</script> means tits inline scripting where you can write javascript 


## 8. What is the difference between these two javascript snippets?

`var x = function() { return 1+1;}();`

`var y = function() { return 1+1;};`

x is a function where you can write x and get the answer, whileas for the y function it would need to be written as `y();` to get the answer


# PRACTICAL 

## 1. Write HTML/CSS to draw the following scene (inline css is fine if you want):
a. One red box, 200x200 pixels
b. One blue box, 200x200 pixels
c. One green box, 100x100 pixels
d. The green box should be centered inside the red box
e. The red and blue boxes should not overlap

On github, both html and css file
<b><body>
    <div class="red"> </div>
    <br>
    <div class="green"> </div>
    <div class="blue"> </div>

</body><b>

<b>.red{
    width: 200px;
    height: 200px;
    background-color: red;
    position: absolute;
}

.blue{
    width: 200px;
    height: 200px;
    position: relative;
    background-color: blue;
    margin-top: 100px;
}

.green{
    width: 100px;
    height: 100px;
    background-color: green;
    position: relative;
    margin-right: 100%;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-top: 30px;
}<b>


#2. You have started an analytics company with the domain “hashtag­analytics.com”. You provide this tracking pixel for your customers to place on their websites. By summing the number of times the pixel was loaded, you calculate the number of visitors to each site.

##<img src=”http://hashtag­analytics.com/12345/pixel.gif” width=”1” height=”1”/>
##As it stands, this pixel has a problem because it will be cached by the browser.

##a. Why is caching a problem for the analytics company?
Caching enables the browser to store the image temporarily, so like in the AJAX, the user wont have to send a 'GET' request to the company's server to load the image. Because of this, the number of times the picture is actually loaded will be false.

##b. How could you prevent browser caching? (use any technique(s) you want)
At my time at GA we learned that we can provent browser caching by adding http headers. 
<meta http-equiv="Cache-Control" content="no-cache", no-store, must-revalidate />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />

##c. What will happen if the customer’s website is served over HTTPS? How could you modify the tracking pixel to fix that?
It would have to be through a script tag instead. HTTPS will add an extra layer of security and if its over an img tag, it may not work.

##d. List some information the tracking company could collect (ex: IP address)
Most likely location, user agent, and cookies. 

##e. List some additional information (if any) that could be collected if a script tag is used instead of an img tag
Most likely the company can track the user's entire movement on the site. With event listeners. How long a user perhaps clicked on something, or hovered over a certain image. Even on a SPA the client can track almost everything. With that data the client can analyze what the user does even more. 


## 3. The following image tag appears somewhere on some webpage. The rest of the page is valid HTML, but otherwise unknown.
###<img id=”myimage” src=” http://hashtag­analytics.com/myimage.jpg”  width=”300” height=”250”/> Write plain javascript to do the following (jQuery is fine too, if you prefer):
###Every 2 seconds:
­ ### Check whether the image is viewable
­ ### If yes, write “visible” to the console (that is, window.console)
­ ### If no, do nothing
###** the image is “viewable” if any part of it appears on the screen (so if the image is entirely above or below the viewport, then the user cannot see it, so it is not considered “viewable”)

```window.setInterval(function(){
    var windowTop = $(window).scrollTop();
  var windowBottom = windowTop + window.innerHeight;
  var imgTop = $('#myimage').position().top;
  var imgBottom = imgTop + $('#myImage').height(); 
  if(windowTop < imgTop && imgTop < windowBottom || windowTop < imgBottom && imgBottom < windowBottom){
    console.log('visible');
  }
},2000);





