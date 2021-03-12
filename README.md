# Test | Mercado Libre | Front

- Hecho por: Lizeth Nuñez

**Indice**

1. [Descripción](#description)

2. [Instalación](#install)

3. [Pruebas unitarias](#unittest)

4. [Documentación](#docs)

<a id="description"></a>

## Descripción

- Este proyecto es el desarrollo de los requerimientos de la prueba enviada por Mercado libre, esta prueba se trata de la elaboracion de paginas de busqueda de items peticionando un api.

- Este proyecto fue generado con Create React App.
<a id="install"></a>

## Instalación

Para la correcta instalacion del proyecto se debe realizar los siguientes pasos:

### 1. Descargar el proyecto Front

- Dirigirse a la url `https://github.com/lizthin/test-ml-front`, clonar la rama master, ejecutar el script _npm install_ y posteriormente _npm run start_

- Abrir el navegador con la ruta [http://localhost:3000](http://localhost:3000)

### 2. Descargar el proyecto back

- Dirigirse a la url `https://github.com/lizthin/test-ml-back`, clonar la rama master, ejecutar el script _npm install_ y posteriormente _npm run start_

- Abrir el navegador con la ruta [http://localhost:3001](http://localhost:3001)

NOTA: El proyecto front realiza peticiones al api que esta corriendo del proyecto back end, por esta razon es necesario que para el correcto funcionamiento de la prueba esten ejecutandose los dos al mismo tiempo

<a id="unittest"></a>

## Pruebas unitarias

- Para ejecutar las pruebas unitarias del proyecto ejecutar el script _npm run test_
- Para verificar cobertura de las pruebas unitarias ejecutar el script _npm run test:coverage_

- La interfaz web de cobertura se puede consultar aqui [https://lizthin.github.io/coverage-test-ml-front/](https://lizthin.github.io/coverage-test-ml-front/)

<a id="docs"></a>

## Documentación

- La documentación técnica se realizó con jsDocs, asi que se encuentra en cada componente segun su estructura.
- Para ejecutar la compilación de documentación ejecutar el siguiente comando *npm run docs*, posteriormente dirigirse a la carpeta docs que es generada en la raiz del proyecto, abrir el archivo `index.html` en el navegador.
- La interfaz web de la documentación se puede consultar aqui [https://lizthin.github.io/docs-test-ml-front/index.html](https://lizthin.github.io/docs-test-ml-front/index.html)