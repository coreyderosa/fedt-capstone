function calcSum(){
    let env1 = document.getElementById('env1').value;
    let env2 = document.getElementById('env2').value;
    let env3 = document.getElementById('env3').value;
    let env4 = document.getElementById('env4').value;
    let sum = Number(env1) + Number(env2) + Number(env3) + Number(env4);
    document.getElementById('sum').innerHTML = "$" + sum;
    return sum;
}

function calcZero() {
    let budget = document.getElementById('budget').value;
    let expenses = calcSum();
    console.log(expenses);
    let sum = Number(budget) - Number(expenses);
    document.getElementById('zero').innerHTML = "$" + sum;
}