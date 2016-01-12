console.log("Tutorial 2")

//First step: create the .json file

/*When doing th syntax for JSON, double quotes must be around
the properties/keys and their respective values*/



//Ajax request in this request
function ajaxGetJSON () {



  var hr = new XMLHttpRequest();

  hr.open("GET", "mylist.json", true);
  hr.setRequestHeader("Content-type", "application/json", true);
  hr.onreadystatechange = function() {
    if(hr.readyState == 4 && hr.status == 200) {
  		 var data = JSON.parse(hr.responseText);
  		 var results = document.getElementById("results");
       results.innerHTML = data.user;
    }
    else {
      console.log('trying')
    }

  }

  hr.send(null);
  results.innerHTML = "requesting...";
}
