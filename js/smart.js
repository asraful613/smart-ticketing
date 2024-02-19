function applyCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const couponCode = couponInput.value.trim();
    const grandTotalElement = document.getElementById('grand-total');
    let grandTotal = parseFloat(grandTotalElement.innerText);
    const applyButton = document.getElementById('apply-button');

    if (couponCode.toUpperCase() === 'NEW15') {
        const discountedTotal = grandTotal * 0.85; // 15% discount
        grandTotalElement.innerText = discountedTotal.toFixed(2);
        alert('Coupon applied successfully!');
    } else if (couponCode === 'Couple 20') {
        const discountAmount = grandTotal * 0.20; // 20% discount
        grandTotal -= discountAmount;
        grandTotalElement.innerText = grandTotal.toFixed(2);
        alert('Coupon applied successfully!');
    } else {
        alert('Invalid coupon code!');
        return;
    }
    applyButton.disabled = true;
}


let availableSeats = 40;

function keyboard(section) {
    if (availableSeats > 0) {
        availableSeats--;
        updateSeats();
    } else {
        alert('No seats available!');
    }
}

function updateSeats() {
    document.getElementById('seat').innerText = availableSeats;
}

function decreaseSeat() {
    if (availableSeats > 0) {
        availableSeats--;
        updateSeats();
    } else {
        alert('No seats available!');
    }
}