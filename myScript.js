var p1 = 0, p2 = 0, p3=0, p4=0, p5=0, p6=0, p7=0, p8=0, p9=0, p10=0;

function price1(){

  var x = document.getElementById("unit1");
  var selected = x.options[x.selectedIndex].value;
  var y = document.querySelector('input[name="type1"]:checked').value;
  var myPrice = y * selected;
  p1= myPrice;
  document.getElementById("price1").innerHTML =myPrice;

}

function price2(){

  var x = document.getElementById("unit2");
  var selected = x.options[x.selectedIndex].value;
  var y = document.querySelector('input[name="type2"]:checked').value;
  var myPrice = y * selected;
  p2= myPrice;
  document.getElementById("price2").innerHTML =myPrice;

}

function price3(){

  var x = document.getElementById("unit3");
  var selected = x.options[x.selectedIndex].value;
  var y = document.querySelector('input[name="type3"]:checked').value;
  var myPrice = y * selected;
  p3= myPrice;
  document.getElementById("price3").innerHTML =myPrice;

}

function price4(){

  var x = document.getElementById("unit4");
  var selected = x.options[x.selectedIndex].value;
  var y = document.querySelector('input[name="type4"]:checked').value;
  var myPrice = y * selected;
  p4= myPrice;
  document.getElementById("price4").innerHTML =myPrice;

}

function price5(){

  var x = document.getElementById("unit5");
  var selected = x.options[x.selectedIndex].value;
  var y = document.querySelector('input[name="type5"]:checked').value;
  var myPrice = y * selected;
  p5= myPrice;
  document.getElementById("price5").innerHTML =myPrice;

}

function price6(){

  var x = document.getElementById("unit6");
  var selected = x.options[x.selectedIndex].value;
  var y = document.querySelector('input[name="type6"]:checked').value;
  var myPrice = y * selected;
  p6= myPrice;
  document.getElementById("price6").innerHTML =myPrice;

}

function price7(){

  var x = document.getElementById("unit7");
  var selected = x.options[x.selectedIndex].value;
  var y = document.querySelector('input[name="type7"]:checked').value;
  var myPrice = y * selected;
  p7= myPrice;
  document.getElementById("price7").innerHTML =myPrice;

}

function price8(){

  var x = document.getElementById("unit8");
  var selected = x.options[x.selectedIndex].value;
  var y = document.querySelector('input[name="type8"]:checked').value;
  var myPrice = y * selected;
  p8= myPrice;
  document.getElementById("price8").innerHTML =myPrice;

}

function price9(){

  var x = document.getElementById("unit9");
  var selected = x.options[x.selectedIndex].value;
  var y = document.querySelector('input[name="type9"]:checked').value;
  var myPrice = y * selected;
  p9= myPrice;
  document.getElementById("price9").innerHTML =myPrice;

}

function price10(){

  var x = document.getElementById("unit10");
  var selected = x.options[x.selectedIndex].value;
  var y = document.querySelector('input[name="type10"]:checked').value;
  var myPrice = y * selected;
  p10= myPrice;
  document.getElementById("price10").innerHTML =myPrice;

}

function calculation() {
  var discount=0.0;
  if(document.getElementById("items1").checked != true)
    p1 = 0;
  else if(document.getElementById("items2").checked != true)
    p2 = 0;
  else if(document.getElementById("items3").checked != true)
    p3 = 0;
  else if(document.getElementById("items4").checked != true)
    p4 = 0;
  else if(document.getElementById("items5").checked != true)
    p5 = 0;
  else if(document.getElementById("items6").checked != true)
    p6 = 0;
  else if(document.getElementById("items7").checked != true)
    p7 = 0;
  else if(document.getElementById("items8").checked != true)
    p8 = 0;
  else if(document.getElementById("items9").checked != true)
    p9 = 0;
  else (document.getElementById("items10").checked != true)
    p10 = 0;
    
  var total = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10;
  if(total > 500){
    discount = 0.15*total;
  }
  var afterTax = total - discount;
  document.getElementById("total").innerHTML ="Total: "+total+"<br>After tax: "+afterTax;

  var txt;
  var r = confirm("Do you want to proced  with the payment? ");
  if (r == true) {
    txt = "Thank you!";
  } else {
    txt = "application withdraw!";
  }
  document.getElementById("text").innerHTML = txt;

}

function validateForm() {


  //var emailMatch = /^\[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,4}$/
  var fname = document.forms["myForm"]["fname"].value
  var lname = document.forms["myForm"]["lastname1"].value
  var email = document.forms["myForm"]["email"].value
  errors = []

  if(!fname){
    errors.push("The first name is required")
  }
  if(!lname){
    errors.push("The last name is required")
  }
  if(!email){
    errors.push("the email field is required")
  }
  /*
  else if(!emailMatch.test(email)){
    errors.push(email)
    errors.push("the email has to be in the format of example@mail.com")
  }
  */
 
  if(errors.length){
    event.preventDefault()
    alert(errors.join("\n"))
  }
  else{
    prompt("Are you sure you want to submit")
  }
}
