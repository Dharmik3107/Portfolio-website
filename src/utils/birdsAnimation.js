export default function birdAnimation(isToggled) {
	if (isToggled) {
		VANTA.BIRDS({
			el: "#birds-pro",
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			color1: 0x8075ff,
			color2: 0xff7171,
			backgroundColor: 0x2f3061,
			birdSize: 2.6,
			wingSpan: 16.0,
			speedLimit: 3.0,
			separation: 88.0,
			cohesion: 1.0,
			quantity: 2.0,
		});
	} else {
		VANTA.BIRDS({
			el: "#birds",
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			color1: 0xeceff1,
			color2: 0xffffff,
			backgroundColor: 0x2f3061,
			birdSize: 2.6,
			wingSpan: 16.0,
			speedLimit: 3.0,
			separation: 88.0,
			cohesion: 1.0,
			quantity: 2.0,
		});
	}
}
