function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value  = productNumber
    //  update case total
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = productNumber * price;
    // update subtotal total tax
    calculateTotal();
}

// phone
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1219, false);
})

// case
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber( 'case', 59, true);
    
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber( 'case', 59, false) ;
})

// subtotal tax total
function getInputValue(product){
    const productInput = document.getElementById( product +'-number');
    const productNumber =parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal/10;
    const total = subtotal + tax;
    
   document.getElementById('sub-total').innerText = subtotal;
   document.getElementById('tax').innerText = tax;
   document.getElementById('total').innerText = total;    
}

// delet item
// document.getElementById('phone').addEventListener('click', function(){
//     document.getElementById("phone").style.display = "none";
// })
// document.getElementById('case').addEventListener('click', function(){
// document.getElementById("case").style.display = "none";    
// })

// checkout
document.getElementById('checkout').addEventListener('click', function(){
    alert('Order confirmed!')
})