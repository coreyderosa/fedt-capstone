document.getElementById('sum').innerHTML = '$0';
document.getElementById('zero').innerHTML = '$0';

function calcSum(){
    let env1 = document.getElementById('env1').value;
    let sum = Number(env1);
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

// TODO: dynamically add envelope with "Create Envelope" button click
function createEnvelope() {
    let newDiv = document.createElement("div");
}