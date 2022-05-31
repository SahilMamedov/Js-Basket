let addBtns=document.querySelectorAll(".addBtn")
let ProductCount=document.getElementById("productCount")

addBtns.forEach(btn => {
    
    btn.addEventListener("click",function(event){
        
        event.preventDefault();
        if(localStorage.getItem("basket")==null){
            localStorage.setItem("basket",JSON.stringify([]))
        }
        let array=JSON.parse(localStorage.getItem("basket"));
        let ProductId =this.parentElement.getAttribute("data-id");
        let existProduct =array.find(p=>p.id==ProductId);
        if(existProduct==undefined) {
            array.push({
                id:ProductId,
                name:this.parentElement.firstElementChild.innerText,
                price:this.previousElementSibling.innerText,
                imgUrl:this.parentElement.previousElementSibling.getAttribute("src"),
                count:1

            })
        }
        else{
            existProduct.count++;
            
        }
        localStorage.setItem("basket",JSON.stringify(array))
        writeProductCount();

    })
    
});


function writeProductCount(){
    if(localStorage.getItem("basket")!=null){
        let array=JSON.parse(localStorage.getItem("basket"))
    ProductCount.innerText=array.length;
    }
}
writeProductCount();