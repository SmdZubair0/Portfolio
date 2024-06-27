let v = document.querySelectorAll(".view")
let box = document.querySelector(".cert-box")
let close = document.querySelector(".close")

v.forEach(c => {
    let i = document.createElement("iframe")
    c.addEventListener("click",()=>{
        i.setAttribute("src",c.getAttribute("data-c"))
        console.log(i)
        i.width = "600px"
        i.height = "550px"
        if(window.innerWidth < 750){
            i.width = "250px";
            i.height = "200px";
        }
        if (!box.contains(i)) {
            box.prepend(i);
        }
        box.style.padding = "20px"
        close.innerText = "X"
    })
    close.addEventListener("click",()=>{
        box.style.padding = "0px"
        if (box.contains(i)) {
            box.removeChild(i);
        }
        close.innerText = ""
    })
})