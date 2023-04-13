document.addEventListener("load", () => {
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
});
