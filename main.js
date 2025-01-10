const abacusLine = [// rusian abacus
					['|-0000000000|<br>', 
					'|0-000000000|<br>', 
			  		'|00-00000000|<br>',
			 		'|000-0000000|<br>', 
			 		'|0000-000000|<br>',
			 		'|00000-00000|<br>', 
			 		'|000000-0000|<br>',
			 		'|0000000-000|<br>',
			 		'|00000000-00|<br>',
			 		'|000000000-0|<br>',],
				   	// chinese abacus
					["|00000-|-00|<br>",
					"|0000-0|-00|<br>",
					"|000-00|-00|<br>",
					"|00-000|-00|<br>",
					"|0-0000|-00|<br>",
					"|00000-|0-0|<br>",
					"|0000-0|0-0|<br>",
					"|000-00|0-0|<br>",
					"|00-000|0-0|<br>",
					"|0-0000|0-0|<br>",],
					// japanese abacus
					["|0000-|-0|<br>",
					"|000-0|-0|<br>",
					"|00-00|-0|<br>",
					"|0-000|-0|<br>",
					"|-0000|-0|<br>",
					"|000-0|0-|<br>",
					"|00-00|0-|<br>",
					"|0-000|0-|<br>",
					"|-0000|0-|<br>",
					"|0000-|0-|<br>",],
					// my own 'compact' abacus
					['|0-|00-|-0|<br>',
					 '|-0|00-|-0|<br>',
					 '|0-|0-0|-0|<br>',
					 '|-0|0-0|-0|<br>',
					 '|0-|-00|-0|<br>',
					 '|0-|00-|0-|<br>',
					 '|-0|00-|0-|<br>',
					 '|0-|0-0|0-|<br>',
					 '|-0|0-0|0-|<br>',
					 '|0-|-00|0-|<br>']
				   ]; // 10
let abacus = '';
let type = 0;
let borders = ['|-----------|', '|------|---|', '|-----|--|'];
let points = 0;
let pointArray = [0];
let begone = false;
let upgrades = 0;
let cost = 10;
let dubs = 0;
let dubCost = 500;

document.getElementById("upButt").style.display = 'none'; 
document.getElementById('dubButt').style.display = 'none'; 
//starting abacus (just zeros)
for (let i = 0; i < pointArray.length; i++) {
	let n = pointArray[i];
	abacus += abacusLine[type][n];
};
document.getElementById('abacus').innerHTML = abacus;

//game loop
window.setInterval(function(){
	if(begone && dubs < 1){
		incrementor(upgrades + 1);
	} else if (begone && dubs >= 1) {
		incrementor((upgrades + 1)*((dubs+1)*2));
	};
	if(points >= 10){
		document.getElementById('upButt').style.display = 'block'; 
	};
	if(points >= 500){
		document.getElementById('dubButt').style.display = 'block'; 
	};
}, 500);

function abacusUpdate() {
	let pointArray = points.toString().split('');
	abacus = '';
	for (let i = 0; i < pointArray.length; i++) {
		let n = pointArray[i];
		abacus += abacusLine[type][n];
	};
	document.getElementById('abacus').innerHTML = abacus;
	document.getElementById('points').innerHTML = points;
};

function incrementor(num) {
	points += num;
	abacusUpdate();
};

function upgrade() {
	if (points >= cost){
		points -= cost;
		upgrades += 1;
		cost += Math.floor(cost*1.2);
		document.getElementById('cost').innerHTML = cost;
		abacusUpdate();
	};
};

function double() {
	if (dubCost <= points){
		dubs += 1;
		points -= dubCost;
		dubCost += Math.floor(dubCost*1.5);
		upgrades *= 2;
		document.getElementById('dubCost').innerHTML = dubCost;
		abacusUpdate();
	};
};

function changeType(){
	if (type < 3){
		type += 1;
	} else {
		type = 0;
	};
	let styleName = ['Russian', 'Chinese', 'Japanese', 'Compact'];
	abacusUpdate();
	document.getElementById('styleName').innerHTML = styleName[type];
	document.getElementById('borders').innerHTML = borders[type];
	document.getElementById('borders2').innerHTML = borders[type];
};
function begin() {
	document.getElementById("startButt").style.display = "none"; 
	begone = true;
};