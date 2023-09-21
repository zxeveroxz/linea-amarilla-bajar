const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    ignoreHTTPSErrors: true,
    args: [],
    userDataDir: path.join(__dirname, 'puppeteer_data')
  });
  const page = await browser.newPage();

  let ajaxResponse = null; // Almacenar la respuesta de la solicitud POST específica

  // Habilitar la intercepción de solicitudes
  // Habilitar la intercepción de solicitudes
  await page.setRequestInterception(true);

  // Manejar las solicitudes
  page.on('request', async (request) => {
    if (request.method() === 'POST') {
      // Continuar con la solicitud para capturar la respuesta
      request.continue();
    } else {
      // Continuar con todas las demás solicitudes
      request.continue();
    }
  });




  await page.setDefaultNavigationTimeout(0); // Establecer el tiempo de espera para la navegación a 60 segundos

  await page.goto('https://bcpzonasegurabeta.viabcp.com/');

  // Esperar a que la nueva página se cargue
  await page.waitForNavigation();

  while (true) {
    // Verificar si estás en la ruta específica
    if (page.url().includes('https://bcpzonasegurabeta.viabcp.com/#/portal/detalle-de-tu-cuenta')) {
      console.log('Estás en la ruta específica, realizando solicitud POST...');

      // Realizar la solicitud POST específica

      await page.evaluate(() => {
        // Crear un botón adicional en la parte superior de la página
        const captureButton = document.createElement('button');
        captureButton.textContent = 'Capturar JSON';
        captureButton.style.position = 'fixed';
        captureButton.style.top = '60px';
        captureButton.style.left = '80px';
        document.body.appendChild(captureButton);

        // Agregar evento de clic al botón
        captureButton.addEventListener('click', async () => {
          const response = await fetch('https://apisux.nhbk.viabcp.com/ux-nhbk-account-overview-v1/channel/nhbk/v1/account-overview/transactions/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Agrega aquí cualquier encabezado requerido
            },
            body: JSON.stringify({
              // Agrega aquí los datos del cuerpo de la solicitud si es necesario
              productDisplayFeatureId:"a807aa1a-d991-4ead-9fad-230e9fb595e0"
            }),
          });

          const jsonResponse = await response.json(); // Convertir la respuesta a JSON

          // Mostrar la respuesta JSON en una alerta
          alert(JSON.stringify(jsonResponse, null, 2));
        });
      });


      // Esperar un tiempo para asegurarse de que la respuesta se haya capturado
      await page.waitForTimeout(5000);


    } else {
      console.log('No estás en la ruta específica, esperando...');
    }

    // Esperar 70 segundos antes del siguiente ciclo
    await page.waitForTimeout(70 * 1000);
  }

  // Mantener el navegador abierto para que puedas supervisar
  // y detener manualmente el script cuando sea necesario
  // await browser.close();
})();
