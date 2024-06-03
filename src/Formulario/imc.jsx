// src/IMCForm.js
import React, { useState } from "react";

const Imc = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);
    classificarIMC(imcCalculado);
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

    return pesoBaixo;
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
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
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
      <div className="imc-table">
        <h2>Tabela de Classificação do IMC</h2>
        <table>
          <thead>
            <tr>
              <th>Classificação</th>
              <th>IMC</th>
            </tr>
          </thead>
          <tbody>
            <tr className="abaixodopeso">
              <td>Abaixo do peso</td>
              <td>&lt; 18.5</td>
            </tr>
            <tr>
              <td>Peso normal</td>
              <td>18.5 - 24.9</td>
            </tr>
            <tr>
              <td>Sobrepeso</td>
              <td>25 - 29.9</td>
            </tr>
            <tr>
              <td>Obesidade grau 1</td>
              <td>30 - 34.9</td>
            </tr>
            <tr>
              <td>Obesidade grau 2</td>
              <td>35 - 39.9</td>
            </tr>
            <tr>
              <td>Obesidade grau 3</td>
              <td>&gt; 40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Imc;
