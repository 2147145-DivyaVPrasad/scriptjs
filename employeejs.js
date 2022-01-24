/*--JS for DOM Parser--*/

var xmlDoc
var xmlFile ='NewFile.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            console.log(xmlReq.readyState)

            xmlDoc = xmlReq.responseXML
            displayTable()
        }
    }
    xmlReq.open('GET',xmlFile, true)
    xmlReq.send()
}

//function to display html table from xml data
function displayTable()
{
    var i;
    var table = "<tr><th>Employee Name</th><th>Fathers Name</th><th>Mothers Name</th><th>Mobile no</th><th>Date of Birth</th><th>Edit</th><th>Delete</th></tr>"

    var x = xmlDoc.getElementsByTagName("Employee")
    for (i = 0; i < x.length; i++)
    {
        table += "<tr><td>" +
            x[i].getElementsByTagName("Employee_name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Fathers_name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Mothers_name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Mobile_no")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Date_of_Birth")[0].childNodes[0].nodeValue + "</td>" +
            "<td><span class='material-icons' onclick='editRecord(" +i+ ")'>edit</span></td>" +
            "<td><span class='material-icons' onclick='deleteRecord(" +i+ ")'>delete</span></td></tr>";
    }
    document.getElementById("table").innerHTML = table
}

//function to delete record from XML
function deleteRecord(i)
{
    y = xmlDoc.getElementsByTagName("Employee")[i]
    var name = y.getElementsByTagName("Employee_name")[0].childNodes[0].nodeValue
    var reply = confirm("Do you want to delete record? \nName: " + name)
    if(reply == true)
    {
        xmlDoc.documentElement.removeChild(y)
        console.log("Record deleted: " + name)
        displayTable()
    }
}

//function to open form to add new record to xml
function openForm()
{
    document.getElementById("addRecordForm").style.display = "block"
}

//function to close form to add new record to xml
function closeForm()
{
    document.getElementById("addRecordForm").style.display = "none"
}

//function to add new record to xml
function addNewRecord()
{
    var i
    var details = []
    var x = document.getElementById("addRecordForm")
    Patient = xmlDoc.createElement("Employee")
    details[0] = xmlDoc.createElement("Employee_name")
    details[1] = xmlDoc.createElement("Fathers_name")
    details[2] = xmlDoc.createElement("Mothers_name")
    details[3] = xmlDoc.createElement("Mobile_no")
    details[4] = xmlDoc.createElement("Date_of_Birth")
  

    for(i = 0; i < 5; i++)
    {
        details[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
        Patient.appendChild(details[i])
    }
    xmlDoc.documentElement.appendChild(Patient);
    console.log("Record added: " + x.elements[0].value)
    displayTable()
}