const puppeteer = require('puppeteer');
const xlsx = require('xlsx');

(async () => {
    const browser = await puppeteer.launch({
       // executablePath:"C",
        headless: false,
        ignoreHTTPSErrors: true,
        slowMo: 10,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ]
    });
    const page = await browser.newPage();

      // Habilitar la intercepción de solicitudes
      await page.setRequestInterception(true);

      // Manejar las solicitudes de imágenes para bloquearlas
      page.on('request', (request) => {
          if (request.resourceType() === 'image') {
              request.abort(); // Bloquear la solicitud de imágenes
          } else {
              request.continue(); // Continuar con otras solicitudes
          }
      });

    await page.setDefaultNavigationTimeout(60000); // Establecer el tiempo de espera para la navegación a 60 segundos

   // await page.goto('https://e-consulta.sunat.gob.pe/ol-ti-itconsvalicpe/ConsValiCpe.htm');

    // Leer el archivo Excel
    const workbook = xlsx.readFile('PEAJES.xlsx');
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // Obtener los datos de la hoja en formato JSON sin encabezado
    const datosJson = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

    // Iterar por cada fila de datos
    for (const fila of datosJson) {
        try {
           
            const f = fila[0].split('.');
            const fecha = f.join('/');
            
            const serie = fila[1];//.slice(1);
            const numero = fila[2];
            const monto = fila[3]+"";
            const ruc = fila[4]+"";
   
            

            await page.goto('https://e-consulta.sunat.gob.pe/ol-ti-itconsvalicpe/ConsValiCpe.htm');

            const num_ruc = await page.$('input[name="num_ruc"]');
            await num_ruc.type(ruc,{delay:120});

            const tipocomprobante = await page.$('select[name="tipocomprobante"]');
            await tipocomprobante.select('03');

            const cod_docide = await page.$('select[name="cod_docide"]');
            await cod_docide.select('6');

            const num_docide = await page.$('input[name="num_docide"]');
            await num_docide.type("20100152356",{delay:115});

            const num_serie = await page.$('input[name="num_serie"]');
            await num_serie.type(serie,{delay:100});

            const num_comprob = await page.$('input[name="num_comprob"]');
            await num_comprob.type(numero,{delay:110});

            const fec_emision = await page.$('input[name="fec_emision"]');
            await fec_emision.type(fecha,{delay:110});

            const cantidad = await page.$('input[name="cantidad"]');
            await cantidad.type(monto,{delay:80});

            await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1500)));

            const wacepta = await page.$('input[name="wacepta"]');
            

            if (wacepta) {
                // Obtener el valor del atributo onclick
                const onclickValue = await wacepta.evaluate((element) => element.getAttribute('onclick'));
            
                // Evaluar la función getTokenCaptcha3() en el contexto de la página
                await page.evaluate(onclickValue);
              } else {
                console.log("No se encontró el elemento input con el nombre especificado.");
              }


                

            const wanterior = await page.$('input[name="wanterior"]');        

            //await page.waitForSelector("wanterior");
            await page.waitForNavigation(); 

            // Esperar 5 segundos después del clic para asegurar que la descarga se complete
            
            

            const nombreArchivoPDF = `SUNAT_${ruc}_${serie}-${numero}.pdf`;

            // Guardar la página como archivo PDF
            await page.pdf({ path: nombreArchivoPDF, format: 'A4' }); 

            await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 5000)));

            // Esperar 3 segundos antes de realizar una acción
           // await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 5000)));
            //await page.waitForNavigation();
            //await page.waitForNavigation();

            //console.log(`Fecha: ${fecha}, Serie: ${nombre}, número: ${edad}, monto: ${monto}`);
        } catch (error) {
            console.error('Error en la iteración:', error);
        }
    }

    // Cerrar el navegador después de procesar todas las filas
   // await browser.close();
})();
