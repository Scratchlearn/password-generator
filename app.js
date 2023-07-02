let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");
var meter = document.getElementById("password-strength-meter");
var boxes = meter.getElementsByClassName("criteria-box");

// Showing input slider value 
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    
    passBox.value = generatePassword();
    
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*/"; 

// Function to generate Password
function generatePassword(){
    let genPassword = "";
    let allChars = "";
    
  


    allChars  += lowercase.checked ? lowerChars : "";
   
    allChars  += uppercase.checked ? upperChars : "";
   
    allChars  += numbers.checked ? allNumbers : "";
   
    allChars  += symbols.checked ? allSymbols : "";
   
    
    if(uppercase.checked){
        meter.getElementsByClassName("upper")[0].classList.add("filled");

    }else{
        boxes[0].classList.remove("filled")
    }


    if(lowercase.checked){
        meter.getElementsByClassName("lower")[0].classList.add("filled");

    }else{
        boxes[1].classList.remove("filled")
    }


    if(numbers.checked){
        meter.getElementsByClassName("num")[0].classList.add("filled");

    }else{
        boxes[2].classList.remove("filled")
    }
    if(symbols.checked){
        meter.getElementsByClassName("spe")[0].classList.add("filled");

    }else{
        boxes[3].classList.remove("filled")
    }


    if(allChars == "" || allChars.length == 0){
       
        return genPassword;
    }
    

    let i = 1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}

copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});
