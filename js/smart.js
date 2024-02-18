var seatleft=40;
var seatCount = 0;
function keyboard() {
    seatCount++;
    updateSeatCount();
}

function updateSeatCount() {
    var clickCountElements = document.querySelectorAll('.clickCount');
    clickCountElements.forEach(function(element) {
        element.textContent = seatCount;
         const seatLeft=document.getElementById('seat').innerText;  
    });
}
updateSeatCount();