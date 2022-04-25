import React from "react";
import Boton from "./boton.jsx";
import Pantalla from "./pantalla.jsx";
import BotonClear from "./botonClear.jsx";
import { useState } from "react";
import { evaluate } from "mathjs"; //esta libreria sirve para operacion matematica para resultado

//include images into your bundle
import rigoImage from "../../img/4geeks.png";

//create your first component
function Home() {
	const [input, setInput] = useState("");
	const agregarInput = (valor) => {
		setInput(input + valor);
	};
	const calcularResultado = () => {
		if (input) {
			setInput(evaluate(input));
		} else {
			alert("Por favor ingrese valores para realizar los cálculos.");
		}
	};
	return (
		<div className="App">
			<div className="caculadora">
				<Pantalla input={input} />
				<div className="fila">
					<Boton manejarClic={agregarInput}>1</Boton>
					<Boton manejarClic={agregarInput}>2</Boton>
					<Boton manejarClic={agregarInput}>3</Boton>
					<Boton manejarClic={agregarInput}> +</Boton>
				</div>
				<div className="fila">
					<Boton manejarClic={agregarInput}>4</Boton>
					<Boton manejarClic={agregarInput}>5</Boton>
					<Boton manejarClic={agregarInput}>6</Boton>
					<Boton manejarClic={agregarInput}>-</Boton>
				</div>
				<div className="fila">
					<Boton manejarClic={agregarInput}>7</Boton>
					<Boton manejarClic={agregarInput}>8</Boton>
					<Boton manejarClic={agregarInput}>9</Boton>
					<Boton manejarClic={agregarInput}>*</Boton>
				</div>
				<div className="fila">
					<Boton manejarClic={calcularResultado}>=</Boton>
					<Boton manejarClic={agregarInput}>0</Boton>
					<Boton manejarClic={agregarInput}>.</Boton>
					<Boton manejarClic={agregarInput}>/</Boton>
				</div>
				<div className="fila">
					<BotonClear manejarClear={() => setInput("")}>
						Clear
					</BotonClear>
				</div>
			</div>
		</div>
	);
}
export default Home;
