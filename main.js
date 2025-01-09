const abacusLine = ['|-0000000000|<br>', // 0
					'|0-000000000|<br>', // 1
			  		'|00-00000000|<br>', // 2
			 		'|000-0000000|<br>', // 3
			 		'|0000-000000|<br>', // 4
			 		'|00000-00000|<br>', // 5
			 		'|000000-0000|<br>', // 6
			 		'|0000000-000|<br>', // 7
			 		'|00000000-00|<br>', // 8
			 		'|000000000-0|<br>', // 9
			 		'|0000000000-|<br>']; // 10
let abacus = '';
let points = 0;
let pointArray = [0];
let begone = false;
let upgrades = 0;
let cost = 10;

document.getElementById("upButt").style.display = "none"; 

//starting abacus (just zeros)
for (let i = 0; i < pointArray.length; i++) {
	let n = pointArray[i];
	abacus += abacusLine[n];
};
document.getElementById('abacus').innerHTML = abacus;

//game loop
window.setInterval(function(){
	if(begone){
		incrementor(upgrades + 1)
	};
	if(points >= 10){
		document.getElementById("upButt").style.display = "block"; 
	};
}, 500);

function abacusUpdate() {
	let pointArray = points.toString().split('');
	abacus = '';
	for (let i = 0; i < pointArray.length; i++) {
		let n = pointArray[i];
		abacus += abacusLine[n];
	};
	document.getElementById('abacus').innerHTML = abacus;
	document.getElementById('points').innerHTML = points;
}

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
	}
};

function begin() {
	document.getElementById("startButt").style.display = "none"; 
	begone = true;
};