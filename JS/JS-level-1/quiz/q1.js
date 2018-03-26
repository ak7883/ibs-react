

function getFood(){
    return "No Food";
}
// let getFood=new Function('....');

function getFood(pay){
    if(arguments.length===0)return "No Food";
    return "Biryani";
}
// getFood=new Function('....');

console.log(getFood());