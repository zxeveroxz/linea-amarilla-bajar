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

    await page.goto('http://comprobantes.limaexpresa.pe/ConsultaSUNAT/ConsultaComprobantesSunat.aspx');

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
            
            const serie = fila[1].slice(1);
            const numero = fila[2];
            //const monto = fila[3];

   

            await page.goto('http://comprobantes.limaexpresa.pe/ConsultaSUNTA/ConsultaComprobantesSunat.aspx');

            await page.select('#DefaultContent_ddlTipoDoc', 'F');

            await page.evaluate((fecha) => {
                const fechaInput = document.querySelector('#DefaultContent_txtFechaIni');
                fechaInput.value = fecha;
            }, fecha);

            await page.type('#DefaultContent_txtRUC', "20100152356");

            await page.type('#DefaultContent_txtPtoVta', serie);

            await page.type('#DefaultContent_txtNroTicket', numero);

            
           
           

           await page.click('#DefaultContent_btnConsultar');

           

            await page.waitForSelector('#DefaultContent_btnDescargarTodo');
            await page.click('#DefaultContent_gvConsultaComprobantes_imbExportarXML_0');

            // Esperar 5 segundos después del clic para asegurar que la descarga se complete
            
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
    await browser.close();
})();
