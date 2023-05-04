const convertBtnEl = document.getElementById('convert');
const length = document.getElementById('meter-feet');
const volume = document.getElementById('liters-gallons');
const mass = document.getElementById('kg-pounds');

let inputValue = 0;

const lengthHandler = () => {
	const feet = Number((inputValue * 3.2808).toFixed(3));
	const meter = Number((inputValue / 3.2808).toFixed(3));
	length.textContent = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meter} meters`;
};

const volumeHandler = () => {
	const liters = Number((inputValue / 0.2641).toFixed(3));
	const gallons = Number((inputValue * 0.2641).toFixed(3));
	volume.textContent = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`;
};

const massHandler = () => {
	const kilos = Number((inputValue * 2.2046).toFixed(3));
	const pounds = Number((inputValue / 2.2046).toFixed(3));
	mass.textContent = `${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos`;
};

convertBtnEl.addEventListener(
	'click',
	(convertValues = () => {
		inputValue = document.getElementById('input-value').value;
		if (inputValue === '') {
			inputValue = 0;
		}

		lengthHandler(inputValue);
		volumeHandler(inputValue);
		massHandler(inputValue);
	})
);
