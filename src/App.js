import { useState } from "react";


function App() {

	const [calculation, setCalculation] = useState("");
	const [result, setResult] = useState("");

	const operations = ['/', '*', '+', '-', '.'];

	const updateCalculation = value => {
		if (
			operations.includes(value) && calculation === '' || 
			operations.includes(value) && operations.includes(calculation.slice(-1))
			) {
			return;
		}

		setCalculation(calculation + value)

		if (!operations.includes(value)) {
			setResult(eval(calculation + value).toString())
		}
	}

	const createDigits = () => {

		const digits = []

		for (let i = 1; i < 10; i++) {
			
			digits.push(
				<button key={i} onClick={() => {updateCalculation(i.toString())}}>{i}</button>
			)
			
		}
		return digits;
	}

	const calculate = () => {
		setCalculation(eval(calculation).toString())
	}

	const deleteLast = ()=>{
		if (calculation === '') {
			return;
		}

		const value = calculation.slice(0,-1);
		setCalculation(value)
	} 

	return (
		<div className="App">
			<div className="calculator">
				
				<div className="display">
					{result ? <span>({result})</span> : ""} &nbsp; {calculation || "0"}
				</div>

				<div className="operators">
					<button onClick={() => {updateCalculation("/")}}>/</button>
					<button onClick={() => {updateCalculation("*")}}>*</button>
					<button onClick={() => {updateCalculation("+")}}>+</button>
					<button onClick={() => {updateCalculation("-")}}>-</button>
					<button onClick={deleteLast}>DEL</button>

				</div>

				<div className="digits">

					{ createDigits() }
					<button onClick={() => {updateCalculation("0")}}>0</button>
					<button onClick={() => {updateCalculation(".")}}>.</button>
					<button onClick={calculate}>=</button>
				</div>

			</div>
		</div>
	);
}

export default App;
