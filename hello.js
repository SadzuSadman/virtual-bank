document.getElementById('login').addEventListener("click",function(){
    document.getElementById('login-area').style.display='none';
    document.getElementById('transaction-area').style.display='block';
    })

document.getElementById('deposit-btn').addEventListener("click",function(){
    var addmoney=takeinpute('deposit-amount');
    
    
    updateText('crntdeposit',addmoney);
    updateText("crntbalance",addmoney);
    
})    

function updateText(id,addmoney){
    const current=document.getElementById(id).innerText;
    const fullmoney=parseFloat(current);
    var wholemoney=addmoney+fullmoney;

    document.getElementById(id).innerText=wholemoney;
}

document.getElementById('withdraw-btn').addEventListener("click",function(){
   var deductmoney=takeinpute('withdraw-amount');
   updateText('crntwithdraw',deductmoney);
   updateText('crntbalance',-1*deductmoney);

    // const afterwithdraw=document.getElementById('crntbalance').innerText;
    // const totalmoney=parseFloat(afterwithdraw);
    // var deductedmoney=totalmoney-deductmoney;
    // document.getElementById('crntbalance').innerText=deductedmoney;
   

})
function takeinpute(id){
    var withdrawtk=document.getElementById(id).value;
    const addwithdraw=parseFloat(withdrawtk);
    return addwithdraw;
}
