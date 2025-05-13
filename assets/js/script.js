
const pass = document.getElementById("pass"),
icon = document.getElementById("iconI")

icon.addEventListener("click", e =>{
    if(pass.type === "password"){
        pass.type = "text";
        icon.classList.remove('ri-eye-off-line');
        icon.classList.add('ri-eye-line');
        }else{
            pass.type = "password"
            icon.classList.add('ri-eye-off-line');
            icon.classList.remove('ri-eye-line');
        }
    }

)