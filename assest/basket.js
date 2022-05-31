let table=document.getElementById("table")

if(localStorage.getItem("basket")!=null){
    let goodList=JSON.parse(localStorage.getItem("basket"))


goodList.forEach(product => {
    let tr=document.createElement("tr");
    let tdImage=document.createElement("td");
    let image=document.createElement("img");
    image.src=product.imgUrl;
    image.classList.add("image")
    tdImage.append(image);

    let tdName=document.createElement("td");
    tdName.innerText=product.name;

    let tdPrice=document.createElement("td");
    tdPrice.innerText=product.price;

    let tdCount=document.createElement("td");
    tdCount.innerText=product.count;

    // let minus=document.createElement("i")
    // minus.classList.add("fa-solid","fa-minus")
    // tdCount.append(minus)

    // let plus=document.createElement("i")
    // plus.classList.add("fa-solid","fa-plus")
    // tdCount.append(plus)

    let subTotal=document.createElement("td");
    subTotal.innerText+=product.price*product.count

    let closeBtn=document.createElement("i")

    closeBtn.classList.add("fa-solid","fa-xmark","icon")
    closeBtn.setAttribute('data-id',`${product.id}`)
    closeBtn.addEventListener("click",function(event){
   
    let id = this.getAttribute("data-id")
    let newArray= goodList.filter(product => product.id !== id);
    
    localStorage.setItem("basket",JSON.stringify(newArray))
    this.target.parentElement.remove()
    

    writeProductCount();
      
       
       
     
   })

    tr.append(tdImage,tdName,tdPrice,tdCount,subTotal,closeBtn)

    table.lastElementChild.append(tr)

    

});

}