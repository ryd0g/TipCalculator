const tip = document.querySelector('#display-tip')
const total = document.querySelector('#display-total')
const per = document.querySelector('#display-per')
const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = document.querySelector('#input-people')

function calculateTip() {
    const billValue = billInput.value
    const tipValue = tipInput.value
    const peopleValue = peopleInput.value

    const tipAmount = billValue * tipValue / 100
    const totalAmount = parseFloat(tipAmount) + parseFloat(billValue)
    const perAmount = parseFloat(tipAmount / peopleValue)
  
    tip.innerHTML = '$' + tipAmount.toFixed(2)
    total.innerHTML = '$' + totalAmount.toFixed(2)
    per.innerHTML = '$' + perAmount.toFixed(2)
  }

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)