const currencyOne = document.getElementById('currency1');
const currencyTwo = document.getElementById('currency2');
const amountOne = document.getElementById('amount1');
const amountTwo = document.getElementById('amount2');
const swap = document.querySelector('.swap');

updateResult();

function updateResult() {
	fetch(
		`https://v6.exchangerate-api.com/v6/07496e172e0c4bc8ad2519bf/latest/${currency1.value}`,
	)
		.then((res) => res.json())
		.then((data) => updateMsg(data.conversion_rates[currencyTwo.value]));
}

function updateMsg(rate) {
	document.getElementById(
		'msg',
	).innerHTML = `1 ${currencyOne.value} = ${rate} ${currencyTwo.value} `;

	amountTwo.value = amountOne.value * rate.toFixed(2);
}

currencyOne.addEventListener('change', updateResult);
currencyTwo.addEventListener('change', updateResult);
amountOne.addEventListener('input', updateResult);
amountTwo.addEventListener('input', updateResult);
swap.addEventListener('click', (e) => {
	let temp = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = temp;

	updateResult();

	e.preventDefault();
});
