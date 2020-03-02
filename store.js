var yern ={}
var i=0;
var cartItem = []
var istoredNames=[];

if(document.readyState == 'loading'){
 document.addEventListener('DOMContentLoaded',ready)

}

else{
    ready()
}
function ready(){
    var removeCartItems = document.getElementsByClassName('btn-danger')   
    for(var i=0;i<removeCartItems.length;i++){
    var button = removeCartItems[i]  
    button.addEventListener('click',removeItem)

}
var inputChange = document.getElementsByClassName('cart-quantity-input')
for(var k=0; k<inputChange.length; k++){
    var input1 = inputChange[k]
    input1.addEventListener('change',updateInput)


}
var addToCart = document.getElementsByClassName('shop-item-button')
for (var a =0;a <addToCart.length;a++){
    var cart = addToCart[a]
    cart.addEventListener('click',addCart)       


}

}
function addCart(event){
    i++;
    
var test =event.target
var shopItem = test.parentElement.parentElement
var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
var image = shopItem.getElementsByClassName('shop-item-image')[0].src
   
    savedCart(title,price,image)
   
      
   
   
  
    


}

function savedCart(title,price,image){
   
    cartItem.{
        title:title,



  }
  console.log(cartItem)
  
    
  
   
    

    var cartrow = document.createElement('div')
    cartrow.classList.add('cart-row')
    var cartItem = document.getElementsByClassName('cart-items')[0]
    var contents = `
                <div class="cart-item cart-column">
                <img class="cart-item-image" src="${image}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
                </div>
                <span class="cart-price cart-column">${price}</span>
                <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
                </div>  
    
    `
 

    cartrow.innerHTML =contents
    cartItem.append(cartrow)
    cartrow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeItem)
    cartrow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',updateInput)
    updateCart()






}


function updateInput(event){
     var quantityUpdate =event.target
     if (quantityUpdate.value <=0 || isNaN(quantityUpdate.value)){
        quantityUpdate.value =1


     }
    updateCart()

}

function removeItem(event){
    var targetbutton = event.target
    targetbutton.parentElement.parentElement.remove()
    updateCart()


}



function updateCart(){
   var tt= document.getElementsByClassName('cart-items')[0]
   var cart=  tt.getElementsByClassName('cart-row')
   var total=0

 for(var i=0;i<cart.length;i++){
      var test = cart[i]
      var price = test.getElementsByClassName('cart-price')[0]
      var quanity = test.getElementsByClassName('cart-quantity-input')[0]
      
     var  newprice = parseFloat(price.innerText.replace('$',''))
    //    var newquantity = quanity.value
     
    
      total=total +newprice*quanity.value
      
      document.getElementsByClassName('cart-total-price')[0].innerText = total






 }


}

