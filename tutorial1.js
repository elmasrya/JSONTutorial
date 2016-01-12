console.log("Tutorial 1")


/*obj1 is a a JSON object, user/age/country are the key, any data after
the colin is the value
*/
var obj1 = {user: "Sam",
            age: 27,
            country:"Egypt" };

var obj2 = {user: "John",
            age: 24,
            country:"Russia" };

var obj3 = {user: "Mike",
            age: 25,
            country:"Italy"};

//within in json objects, you can nest objects within objects- deep data nesting
//to access the objects within objects or the keys, you must the dot to access them
var obj4 = {u1:obj1,
            u2:obj2,
            u3:obj3 };

document.write(obj4.u1.user);
$('#top').html('<h1>' + obj4.u1.user + '</h1>');


//This is the array section

var meats = ["beef", "pork", "chicken"];
var fruits = ["apple", "orange", "grapes"];
var obj5 = {arry1:meats,
            arry2: fruits};
$('#middle').html('<h1>' + obj5.arry1[1] + '</h1>')
