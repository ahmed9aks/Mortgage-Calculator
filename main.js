function calculateMortgage(p, r, n){
    r = percentToDecimal(r);
    n = yearsToMonths(n);
    var pmt = (r * p) / (1-(Math.pow((1+r), (-n))));
    return parseFloat(pmt.toFixed(2));
}
function percentToDecimal(percent){
    return (percent/12)/100;
}
function yearsToMonths(year){
    return year *12;
}
function postPayments(payment){
    var htmlEl = document.getElementById("outMonthly");
    htmlEl.innerText = "$"+ payment;
}
var btn = document.getElementById("btnCalc");
btn.onclick = function(){
    var cost = document.getElementById("inCost").value;
    if (cost < 0){
        alert("Invalid Price");
        return false;
    }
    if (cost == ""){
        alert("Please enter cost amount");
        return false;
    }
    var downPayment = document.getElementById("inDown").value;
    var amountBorrowed = cost - downPayment;
    var interest = document.getElementById("inAPR").value;
    var term = document.getElementById("inAmortization").value;
    var pmt = calculateMortgage(amountBorrowed, interest, term);
    postPayments(pmt);
}


