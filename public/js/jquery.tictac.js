function square(num) {
  let errorr = new Error('The given argument is not a number');
  if (isNaN(num)) {
    throw errorr;
  }
  else {
    return num * num;
  }
}

$(document).ready(function(){
  $("#reverse").click(function(num){
    num = num + "";
    let errorr = new Error('The given argument is not a number');
    if (isNaN(num)) {
      throw errorr;
    }
    else {
      return num.split("").reverse().join("");
    }  
  });
});


// function reverse(num) {
//   num = num + "";
//   let errorr = new Error('The given argument is not a number');
//   if (isNaN(num)) {
//     throw errorr;
//   }
//   else {
//     return num.split("").reverse().join("");
//   }


// }
function strongnumber(num) {
  if (!num) var num = $('#num').value;
  sum = 0;
  r = 0;


  temp = num;

  while (num) {

    i = 1;
    fact = 1;


    r = num % 10;


    while (i <= r) {
      fact = fact * i;
      i++;
    }


    sum = sum + fact;

    num = Math.floor(num / 10);
  }


  if (temp == sum) {
    return "Strong Number";
  } else {
    return "Not a Strong Number";
  }
}




function calculator() {
  console.log("calculator")
  var radiSelect;
  if (document.getElementById("square").checked) {
    radiSelect = "sqaure";
  }
  else if (document.getElementById("reverse").checked) {
    radiSelect = "reverse";
  }
  else if (document.getElementById("strong").checked) {
    radiSelect = "strongnumber";
  }
  const n = document.getElementById("num").value;
  switch (radiSelect) {

    case "sqaure":
      document.getElementById("result").innerHTML = square(n);
      break;
    case "reverse":
      document.getElementById("result").innerHTML = reverse(n);
      break;
    case "strongnumber": document.getElementById("result").innerHTML = strongnumber(n);
      break;
  }
}