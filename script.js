var clock = document.getElementById('clock');
var Dates = document.getElementById('Dates');
function hexoClock()
{
	var time = new Date();
	var h = (time.getHours()%12).toString();
	var m = time.getMinutes().toString();
	var day = time.getDay().toString();
	var dt = time.getDate().toString();
	var mn = time.getMonth().toString();
	var y = time.getFullYear().toString();
	
	if(h.length <2){
	h = '0' +h;
	}
	if(m.length < 2){
	m = '0'+m;
	}

	let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	let mounthList =["January", "February", "March", "April", "May", "June","July","August", "September", "October", "November", "December"];
	
	var clockString ="Current UTC time: " + h +':' + m;
	var TwoClockString = dayList[day] + "," + " " + dt + "."+ mounthList[mn] + "." + y;
	clock.textContent = clockString;
	Dates.textContent = TwoClockString;
}

setInterval(hexoClock,1000);

