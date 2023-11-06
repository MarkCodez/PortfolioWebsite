// scroll-magic.js
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.trigger-element',
    triggerHook: 0.5,
})
.setClassToggle('.animated-element', 'active')
.addTo(controller);

