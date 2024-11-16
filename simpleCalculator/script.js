// alert("Welcome");

/*
function add(){
    let num1=document.getElementById("box1").value;

    let num2=document.getElementById("box2").value;

    let result=Number(num1)+Number(num2) // or (+num1)+(+num2)

    document.getElementById("root").innerHTML=`The sum is ${result}`

    // console.log(res);

}



function subtract(){

    let num1=+document.getElementById("box1").value;
    
    let num2=+document.getElementById("box2").value;
    
    result = num1-num2
    document.getElementById("root").innerHTML=`The difference is ${result}`;
    // console.log(result);
    
}  */

function evaluateExp(event){
    
    // console.log(event.target.value);

    let operation = event.target.value;

    let num1=+box1.value;
    let num2=+box2.value;
    result=0

    if (operation == "+"){
        result=num1+num2
    }

    else if (operation == "-"){
        result = num1-num2
    }

    else if (operation == "*"){
        result=num1*num2;
          
    }
    else if(operation == "/"){
        result=num1/num2
        
    }
    
    document.getElementById("root").innerHTML=(`Result = ${result}`);

    
}


/*

function multiply(){
    let num1=+box1.value;
    let num2=+box2.value;
    result=num1*num2;
    document.getElementById("root").innerHTML=`The product is ${result}`;
}

function divide(){
    let num1=+box1.value;
    let num2=+box2.value;
    result=num1/num2;
    document.getElementById("root").innerHTML=`The quotient is ${result}`
}

*/
