function displayNumber(event){
    var val = event.target.value;

    let operators =["+","-","*", "/", "."];

    let currentExpLastChar=result.value.slice(-1);

    if (operators.includes(currentExpLastChar) && operators.includes(val)){
        
        result.value=result.value.slice(0,-1)+val
    }
    else{
        
        result.value+=val;
    }



}

function clearBox(){

    result.value="";
}

function evalExpr(){

    let currentExpr=result.value;

    let output=eval(currentExpr);

    result.value=output;
}

function clearNum(){


    result.value=result.value.slice(0,-1);
    
    

}