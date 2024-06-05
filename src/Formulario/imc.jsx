import React, { useState } from "react";

const Imc = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(1);
      setImc(imcCalculado);
      classificarIMC(imcCalculado);
    } else {
      alert("Digite valores válidos para altura e peso");
    }
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      setClassificacao("Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
      setClassificacao("Peso normal");
    } else if (imc >= 25 && imc <= 29.9) {
      setClassificacao("Sobrepeso");
    } else if (imc >= 30 && imc <= 34.9) {
      setClassificacao("Obesidade grau 1");
    } else if (imc >= 35 && imc <= 39.9) {
      setClassificacao("Obesidade grau 2");
    } else {
      setClassificacao("Obesidade grau 3");
    }
  };

  const classificacaoClasses = {
    "Abaixo do peso": "abaixodopesoClass",
    "Peso normal": "pesoidealClass",
    "Sobrepeso": "sobrepesoClass",
    "Obesidade grau 1": "obesidade1Class",
    "Obesidade grau 2": "obesidade2Class",
    "Obesidade grau 3": "obesidade3Class",
  };

  const className = classificacaoClasses[classificacao] || "";

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">Calculadora de IMC</h1>
        <form onSubmit={calcularIMC}>
          <label>
            Altura (cm):
            <input
              min="0"
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </label>
          <label>
            Peso (kg):
            <input
              min="0"
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </label>
          <button type="submit">Calcular IMC</button>
        </form>
        {imc && (
          <div className="result">
            <h2>Seu IMC: {imc}</h2>
            <h3 className={className}>{classificacao}</h3>
          </div>
        )}
      </div>
      <div className="table-container">
        <div className="imc-table">
          <h2 className="title">Tabela de Classificação IMC</h2>
          <table>
            <thead>
              <tr>
                <th>Classificação</th>
                <th>IMC</th>
              </tr>
            </thead>
            <tbody>
              <tr className={classificacao === "Abaixo do peso" ? "abaixodopeso" : ""}>
                <td>Abaixo do peso</td>
                <td>&lt; 18.5</td>
              </tr>
              <tr className={classificacao === "Peso normal" ? "pesoideal" : ""}>
                <td>Peso normal</td>
                <td>18.5 - 24.9</td>
              </tr>
              <tr className={classificacao === "Sobrepeso" ? "sobrepeso" : ""}>
                <td>Sobrepeso</td>
                <td>25.0 - 29.9</td>
              </tr>
              <tr className={classificacao === "Obesidade grau 1" ? "obesidade1" : ""}>
                <td>Obesidade grau 1</td>
                <td>30.0 - 34.9</td>
              </tr>
              <tr className={classificacao === "Obesidade grau 2" ? "obesidade2" : ""}>
                <td>Obesidade grau 2</td>
                <td>35.0 - 39.9</td>
              </tr>
              <tr className={classificacao === "Obesidade grau 3" ? "obesidade3" : ""}>
                <td>Obesidade grau 3</td>
                <td>&gt; 40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Imc;
