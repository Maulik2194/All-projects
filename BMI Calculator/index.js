let selectValue = document.getElementById('selectValue');
let ageValue = document.getElementById('ageValue');
let heightFoot = document.getElementById('heightFoot');
let heightFeet = document.getElementById('heightFeet');
let weightValue = document.getElementById('weightValue');
let BMIOutput = document.getElementById('BMIOutput');

function generate(){

    if(selectValue.value == '' || ageValue.value == '' || 
    heightFeet.value == '' || heightFoot.value == '' ||
    weightValue.value == ''){
        alert("Enter all fields before EMI")
    }else{
        let heightInMeters = heightFoot.value * 0.3048 + heightFeet.value * 0.0254;
        let BMI = weightValue.value/(heightInMeters * heightInMeters);
        let weightType;

        if(BMI< 18.5){
            weightType = 'Under Weight';
        }else if(BMI < 24.9){
            weightType = 'Normal Weight';
        }else if(BMI < 29.9){
            weightType = 'Over Weight';
        }else{
            weightType = 'obese';
        }
        BMIOutput.innerHTML=`
        <div>Your BMI: ${BMI}</div>
        <div>Category: ${weightType}</div>`;
    }
}