
let imc;
let tabela = document.querySelector("#tabela");
function calculo(){
    let nome = document.querySelector("#nome").value;
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let imc = peso /(altura*altura);
    tabela.innerHTML += `
                            <tr class = "limpar">
                            <th>${nome}</th>
                            <th>${peso}</th>
                            <th>${altura}</th>
                            <th>${imc}</th>
                            </tr>
                            ` 
    document.querySelector("#nome").value = null
    document.querySelector("#peso").value = null
    document.querySelector("#altura").value = null
    return false; 
}
document.getElementById("limpar").onclick = function(){
    location.reload();  
}
