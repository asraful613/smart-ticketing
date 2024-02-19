const allbtn=document.getElementsByClassName('kbd');
let count=0;
let totalPrice=0;
const grandTotal = document.getElementById('grand-total');
for(const btn of allbtn){
    btn.addEventListener('click',function(e){
        count=count+1;
        document.getElementById('count').innerText=count;
        if(count>4){
            btn.ariaDisabled=true;
            return;
        }
        btn.style.backgroundColor='green';
        const placeName=e.target.parentNode.childNodes[3].innerText
        console.log(placeName);
        const price=550;
        const seatCount=document.getElementById('seat-count')
        const tr=document.createElement('tr');
        tr.innerHTML=`<th></th>
        <td>${placeName}</td>
        <td>Economoy</td>
        <td>${price}</td>`;
        const section=document.getElementById('section');
        section.appendChild(tr)
        totalPrice+=price;
        const totalDisplay = document.getElementById('total-price');
        totalDisplay.innerText = totalPrice;
            grandTotal.innerText = totalPrice;
    });
}
