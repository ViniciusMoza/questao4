document.getElementById('calcButton').addEventListener('click', calcularPercentual);

function calcularPercentual() {
    
    const faturamentoEstados = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    };

    
    const faturamentoTotal = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);

    
    const percentuais = {};
    for (let estado in faturamentoEstados) {
        percentuais[estado] = ((faturamentoEstados[estado] / faturamentoTotal) * 100).toFixed(2);
    }

    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Faturamento Total: R$ ${faturamentoTotal.toFixed(2)}</p>
        <p>Percentual de SP: ${percentuais['SP']}%</p>
        <p>Percentual de RJ: ${percentuais['RJ']}%</p>
        <p>Percentual de MG: ${percentuais['MG']}%</p>
        <p>Percentual de ES: ${percentuais['ES']}%</p>
        <p>Percentual de Outros: ${percentuais['Outros']}%</p>
    `;
}
