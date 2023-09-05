const puppeteer = require('puppeteer');

// Hacemos una arrow function anonima autoejecutable
(async () => {
    // Lanzamos el navegador
    console.log('Iniciando navegador');
    const browser = await puppeteer.launch({
        headless: false
    });

    // Abrimos una nueva página
    const page = await browser.newPage();

    // Navegamos a la página con su url
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    // Esperar a que el selector 'h1' esté presente en la página
    await page.waitForSelector('h1');
    // Obtenemos el título
    var titulo1 = await page.evaluate(() => {
        const span = document.querySelector('.mw-page-title-main'); // Seleccionamos el elemento con la clase 'mw-page-title-main'
        return span.innerText; // Obtenemos el contenido de texto dentro del elemento
    });

    console.log(titulo1);

    // Cerramos el navegador
    browser.close();
    console.log('Navegador cerrado');
}) ();