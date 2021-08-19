function updateDateCaseNumber(product,price,isIncreasing){
    const productInput = document.getElementById(product + '-input');
    let productNumber = productInput.value;

    if(isIncreasing==true){
        productNumber = parseInt(productNumber)+1;
    }
    else if (productNumber>0){
        productNumber = parseInt(productNumber)-1;
    }

    productInput.value=productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();
}

// function calculate total 

function getInputValue(product){
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = parseInt(subTotal / 10);
    const totalPrice = subTotal+tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
    // console.log(subTotal);  
}


//handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click',function(){
    updateDateCaseNumber('phone',1219,true); 
});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateDateCaseNumber('phone',1219,false);
});

//handle case increase decrease event
document.getElementById('case-plus').addEventListener('click',function(){
    updateDateCaseNumber('case',59,true);

});
document.getElementById('case-minus').addEventListener('click',function(){
    updateDateCaseNumber('case',59,false);
});
