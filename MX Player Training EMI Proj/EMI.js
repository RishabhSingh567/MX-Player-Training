document.querySelector('#calc').addEventListener('click',function(e){



  var loanAmount = document.getElementById("PA").value;
  var interestRate = document.getElementById("IR").value;
  var loanDuration = document.getElementById("time").value;

  if(loanAmount<=0){
    alert("Please Enter Valid Amount");
  }
  if(interestRate<=0){
    alert("Please Enter Valid Rate");
  }
  if(loanDuration<=0){
    alert("Please Enter Valid Tenure");
  }


 var interestPerYear = (loanAmount * interestRate)/100;
 var monthlyInterest = interestPerYear/12;

 var monthlyPayment = monthlyInterest + (loanAmount/loanDuration);
 var totalInterestCost = monthlyInterest * loanDuration;
 var totalRepayment = monthlyPayment * loanDuration;

 document.getElementById("monthly-interest").innerHTML = " ₹ " +monthlyInterest.toFixed(2);
 document.getElementById("monthly-payment").innerHTML = " ₹ " +monthlyPayment.toFixed(2);
 document.getElementById("total-repayment").innerHTML =" ₹ " +totalRepayment.toFixed(2);
 document.getElementById("total-interest").innerHTML =" ₹ " +totalInterestCost.toFixed(2);

    e.preventDefault();


});
