var pushupStats = {
	pTotal:"20",
	pLevel:"1",
	cpExp:"0",
	mpExp:"15",
	pPercent:"0"
}

localStorage.setItem('pushupStats', JSON.stringify(pushupStats));

function define() {
	document.getElementById("cPush").innerHTML = localStorage.pTotal;
	document.getElementById("cpExp").innerHTML = localStorage.cpExp;
	document.getElementById("mpExp").innerHTML = localStorage.mpExp;
	document.getElementById("pLevel").innerHTML = localStorage.pLevel;
	document.getElementById("pPercent").innerHTML = localStorage.pPercent;
}

function levelUp() {
	if (Number(localStorage.cpExp) >= Number(localStorage.mpExp)) {
		localStorage.cpExp = Number(localStorage.cpExp) - Number(localStorage.mpExp);
		localStorage.mpExp = Math.floor(Number(localStorage.mpExp) * 1.3);
		localStorage.pLevel = Number(localStorage.pLevel) + 1;
		localStorage.pPercent = +Math.floor(((Number(localStorage.cpExp) / Number(localStorage.mpExp)) * 100) * 100) / 100 + '%';
		define();
	}
}

function plusOne() {
	if (localStorage.pTotal && localStorage.cpExp && localStorage.pPercent) {
		localStorage.pTotal = Number(localStorage.pTotal) + 1;
		localStorage.cpExp = Number(localStorage.cpExp) + 1;
		localStorage.pPercent = +Math.floor(((Number(localStorage.cpExp) / Number(localStorage.mpExp)) * 100) * 100) / 100 + '%';
	}
	else {
		localStorage.pTotal = 1;
		localStorage.cpExp = 1;
		localStorage.pLevel = 1;
		localStorage.mpExp = 15;
		localStorage.pPercent = 0 + '%';
		define();
	}
	document.getElementById("cPush").innerHTML = localStorage.pTotal;
	document.getElementById("cpExp").innerHTML = localStorage.cpExp;
	document.getElementById("pPercent").innerHTML = localStorage.pPercent;
	levelUp();
}

function text() {
	var amount = document.getElementById('bar').value;
	if (localStorage.pTotal && localStorage.cpExp && localStorage.pPercent) {
		localStorage.pTotal = +Number(localStorage.pTotal) + +amount;
		localStorage.cpExp = +Number(localStorage.cpExp) + +amount;
		localStorage.pPercent = +Math.floor(((Number(localStorage.cpExp) / Number(localStorage.mpExp)) * 100) * 100) / 100 + '%';
	}
	else {
		localStorage.pTotal = 1;
		localStorage.cpExp = 1;
		localStorage.pLevel = 1;
		localStorage.mpExp = 15;
		localStorage.pPercent = 0 + '%';
		define();
	}
	document.getElementById("cPush").innerHTML = localStorage.pTotal;
	document.getElementById("cpExp").innerHTML = localStorage.cpExp;
	document.getElementById("pPercent").innerHTML = localStorage.pPercent;
	levelUp();
}

function minusOne() {
	if (localStorage.pTotal) {
		localStorage.pTotal = Number(localStorage.pTotal) - 1;
		localStorage.cpExp = Number(localStorage.cpExp) - 1;
		localStorage.pPercent = +Math.floor(((Number(localStorage.cpExp) / Number(localStorage.mpExp)) * 100) * 100) / 100 + '%';
	}
	else
		localStorage.pTotal = 1;
	document.getElementById("cPush").innerHTML = localStorage.pTotal;
	document.getElementById("cpExp").innerHTML = localStorage.cpExp;
	document.getElementById("pPercent").innerHTML = localStorage.pPercent;
}

function getData() {
		pushupStats = localStorage.getItem('pushupStats');
		pushupStats = JSON.parse(pushupStats);
		document.getElementById("cPush").innerHTML = localStorage.pTotal;
		document.getElementById("cpExp").innerHTML = localStorage.cpExp;
		document.getElementById("mpExp").innerHTML = localStorage.mpExp;
		document.getElementById("pLevel").innerHTML = localStorage.pLevel;
}

window.onLoad = getData();