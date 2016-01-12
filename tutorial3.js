console.log("Tutorial 3")

function ajaxGetJSON () {



  var hr = new XMLHttpRequest();

  hr.open("GET", "my_json_list.php", true);
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
