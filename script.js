let app= documento.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay:75,
});

typewriter
.pauseFor(2500)
.typeString('Soy estuduiante de Tecnolochicaspro y aprendi a desarrallorar sitios web de progrmacion(HTML,CSS')
.pauseFor(200)
.deleteChars(10)
.start();



    