import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';

function App() {
	const [linea1, setLinea1] = useState('');
	const [linea2, setLinea2] = useState('');
	const [selectImg, setSelectImg] = useState('');

	const onChangeLinea1 = (e) => {
		setLinea1(e.target.value);
	};

	const onChangeLinea2 = (e) => {
		setLinea2(e.target.value);
	};

	const onChangeSelect = (e) => {
		setSelectImg(e.target.value);
	};

	const onClickExportar = (e) => {
		html2canvas(document.querySelector('#meme')).then((canvas) => {
			let img = canvas.toDataURL('image/png');
			let link = document.createElement('a');
			link.download = 'meme.png';
			link.href = img;
			link.click();
		});
	};

	return (
		<div className='App'>
			<select onChange={onChangeSelect}>
				<option disabled selected>
					Selecciona tu meme
				</option>
				<option value='fire'>Casa en llamas</option>
				<option value='futurama'>Futurama</option>
				<option value='history'>History Channel</option>
				<option value='matrix'>Matrix</option>
				<option value='philosoraptor'>Philosoraptor</option>
				<option value='smart'>Smart Guy</option>
			</select>
			<br />
			<input
				maxlength='40'
				onChange={onChangeLinea1}
				type='text'
				placeholder='Primera linea'
			/>
			<br />
			<input
				maxlength='40'
				onChange={onChangeLinea2}
				type='text'
				placeholder='Segunda linea'
			/>
			<br />
			<button onClick={onClickExportar}>Exportar</button>

			<div id='meme' className='memeContainer'>
				<span className='memeText'>{linea1}</span>
				<br />
				<span className='memeText'>{linea2}</span>
				{selectImg && (
					<img
						className='memeImg'
						src={`../assets/img/${selectImg}.jpg`}
						alt={selectImg}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
