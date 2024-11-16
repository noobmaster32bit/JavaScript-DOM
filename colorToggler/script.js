function toggleColor(event){
    let color = event.target.value;
    console.log(color);
    

    let root=document.getElementById("root");

    // root.style.backgroundColor=color;

    root.removeAttribute("class");

    if (color=="red"){
        root.classList.add("rounded-circle", "bg-danger", "mx-5");
    }
    else if(color=="green"){
        root.classList.add("rounded-circle", "bg-success", "mx-5");
    }
    else if(color="blue"){
        root.classList.add("rounded-circle", "bg-primary", "mx-5");
    }

    
}