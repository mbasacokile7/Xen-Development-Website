window.onload = function() {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    color: '#FFFFFF',
    maxParticles: 150,
    sizeVariations: 4,
  });
  responsive: [
    {
      breakpoint: 
768
,
      options: {
        maxParticles: 
200
,
        color: 
'#48F2E3'
,
        connectParticles: 
false
      }
    }, {
      breakpoint: 
425
,
      options: {
        maxParticles: 
100
,
        connectParticles: 
true
      }
    }, {
      breakpoint: 
320
,
      options: {
        maxParticles: 
0
 
// disables particles.js
      }
    }
  ]
});
};
