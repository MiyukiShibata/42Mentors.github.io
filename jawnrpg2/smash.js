var ranked = 0;
var smashStats = {
	sGp: "0",
	sWin: "0",
	sLose: "0",
	sLevel: "1",
	scExp: "0",
	smExp: "15",
	sPercent: "0",
	sElo: "1200",
	sWinStreak: "0",
	sLoseStreak: "0",
}

localStorage.setItem('smashStats', JSON.stringify(smashStats));

function updateStats() {
	var httpRequest = new XMLHttpRequest();
	var data = new FormData();
	httpRequest.open("POST", "update_stats.php", true);
	data.append("armXPG", armXPG);
	data.append("armXPG", armXPG);
	data.append("armXPG", armXPG);
	data.append("armXPG", armXPG);
	data.append("armXPG", armXPG);
	httpRequest.onload = function () {
		if (httpRequest.responseText == "succes")
			
	}
	httpRequest.send(data);
}

var infoDiv = document.getElementById('info-div');
var src = infoDiv.getAttribute('src');
array = parse_src(src);
var armXP = array["armXP"];


function innerSmash() {
	document.getElementById("sGp").innerHTML = localStorage.sGp;
	document.getElementById("sWin").innerHTML = localStorage.sWin;
	document.getElementById("sLose").innerHTML = localStorage.sLose;
	document.getElementById("sLevel").innerHTML = localStorage.sLevel;
	document.getElementById("scExp").innerHTML = localStorage.scExp;
	document.getElementById("smExp").innerHTML = localStorage.smExp;
	document.getElementById("sPercent").innerHTML = localStorage.sPercent;
	document.getElementById("sElo").innerHTML = localStorage.sElo;
}

function initSmash() {
	localStorage.sGp = 1;
	localStorage.sLevel = 1;
	localStorage.smExp = 22;
	localStorage.sElo = 1200;
	localStorage.sPercent = +Math.floor(((Number(localStorage.scExp) / Number(localStorage.smExp)) * 100) * 100) / 100 + '%';
}

function sLevelUp() {
	if (Number(localStorage.scExp) >= Number(localStorage.smExp)) {
		localStorage.scExp = Number(localStorage.scExp) - Number(localStorage.smExp);
		localStorage.smExp = Math.floor(Number(localStorage.smExp) * 1.3);
		localStorage.sLevel = Number(localStorage.sLevel) + 1;
		localStorage.sPercent = +Math.floor(((Number(localStorage.scExp) / Number(localStorage.smExp)) * 100) * 100) / 100 + '%';
		innerSmash();
	}
}

function togRank(number) {
	if (ranked == 1) {
		var unranked = "Unranked";
		document.getElementById("ranked").innerHTML = unranked;
		document.getElementById("ranked").style.backgroundColor = "#f44336";
		ranked = 0;
	}
	else if (ranked == 0) {
		var stat = "Ranked";
		document.getElementById("ranked").innerHTML = stat;
		document.getElementById("ranked").style.backgroundColor = "#4CAF50";
		ranked = 1;
	}
}

function winOne() {
	localStorage.sLoseStreak = 0;
	var scExpTemp = localStorage.scExp;
	if (localStorage.sGp && localStorage.sWin && localStorage.sWinStreak) {
		if (localStorage.scExp && localStorage.sPercent && localStorage.sLevel) {
			localStorage.scExp = Number(localStorage.scExp) + (Number(localStorage.sLevel) + (Number(localStorage.sWinStreak) + 15));
			localStorage.sPercent = +Math.floor(((Number(localStorage.scExp) / Number(localStorage.smExp)) * 100) * 100) / 100 + '%';
		}
		localStorage.sGp = Number(localStorage.sGp) + 1;
		localStorage.sWin = Number(localStorage.sWin) + 1;
		localStorage.sWinStreak = Number(localStorage.sWinStreak) + 1;
		scExpTemp = localStorage.scExp - scExpTemp;
		console.log("Exp Gain: " + scExpTemp);
	}
	else {
		localStorage.sWin = 1;
		localStorage.sWinStreak = 1;
		localStorage.sLose = 0;
		localStorage.scExp = 16;
		initSmash();
	}
	if (ranked == 1) {
		var eloTemp = localStorage.sElo;
		localStorage.sElo = Math.floor(Number(localStorage.sElo) + ((30 * .50) + Number(localStorage.sWinStreak)));
		document.getElementById("sElo").innerHTML = localStorage.sElo;
		eloTemp = localStorage.sElo - eloTemp;
		console.log("Elo: " + localStorage.sElo + " " + "+" + eloTemp);
	}
	innerSmash();
	sLevelUp();
	eloCheck();
}

function winTwo() {
	localStorage.sLoseStreak = 0;
	var scExpTemp = localStorage.scExp;
	if (localStorage.sGp && localStorage.sWin && localStorage.sWinStreak) {
		if (localStorage.scExp && localStorage.sPercent && localStorage.sLevel) {
			localStorage.scExp = Number(localStorage.scExp) + (Number(localStorage.sLevel) + (Number(localStorage.sWinStreak) + 20));
			localStorage.sPercent = +Math.floor(((Number(localStorage.scExp) / Number(localStorage.smExp)) * 100) * 100) / 100 + '%';
		}
		localStorage.sGp = Number(localStorage.sGp) + 1;
		localStorage.sWin = Number(localStorage.sWin) + 1;
		localStorage.sWinStreak = Number(localStorage.sWinStreak) + 1;
		scExpTemp = localStorage.scExp - scExpTemp;
		console.log("Exp Gain: " + scExpTemp);
	}
	else {
		localStorage.sWin = 1;
		localStorage.sWinStreak = 1;
		localStorage.sLose = 0;
		localStorage.scExp = 21;
		initSmash();
	}
	if (ranked == 1) {
		var eloTemp = localStorage.sElo;
		localStorage.sElo = Math.floor(Number(localStorage.sElo) - ((30 * .65) + Number(localStorage.sWinStreak)));
		document.getElementById("sElo").innerHTML = localStorage.sElo;
		eloTemp = localStorage.sElo - eloTemp;
		console.log("Elo: " + localStorage.sElo + " " + "+" + eloTemp);
	}
	innerSmash();
	sLevelUp();
	eloCheck();
}

function loseOne() {
		localStorage.sWinStreak = 0;
		var scExpTemp = localStorage.scExp;
		if (localStorage.sGp && localStorage.sLose && localStorage.sLoseStreak) {
			if (localStorage.scExp && localStorage.sPercent && localStorage.sLevel) {
				localStorage.scExp = Number(localStorage.scExp) + (Number(localStorage.sLevel) + 10);
				localStorage.sPercent = +Math.floor(((Number(localStorage.scExp) / Number(localStorage.smExp)) * 100) * 100) / 100 + '%';
			}
			localStorage.sGp = Number(localStorage.sGp) + 1;
			localStorage.sLose = Number(localStorage.sLose) + 1;
			localStorage.sLoseStreak = Number(localStorage.sLoseStreak) + 1;
			scExpTemp = localStorage.scExp - scExpTemp;
			console.log("Exp Gain: " + scExpTemp);
		}
		else {
			localStorage.sLose = 1;
			localStorage.sLoseStreak = 1;
			localStorage.scExp = 10;
			initSmash();
		}
		if (ranked == 1) {
				var eloTemp = localStorage.sElo;
				localStorage.sElo = Math.floor(Number(localStorage.sElo) - ((30 * .55) + Number(localStorage.sLoseStreak)));
				document.getElementById("sElo").innerHTML = localStorage.sElo;
				eloTemp = localStorage.sElo - eloTemp;
				console.log("Elo: " + localStorage.sElo + " " + eloTemp);
		}
		innerSmash();
		sLevelUp();
		eloCheck();
}

function loseTwo() {
		localStorage.sWinStreak = 0;
		var scExpTemp = localStorage.scExp;
		if (localStorage.sGp && localStorage.sLose && localStorage.sLoseStreak) {
			if (localStorage.scExp && localStorage.sPercent && localStorage.sLevel) {
				localStorage.scExp = Number(localStorage.scExp) + (Number(localStorage.sLevel) + 10);
				localStorage.sPercent = +Math.floor(((Number(localStorage.scExp) / Number(localStorage.smExp)) * 100) * 100) / 100 + '%';
			}
			localStorage.sGp = Number(localStorage.sGp) + 1;
			localStorage.sLose = Number(localStorage.sLose) + 1;
			localStorage.sLoseStreak = Number(localStorage.sLoseStreak) + 1;
			scExpTemp = localStorage.scExp - scExpTemp;
			console.log("Exp Gain: " + scExpTemp);
		}
		else {
			localStorage.sLose = 1;
			localStorage.sLoseStreak = 1;
			localStorage.scExp = 10;
			initSmash();
		}
		if (ranked == 1) {
			var eloTemp = localStorage.sElo;
			localStorage.sElo = Math.floor(Number(localStorage.sElo) + ((30 * .65) + Number(localStorage.sLoseStreak)));
			document.getElementById("sElo").innerHTML = localStorage.sElo;
			eloTemp = localStorage.sElo - eloTemp;
			console.log("Elo: " + localStorage.sElo + " " + eloTemp);
		}
		innerSmash();
		sLevelUp();
		eloCheck();
}

function eloCheck() {
	if (localStorage.sElo < 1200)
		document.getElementById("ranking").src = "bronze.png";
	else if (localStorage.sElo < 1500 && localStorage.sEelo >= 1200)
		document.getElementById("ranking").src = "silver.png";
	else if (localStorage.sElo < 1800 && localStorage.sElo >= 1500)
		document.getElementById("ranking").src = "gold.png";
	else if (localStorage.sElo < 2100 && localStorage.sElo >= 1800)
		document.getElementById("ranking").src = "plat.png";
	else if (localStorage.sElo < 2400 && localStorage.sElo >= 2100)
		document.getElementById("ranking").src = "diamond.png";
	else if (localStorage.sElo < 2700 && localStorage.sElo >= 2400)
		document.getElementById("ranking").src = "master.png";
	else if (localStorage.sElo >= 3500)
		document.getElementById("ranking").src = "grand.png";
}

function getSmashData() {
	smashStats = localStorage.getItem('smashStats');
	smashStats = JSON.parse(smashStats);
	innerSmash();
}

window.onLoad = getSmashData();