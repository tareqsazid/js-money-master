function getInputValue(inputId) {
    const inputElement = document.getElementById(inputId).value;
    if (isNaN(inputElement)) {
        const warning = alert('please input number type value');
        return warning;
    }
    const inputNum = parseInt(inputElement);
    return inputNum;


}

function getInnerTextById(elementId) {
    const textElement = document.getElementById(elementId);
    const innrText = parseInt(textElement.innerText);
    return innrText;
}

function setInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// calculate btn event
document.getElementById('calculateBtn').addEventListener('click', function () {
    const income = getInputValue("income");
    // Expense
    const food = getInputValue("food");
    const rent = getInputValue("rent");
    const others = getInputValue("others");
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(others)){
        const warning = alert('please input number type value');
        return warning;
    }else if (income <= 0 || food <= 0 || rent <= 0 || others <= 0) {
        const warning = alert('please input positive number');
        return warning;
    }
    // total expence
    const totalExpense = food + rent + others;
    if (income < totalExpense) {
        const warning = alert('your expence is getarthan your income');
        return warning;
    }
    // set expence
    setInnerText('total-expence', totalExpense);

    // get balence 
    const balence = income - totalExpense;
    setInnerText('blance', balence);
})

// savving btn
document.getElementById('savingbtn').addEventListener('click', function () {
    const incomeBalance = getInputValue("income");
    const balance = getInnerTextById('blance');
    const savingInputValue = getInputValue("saving-input");
    

    const savingAmount = incomeBalance * (savingInputValue/100);
    const remainingBalanece = balance - savingAmount;

    if (savingAmount >= balance) {
        const warning = alert('your expence is getarthan your income');
        return warning;
    }else if (isNaN(savingInputValue)) {
        const warning = alert('please input number type value');
        return warning;
    }

    setInnerText('savingAmount', savingAmount);
    setInnerText('remainigAmount', remainingBalanece);

    console.log(savingAmount);
    

})