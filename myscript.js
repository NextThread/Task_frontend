

    function myfunc()
    {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
    x.style.display = "block"; 
  } else {
    document.getElementById("myDIV1").innerHTML = "Your subscription was successful! kindly check your mail and conform your subscription. If you dont see the email within few minutes,check the spam folder."; 
  } 
}
