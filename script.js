const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let prices = document.querySelectorAll(".price");
	let sum = 0;
	prices.forEach((price) => {
		sum += Number(price.textContent);
	});

	let tr = document.createElement("tr");
	let td = document.createElement("td");
	td.textContent = sum;

	tr.appendChild(td);
	document.getElementsByTagName("table")[0].appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

