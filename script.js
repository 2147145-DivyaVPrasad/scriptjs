
    function WriteCookie()
    {
       if( document.myform.customer.value == "" ) {
          alert("Enter some value!");
          return;
       }
       cookievalue = escape(document.myform.customer.value) + ";";
       document.cookie="name=" + cookievalue;
       document.write ("Setting Cookies : " + "name=" + cookievalue );
    }
    function ReadCookie() {
       var allcookies = document.cookie;
       document.write ("Cookie : " + allcookies );
       // Get all the cookies pairs in an array
       cookiearray = allcookies.split(';');
       // Now take key value pair out of this array
       for(var i=0; i<cookiearray.length; i++) {
          name = cookiearray[i].split('=')[0];
          value = cookiearray[i].split('=')[1];
          document.write ("Key is : " + name + " and Value is : " + value);
         

       }}

       function DeleteCookie() {
       var now = new Date();
       now.setMonth( now.getMonth() - 1 );
       cookievalue = escape(document.myform.customer.value) + ";"
       
       document.cookie = "name=" + cookievalue;
       document.cookie = "expires=" + now.toUTCString() + ";"
       document.write("Setting Cookies : " + "name=" + cookievalue );
    }


    function WriteCookie1()
    {
       if( document.myform.customer_email.value == "" ) {
          alert("Enter some value!");
          return;
       }
       cookievalue = escape(document.myform.customer_email.value) + ";";
       document.cookie="email=" + cookievalue;
       document.write ("Setting Cookies : " + "email=" + cookievalue );
    }
    function ReadCookie1() {
       var allcookies = document.cookie;
       document.write ("All Cookies : " + allcookies );
       // Get all the cookies pairs in an array
       cookiearray = allcookies.split(';');
       // Now take key value pair out of this array
       for(var i=0; i<cookiearray.length; i++) {
          email = cookiearray[i].split('=')[0];
          value = cookiearray[i].split('=')[1];
          document.write ("Key is : " + email + " and Value is : " + value);
         

       }}

       function DeleteCookie1() {
       var now = new Date();
       now.setMonth( now.getMonth() - 1 );
       cookievalue = escape(document.myform.customer_email.value) + ";"
       
       document.cookie = "email=" + cookievalue;
       document.cookie = "expires=" + now.toUTCString() + ";"
       document.write("Setting Cookies : " + "email=" + cookievalue );
    }


    function show()
{
    var value=document.getElementById("demo").value;
    if(value!="Select Color")
    {
        document.bgcolor=value;
        document.cookie="color="+value+";expires=Fri,2 Feb 2022 01:00:00 UTC;";
    }
}
window.onload=function()
{
    if(document.cookie.length!=0)
    {
        var a=document.cookie.split("=");
        document.getElementById("demo").value=a[3];
        document.bgcolor=a[3];
    }
}
function store(){ //stores items in the localStorage
var nam = document.getElementById('empName').value;
var sal = document.getElementById('salary').value;
var key = document.getElementById('key').value; //gets the key from the user

const emp = {
nam: nam,
sal: sal,
}

window.localStorage.setItem(key,JSON.stringify(emp));  

}
function retrieveRecords(){ 
console.log("retrieve records");
var key = document.getElementById('retrieveKey').value;
var records = window.localStorage.getItem(key);
var paragraph = document.createElement("p");
var infor = document.createTextNode(records);
paragraph.appendChild(infor);
var element = document.getElementById("retrieve");
element.appendChild(paragraph);
}

function ADD(){
var pas = document.getElementById('password').value;
var key2 = document.getElementById('sskey').value;

window.sessionStorage.setItem(key2,pas);  
}



