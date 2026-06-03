const weightInput = document.querySelector('#weight')
const heightInput = document.querySelector('#height')
const weightVal = document.querySelector('#weight-val')   //1
const heightVal = document.querySelector('#height-val')   //1
const bmiResult = document.querySelector('#result')  
const resultText = document.querySelector('#category')

function bmiCalculator(){
    let weightInputValue = weightInput.value
    let heightInputValue = heightInput.value
    weightVal.innerHTML = weightInputValue                 //1 baraie inke ro input range karbar dastgire ro k jabe ja kard ro har adadi vaisad adaddi 
    heightVal.innerHTML = heightInputValue                //1  ; on baqal neshun dade mishe ham taqir kone 

    // formole mohasebe : ma qad ro be cm gereftim vali b m mikhaim 

    let bmiValue = (weightInputValue / (Math.pow(heightInputValue/100 ,2))).toFixed(1) // miad be m tabdil betavan 2 miresone  // miad 1 raqam ashar neshun mide

    bmiResult.innerHTML = bmiValue    

if(bmiValue < 18.5){
resultText.innerHTML =" under weight"
bmiResult.style.color = '#ffc44d'

} else if (bmiValue >= 18.5 && bmiValue <= 24.9){
    resultText.innerHTML =" normal weight"
    bmiResult.style.color = 'green'

}else if( bmiValue >= 25 && bmiValue < 29.9){
    resultText.innerHTML =" over weight"
    bmiResult.style.color = '#ff884d'

}else{
    resultText.innerHTML ="obses"
    bmiResult.style.color = '#ff5e4d'
}


}

//weightInput.addEventListener('change',bmiCalculator)
//heightInput.addEventListener('change',bmiCalculator)
weightInput.addEventListener('input',bmiCalculator)
heightInput.addEventListener('input',bmiCalculator)

