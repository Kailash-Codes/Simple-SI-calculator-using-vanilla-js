let submit = document.getElementById('sub-btn');
let p = document.getElementById('principal-box');
let t = document.getElementById('time-box');
let r = document.getElementById('rate-box');
let out = document.getElementById('result');

submit.addEventListener('click',(e)=>{
    
    if(p.value.length==0 || t.value.length==0 || r.value.length==0){
        out.innerHTML = "Enter all inputs";
    }
    else{

        output = (p.value*t.value*r.value)/100;
        out.innerHTML = output;
    }

e.preventDefault();
});
