function setAmount(elementid, amount){
    const elementField = document.getElementById(elementid);
    elementField.innerText = amount;
}
function totalAmount(){
    const bestPrice = document.getElementById('bestPrice');
    const bestPriceAmount = parseInt(bestPrice.innerText);
    const memoryCost = document.getElementById('memoryCost');
    const memoryCostAmount = parseInt(memoryCost.innerText);
    const storageCost = document.getElementById('storageCost');
    const storageCostAmount = parseInt(storageCost.innerText);
    const deliveryCost = document.getElementById('deliveryCost');
    const deliveryCostAmount = parseInt(deliveryCost.innerText);
    const totalAmount = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    const totalPrice = document.getElementById('totalPrice');
    const totalPriceWithPromo = document.getElementById('totalPriceWithPromo');
    totalPrice.innerText = totalAmount;
    totalPriceWithPromo.innerText = totalAmount;
}

// work with memory items
document.getElementById('8GbMemory').addEventListener('click', function() {
    setAmount('memoryCost', 0)
    totalAmount()
})
document.getElementById('16GbMemory').addEventListener('click', function() {
    setAmount('memoryCost', 180)
    totalAmount()
})
// work with storage items
document.getElementById('256GbStorage').addEventListener('click', function() {
    setAmount('storageCost', 0)
    totalAmount()
})
document.getElementById('512GbStorage').addEventListener('click', function() {
    setAmount('storageCost', 100)
    totalAmount()
})
document.getElementById('1TbStorage').addEventListener('click', function() {
    setAmount('storageCost', 180)
    totalAmount()
})

// work with delivery items
document.getElementById('freeDelivery').addEventListener('click', function() {
    setAmount('deliveryCost', 0)
    totalAmount()
})
document.getElementById('chargedDelivery').addEventListener('click', function() {
    setAmount('deliveryCost', 20)
    totalAmount()
})

// work with promo code 
document.getElementById('promoApplyButton').addEventListener('click', function() {
    const promoCode = document.getElementById('promoCode');
    const promoCodeText = promoCode.value;
    if(promoCodeText == 'stevekaku'){
        const totalPrice = document.getElementById('totalPriceWithPromo');
        const totalPriceWithoutPromo = document.getElementById('totalPrice');
        const totalPriceWithoutPromoAmount = parseInt(totalPriceWithoutPromo.innerText)
        const totalPriceWithDiscount = Math.round((totalPriceWithoutPromoAmount/100) * 80);
        totalPrice.innerText = totalPriceWithDiscount;
        promoCode.value = ''
        document.getElementById('promoError').innerText = '';
    }
    else{
        const promoError = document.getElementById('promoError');
        promoError.innerText = "You input an invalid promo code";
        promoError.style.color = 'red';
        promoCode.value = ''
    }
})

