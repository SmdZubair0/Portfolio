let arrow = document.querySelector(".arrow")
let res = document.querySelectorAll(".resume")

arrow.addEventListener('click', () => {
    res.forEach(r => {
        if (r.style.height == "0px" || r.style.height == "") {
            r.style.height = "60px"
            arrow.style.transform = `rotate(180deg)`
        }
        else {
            r.style.height = "0px"
            arrow.style.transform = `rotate(0deg)`
        }
    })
})