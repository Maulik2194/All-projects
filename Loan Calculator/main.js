function possibleloan(){
    let loanAmount = parseFloat(document.getElementById('loanAmount').value);
    let loanPercentage = parseFloat(document.getElementById('loanPercentage').value);
    let loanMonths = parseFloat(document.getElementById('loanMonths').value);
    let result= document.querySelector('.result');
    let Monthlyrate = loanPercentage/12 * 0.01;
    let MonthAmount = ((loanAmount * Monthlyrate * Math.pow(1+Monthlyrate, loanMonths))/(Math.pow(1+ Monthlyrate, loanMonths)-1));
    result.innerHTML = `
    <div>Monthly Payment: ${parseInt(MonthAmount)}</div>
    <div>Total Payable: ${parseInt(MonthAmount * loanMonths)}</div>
    <div>Total Interest: ${parseInt(MonthAmount * loanMonths - loanAmount)}</div>`;
    result.style.display = "block";
}