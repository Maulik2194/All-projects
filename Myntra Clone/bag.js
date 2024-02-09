let containerElement = document.querySelector('.cartitems');
let cartsummaryelement = document.querySelector('.cartsummary');
let bagItemObjects;
const fees =99;
onLoad();

function onLoad(){
    loadBagItems();
    displayBagItems();
    displayBagsummary();
}

function displayBagsummary(){

    let totalitem = bagItems.length;
    let totalMRP = 0;
    let totaldiscount = 0;

    bagItemObjects.forEach(item => {
        totalMRP += item.original_price;
        totaldiscount += item.original_price - item.current_price;
    });
    let finalpayment = totalMRP - totaldiscount + fees;
    cartsummaryelement.innerHTML=`
        <div>PRICE DETAILS (${totalitem} items)</div>
            <div class="price-details">
            <span>Total MRP</span>
            <span>Rs ${totalMRP}</span>
            </div>
            <div class="price-details">
            <span>Discount on MRP</span>
            <span class="discountcolor">-Rs ${totaldiscount}</span>
            </div>
            <div class="price-details">
            <span>Convenience Fee</span>
            <span>Rs 99</span>
            </div>
            <hr>
            <div class="price-details">
            <span>Total amount</span>
            <span>Rs ${finalpayment}</span>
        </div>`;
}

function loadBagItems(){
    console.log(bagItems);

    bagItemObjects = bagItems.map(itemID => {
        for (let i=0; i<items.length; i++){
            if(itemID == items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}

function displayBagItems(){
    let tempHTML = '';
    bagItemObjects.forEach(item => {
    tempHTML += generateItemHTML(item);
    ;    
    });
    containerElement.innerHTML = tempHTML;
}

function removeFromBag(itemId){
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadBagItems();
    displayBagIcon()
    displayBagItems();
    displayBagsummary();
}

function generateItemHTML(item){
    return `<div class="cartitem">
    <img class="imgs" src="${item.image}" alt="Item Image">
    <div class="cartdetails">
        <div class="company_name">${item.company}</div>
        <div class="item_name">${item.item_name}</div>
        <div class="_price">
            <span class="current_price">RS ${item.current_price}</span>
            <span class="original_price">RS ${item.original_price}</span>
            <span class="_discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <div class="return-policy"><b>${item.return_period
        } days</b> return available</div>
        <div class="deliver-date">Delivery by <span>${item.delivery_date}</span></div>
    </div>
    <button class="bag-button" onclick="removeFromBag(${item.id})">X</button>
</div>`;
}


{/*  */}
