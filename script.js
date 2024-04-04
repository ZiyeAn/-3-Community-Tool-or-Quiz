document.addEventListener("DOMContentLoaded",function(){
    let checkboxQ1 = document.querySelectorAll('.checkboxQ1'); 
    for (var i = checkboxQ1.length - 1; i >= 0; i--) {
        checkboxQ1[i].addEventListener('change',function(){
            localStorage.setItem("veggies", this.value)
        })
    }

    let checkboxQ2 = document.querySelectorAll('.checkboxQ2'); 
    for (var i = checkboxQ2.length - 1; i >= 0; i--) {
        checkboxQ2[i].addEventListener('change',function(){
            localStorage.setItem("proteins", this.value)
        })
    }  

    let checkboxQ3 = document.querySelectorAll('.checkboxQ3'); 
    for (var i = checkboxQ3.length - 1; i >= 0; i--) {
        checkboxQ3[i].addEventListener('change',function(){
            localStorage.setItem("grains", this.value)
        })
    }  

    let checkboxQ4 = document.querySelectorAll('.checkboxQ4'); 
    for (var i = checkboxQ4.length - 1; i >= 0; i--) {
        checkboxQ4[i].addEventListener('change',function(){
            localStorage.setItem("smoothie", this.value)
        })
    }  

    let checkboxQ5 = document.querySelectorAll('.checkboxQ5'); 
    for (var i = checkboxQ5.length - 1; i >= 0; i--) {
        checkboxQ5[i].addEventListener('change',function(){
            localStorage.setItem("plate", this.value)
        })
    }  

    let checkboxQ6 = document.querySelectorAll('.checkboxQ6'); 
   
    for (var i = checkboxQ6.length - 1; i >= 0; i--) {
        checkboxQ6[i].addEventListener('change',function(){
            localStorage.setItem("snack", this.value)
        })
    }   
    console.log(this.value);

    let checkboxQ7 = document.querySelectorAll('.checkboxQ7'); 
    for (var i = checkboxQ7.length - 1; i >= 0; i--) {
        checkboxQ7[i].addEventListener('change',function(){
            localStorage.setItem("type", this.value)
        })
    }  
})
