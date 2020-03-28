var buttons=document.getElementsByClassName('button');
var display=document.getElementById('display');
var operand1=0;
var operand2=null;
var operator=null;
var press=false;
function check(){
    var value=this.getAttribute('data-value');
    if(value=='+'){
        operator='+';
        operand1=parseFloat(display.textContent);
        display.innerText="";
    }
    else if(value=='-'){
        operator='-';
        operand1=parseFloat(display.textContent);
        display.innerText="";
    }
    else if(value=='*'){
        operator='*';
        operand1=parseFloat(display.textContent);
        display.innerText="";
    }
    else if(value=='/'){
        operator='/';
        operand1=parseFloat(display.textContent);
        display.innerText="";
    }
    else if(value=='%'){
        operator='%';
        operand1=parseFloat(display.textContent);
        display.innerText="";
    }
    else if(value=='+/-'){
        if(!press){
        display.innerText='+'+'';
        press=true;
        }
        else {
            display.innerText='-'+'';
            press=false;
        }
    }
    else if(value=="AC"){
        display.innerText='';
        operator=undefined;
        operand1=undefined;
        operand2=undefined;
    }
    else if(value== "="){
        operand2=parseFloat(display.textContent);
        var result=eval(operand1+" "+operator+" "+operand2);
        display.innerText=result;
    }
    else{
        display.innerText+=value;
    }
}

for (var i=0 ;i<buttons.length;i++){
    buttons[i].addEventListener('click',check);
};

