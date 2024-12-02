

var lottery = new Promise((res,rej)=>{
    let ticketNumber=5;

    let priceNumber=Math.floor(Math.random()*10);

    if (ticketNumber==priceNumber){

        res("won!!")
    }
})

lottery.then(res=>console.log("buy a car"))