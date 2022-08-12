
//creating a container Div
const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

//creating a container for the Tip Calculator
const TipCalculatorDiv = document.createElement('div');
TipCalculatorDiv.classList.add('tip-calculator-div');

//Div for getting the bill input
const billTotalInputDiv = document.createElement('div');
billTotalInputDiv.setAttribute('class','input-group mb-3 total-bill')

//label for total-bill;
const labelTotalBill = document.createElement('h4')
labelTotalBill.setAttribute('class','fw-bolder')
labelTotalBill.innerText = 'Total Bill';

//span for rupees symbol;
const spanForRupees = document.createElement('span')
spanForRupees.setAttribute('class',' input-group-text ')
spanForRupees.innerText ='₹'

//input element for getting the total Bill
const billTotalInput = document.createElement('input')
billTotalInput.setAttribute('type','text')
billTotalInput.setAttribute('placeholder','0.00')

//label for tip-percentage
const tipLabel = document.createElement('h4');
tipLabel.setAttribute('class','fw-bolder')
tipLabel.innerText = 'Tip - Percentage';

//div for getting the percentage input.
const tipPercentDiv = document.createElement('div');
tipPercentDiv.setAttribute('class','input-group mb-3 tip-percentage');

//span for Percentage symbol
const percentSpan = document.createElement('span');
percentSpan.setAttribute('class','input-group-text')
percentSpan.innerText ='%'  

//input element for tip-percentage
const tipPercentInput = document.createElement('input');
tipPercentInput.setAttribute('type','text');
tipPercentInput.setAttribute('placeholder','10');

//div for Labels - persons and total-bill
const finalLabelDiv = document.createElement('div');
finalLabelDiv.setAttribute('class','final-label')

//label for person.
const personsLabel = document.createElement('h4');
personsLabel.setAttribute('class','fw-bolder')
personsLabel.innerText = 'Persons';

//label for total- bill- per-person;
const totalCashLabel = document.createElement('h4');
totalCashLabel.setAttribute('class','fw-bolder')
totalCashLabel.innerText = 'Total Bill-Per-Person';

//appeding both labels to the Div
finalLabelDiv.append(personsLabel,totalCashLabel )

//creating a result div 
const resultDiv = document.createElement('div');
resultDiv.setAttribute('class','result-div');

//div for number of persons
const persontotalDiv = document.createElement('div');
persontotalDiv.classList.add('number-of-persons');

//creating an Add button
const addBtn = document.createElement('button');
addBtn.setAttribute('class','add-button')
addBtn.setAttribute('type','submit')
addBtn.innerHTML = ' <img src="/plus.png" alt="add-icon" >'

//span tag to display the number of Persons
const inputSpan = document.createElement('span');
inputSpan.setAttribute('class','persons-input')
inputSpan.innerText ='1'

//creating a minus button;
const minusBtn = document.createElement('button');
minusBtn.setAttribute('class','minus-button')
minusBtn.setAttribute('type','submit')
minusBtn.innerHTML = ' <img src="/minus(1).png"  alt="minus-icon" >'

//appending all three things to the div.
persontotalDiv.append(addBtn,inputSpan, minusBtn)

//span element to display the total bill value after adding the tip percent and dividing between the persons
const personCashResult = document.createElement ('span');
personCashResult.setAttribute('class','total-bill-tipinc')
personCashResult.innerText ='₹0'

// appending all other stuffs

billTotalInputDiv.append(spanForRupees, billTotalInput )
tipPercentDiv.append(percentSpan,tipPercentInput)
resultDiv.append(persontotalDiv,personCashResult )
TipCalculatorDiv.append(labelTotalBill, billTotalInputDiv,tipLabel,tipPercentDiv,finalLabelDiv,resultDiv);
containerDiv.append(TipCalculatorDiv);
document.body.append(containerDiv)


// creating the  functions
var count =0;

const calculateBill=() =>{
const bill  = Number(billTotalInput.value);


const tipPercentage  = Number(tipPercentInput.value)/100;
let  numberOfPersons = Number(inputSpan.innerText)
const tipAmount = bill*tipPercentage;
const total = tipAmount +bill;

const billPerPerson = total/numberOfPersons;
personCashResult.innerText =`₹${billPerPerson.toFixed(2).toLocaleString('en-IN')}`
}

const increasePeople =()=>{
    count = count+1;
    inputSpan.innerText = count;
    
}

const decreasePeople =()=>{
    if(count <= 1){
        return ;
    } else{
        count = count-1;
        inputSpan.innerText = count;   
    }    
}

// adding event listener to total bill input
billTotalInput.addEventListener('change',()=>{
    calculateBill();
})

// adding event listener to tip percentage input
tipPercentInput.addEventListener('change',()=>{
    calculateBill();
})

// adding event listener to add button
addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
   increasePeople();
   calculateBill();
})
// adding event listener to minus Button
minusBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    decreasePeople();
    calculateBill();
})

