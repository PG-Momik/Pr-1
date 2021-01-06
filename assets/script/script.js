    var left = document.getElementById("left");
    var right = document.getElementById("right")
    left.addEventListener("click",()=>{
        document.getElementById("left-list").classList.toggle("hidden");
    })
    right.addEventListener("click",()=>{
        document.getElementById("right-list").classList.toggle("hidden");
    })
    var image = document.getElementById("image");
    var bio = document.getElementById("bio-text");
    var image_container =document.getElementById("image-container");
    var works = document.getElementById("works")
    image.addEventListener("mouseenter", ()=>{
        bio.classList.toggle("hidden");
        image_container.setAttribute("style", "width:50%")
        image.setAttribute("style", "clip-path:circle()")
    })
    image.addEventListener("mouseleave", ()=>{
        bio.classList.toggle("hidden");
        image_container.setAttribute("style", "width:50%, text-align:center");
        image.removeAttribute("style", "clip-path:circle()")
    })

    works.addEventListener("click",()=>{
        var list = document.getElementsByClassName("buttons");
        var i = 0;
        for(i=0; i<list.length; i++){
            list[i].classList.toggle("hidden");
        }
    })
