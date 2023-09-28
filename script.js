let billAmount=document.querySelector('#bills')
let customInput=document.querySelector('#custom')
let numberofPeople=document.querySelector('#split')
let tipAmount=document.querySelector('#total-amount')
let total=document.querySelector('#self')
let tipPercentage=document.querySelectorAll('.percent')
let reset=document.querySelector('#default')
let errormsg=document.querySelector('#errormessage')

errormsg.style.display='none'

function input(){
    let percentage=0
    tipPercentage.forEach(tip=>{
        tip.addEventListener('click',()=>{
            let amount=billAmount.value
            let split=numberofPeople.value
            percentage=tip.value
            if(split==='')
            {
                errormsg.style.display='block'
                errormsg.innerHTML="can't be empty"
            }
            else{
                errormsg.style.display='none'
                updateDisplay(amount, split, percentage)
            }
        })
    })
    customInput.addEventListener('input',()=>{
        let amount=billAmount.value
        let split=numberofPeople.value
        percentage=customInput.value
        if(split==='')
        {
            errormsg.style.display='block'
            errormsg.innerHTML="can't be empty"
        }
        else{
            errormsg.style.display='none'
            updateDisplay(amount, split, percentage)
        }
    })
}


function updateDisplay(amount,split,percentage){
    let tip=((Number(amount)*Number(percentage))/(Number(split)*100))
    let total_amount=(Number(amount)/Number(split))
    tipAmount.innerHTML=`$${tip.toFixed(2)}`
    let sumation=((Number(amount)*Number(percentage))/(Number(split)*100))+(Number(amount)/Number(split))
    total.innerHTML=`$${sumation.toFixed(2)}`
}
input()

reset.addEventListener('click',()=>{
    tipAmount.innerHTML=`$0.00`
    total.innerHTML=`$0.00`
    billAmount.value=''
    numberofPeople.value=''
})