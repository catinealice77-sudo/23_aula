function calcularSoma(){
     
    // Recupera o valor do input
    const campoA = document.getElementById("valorA").value;
    const campoB = document.getElementById("valorB").value;

    // Converte o valor para numerico 
    const numA = parseFloat(campoA);
    const numB= parseFloat(campoB);

    // Calcula o total 
    const total = numA + numB;

    document.getElementById("resultado").innerText = `total: ${total}`;
    console.log(`Calculo efetuado: ${numA} + ${numB} = ${total}`); 
    
}