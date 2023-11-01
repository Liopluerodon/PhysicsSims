let particleCount = 0;
let particles = [];
let particleElements = [];

create=(xPos, yPos, speed, degree, count, mass, colors)=>{
	let initPartCount = particleCount;

	for (let i = initPartCount; i<count+initPartCount; i++) {
		//Calculate each particle object's stats
		particles[i] = {
			pos:[xPos,yPos],
			speed: speed,
			direction: degree,
			acceleration: [0,0],
			mass: mass,
			color: colors};

		particles[i].velocity = [particles[i].speed*Math.cos(particles[i].direction), particles[i].speed*Math.sin(particles[i].direction)];
		particles[i].momentum = [particles[i].velocity[0]*particles[i].mass, particles[i].velocity[1]*particles[i].mass];
		particles[i].kineticEnergy = (1/2)*(particles[i].mass)*(particles[i].speed**2);

		//Create the particle as an html element (some of these values can be condensed as css value of the class)
		particleElements[i] = document.createElement("p");
		particleElements[i].style.position = "absolute";
		particleElements[i].style.top = 600-particles[i].pos[1]+"px";
		particleElements[i].style.left = particles[i].pos[0]+"px";
		particleElements[i].style.backgroundColor = particles[i].color;
		particleElements[i].style.width = "20px";
		particleElements[i].style.height = "20px";
		particleElements[i].style.borderRadius = "100%";
		document.body.appendChild(particleElements[i])
		particleElements[i].className = "particle";


		particleCount++;
	}}

	//Example
	create(20,20,5, 1.57, 1, 20, "red");
	console.log(particles);