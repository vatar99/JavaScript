var urlName = 'http://api.open-notify.org/astros.json';
async function getISSpeaple()
{
	var response = await fetch(urlName);
	var data = await response.json();
	var {number} = data;

	document.getElementById('lot').textContent = number;
}
async function getISSNames()
{
	const response = await fetch(urlName);
	const data = await response.json();
	const {people} = data;
	
	
	document.getElementById('loat').textContent = people[0].name + "\n";
		document.getElementById('loats').textContent = people[1].name + "\n";
	document.getElementById('loatss').textContent = people[2].name + "\n";
	
	
}



getISSpeaple();
getISSNames();