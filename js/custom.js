new WOW().init();

$('#bienvenido').typeIt({
     strings: ["Bienvenido a Orbitel.", "Tu Nuevo Contact Center"],
     speed: 50,
     breakLines: false,
     autoStart: false,
     loop:true,
     loopDelay:4000,
     deleteDelay:4000,
});
$('#message').typeIt({
     speed: 50,
     autoStart: false
});
$('#postulate').typeIt({
     strings: ["Nuestra gente es", "el motor de Orbitel."],
     speed: 50,
     autoStart: false
});
$('#contactanos').typeIt({
     strings: ["Entra en contacto", "con nosotros."],
     speed: 50,
     autoStart: false
});