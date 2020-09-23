const tip = document.querySelector('#display-tip')
const total = document.querySelector('#display-total')
const perTip = document.querySelector('#display-per')
const perAmount = document.querySelector('#display-each')
const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = document.querySelector('#input-people')

function calculateTip() {
    const billValue = billInput.value
    const tipValue = tipInput.value
    const peopleValue = peopleInput.value

    const tipAmount = billValue * tipValue / 100
    const tipEach = tipAmount / peopleValue
    const totalAmount = parseFloat(billValue) + parseFloat(tipAmount)
    const totalPer = totalAmount / peopleValue
  
    tip.innerHTML = '$' + tipAmount.toFixed(2)
    total.innerHTML = '$' + totalAmount.toFixed(2)
    perTip.innerHTML = '$' + tipEach.toFixed(2)
    perAmount.innerHTML = '$' + totalPer.toFixed(2)
  }

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)