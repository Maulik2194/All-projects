function Calculate(){
    let billAmount = document.getElementById('billAmount');
    let ratingSelection = document.getElementById('ratingSelection');
    let totalPerson = document.getElementById('totalPerson');
    let mealSelection = document.getElementById('mealSelection');
    let tipResult = document.getElementById('tipResult');

    if((isNaN(billAmount.value)) || (isNaN(totalPerson.value))){
        alert('Please enter numbers only');
    }else if(billAmount.value == "" || totalPerson.value == ""){
        alert('Enter all fields first');
    }else if(billAmount.value <0 || totalPerson.value <0 ){
        alert('Please enter valid positive value');
    }else {
        let tipValue =0;
        if(ratingSelection.value == "Poor"){
        tipValue = 25; 
        }else if(ratingSelection.value == "Average"){
        tipValue = 50;
        }else if(ratingSelection.value == "Good"){
        tipValue = 75;
        }else {
            tipValue = 100;
        }
        if(mealSelection.value == "Dinner") {
            tipValue +=  5;
        }else {
            tipValue = tipValue;
        }
        console.log(tipValue);
        let perPersonValue = ((parseFloat(billAmount.value) + tipValue)/parseFloat(totalPerson.value));
        tipResult.innerHTML = `
        <h3>Result: </h3>
        <div>Tip : $ ${tipValue}</div>
        <div>Total amount: $ ${billAmount.value}</div>
        <div>Average per person: $ ${perPersonValue}</div>`;
    }
}
