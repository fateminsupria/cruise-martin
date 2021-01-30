//function for full calculation
function ticketHandler(isIncrease, ticketInputId) {
    var ticketInputValue = document.getElementById(ticketInputId);
    var ticketAmount = parseInt(ticketInputValue.value);
    var newInput = 0;
    if (isIncrease == true) {
        newInput = ticketAmount + 1;
    }
    if (isIncrease == false && ticketAmount > 0) {
        newInput = ticketAmount - 1;
    }
    ticketInputValue.value = (newInput);
    totalCalculation();
}
function totalCalculation() {
    var firstClassTickets = document.getElementById('first-class-ticket');
    var priceFirstClassTickets = parseInt(firstClassTickets.value) * 150;
    var economyTickets = document.getElementById('economy-ticket');
    var priceEconomyTickets = parseInt(economyTickets.value) * 100;
    var total = priceFirstClassTickets + priceEconomyTickets;
    // calcutating subtotal
    document.getElementById('subtotal').innerText = total;
    var tax = total * .1;
    // calculating tax
    document.getElementById('tax').innerText = tax;
    var TotalAmount = total + tax;
    document.getElementById('grand-total').innerText = TotalAmount; //calculating total amount
}
//sending ticket amount and price with tax
document.getElementById('bookingOk').addEventListener('click', function(){
    document.getElementById('confirmation').style.display = 'block';
    var firstClassTickets = document.getElementById('first-class-ticket');
    document.getElementById('ticketOneAmounts').innerText = firstClassTickets.value;
    var economyTickets = document.getElementById('economy-ticket');
    document.getElementById('ticketTwoAmounts').innerText = economyTickets.value;
    var total = document.getElementById('grand-total');
    document.getElementById('grandTotalConfirmation').innerText ="$" + total.innerText;
})
//Think ok or not for confirmation
document.getElementById('CancellationArea').addEventListener('click',function(){
    document.getElementById('confirmation').style.display = 'none';
}) 
document.getElementById('paymentOk').addEventListener('click',function(){
        document.getElementById('confirmation').style.display = 'none';
})