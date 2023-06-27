const nop=document.getElementById("nop");
const bill=document.getElementById("bill");
const custom=document.getElementById("custom");
const warnings=document.getElementById("warnings");
const tipamount=document.getElementById("tipamt");
const totalamount=document.getElementById("totalamt");
var billval=0,nopval=0,percent=0;
function selecttip(n,e){
    unselectAll();
    n.style.backgroundColor="hsl(172, 67%, 45%)";
    n.style.color="hsl(183, 100%, 15%)";
    percent=e;
    change();
};
custom.addEventListener("input",()=>{
    unselectAll();
    percent=custom.value/100;
    change();
});
nop.addEventListener("input",()=>{
    nopval=nop.value;
    change();
})
bill.addEventListener("input",()=>{
    billval=bill.value;
    change();
});
function change(){
    if(nopval<=0 || nopval==""){
        warnings.innerText="can't be zero";
        return;
    }else{
        warnings.innerText="";
    }
    var tipamt=(billval*percent);
    tipamount.innerText=(tipamt/nopval).toFixed(2);
    totalamount.innerText=(( +billval+ +tipamt)/nopval).toFixed(2);
    console.log(nopval,billval,percent,tipamt);
};
function unselectAll(){
    const allButtons =document.getElementsByClassName("percentage");
    for(let i of allButtons){
        i.style="";
    }
};
