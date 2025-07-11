# Ejercicio Práctico Técnico


### Tecnologías Utilizadas

Para el proyecto desarrollado se hicieron uso de diversas tecnologías enfocadas al desarrollo ágil

### FrontEnd
* ReactJs (NextJs Framework)
1. npx crate-next-app@latest fimubac
* TypeScript como lenguaje principal
* Tailwind como framework para estilos

### BackEnd 
* NodeJs (Express) como framework para la creación de un backend
* JSON como base de datos de tipo usuario

```json
    export interface User {
        id: number
        nombre: string
        telefono: string
        correo: string
        fechaNacimiento: string
    }
```

1. npm i express


### Descarga y Ejecución
1. Clonar o descargar repositorio

2. Descomprimir y acceder a la carpeta raiz (fimubac o el nombre de la carpeta con todas las carpetas hijas)

3. Abrir línea de comandos en esa ubicación (fimubac/)

3.1 Ejecutar *npm i* para descargar los módulos

4. Ejecutar FrontEnd: *npm run dev*
5. Ejecutar BackEnd: *npm run dev:server*

6. Acceder a link generado por el frontEnd (http://localhost:3000)

7. Usar la interfaz generada


### Estructura general del proyecto

* Controllers
1. Incluye los tipos de controladores usados para la conexión a la base de datos

* DB
1. Contiene la base de datos preeliminar en formato JSON

* server
1. Incluye el fichero index.js del servidor en express

* src
1. Incluye las páginas creadas, componentes JSX

```json
src:
├───app
│   ├───register
│   └───table
└───components
    ├───buttons
    ├───cards
    ├───inputs
    ├───Modals
    ├───navbar
    └───utils

```

* types
1. Contiene la interface que define el tipo 'Usuario'



### Aspectos de rendimiento 

1. Se consideran estas tecnologías por la capacidad de renderizado de lado de servidor, conexiones robustas con API restful y tratamiento eficiente de datos.

2. Se añaden validaciones por parte de servidor y cliente para minimizar problemas y se hace uso de manejo de excepciones para posibles errores en tiempo de ejecución.


### Descripción de servidor

*Puerto 4000 -> localhost:4000*

* Se añade un método para consulta de usuarios
* Se añade un método para consulta de un sólo usuario por iD
* Se añade un método para eliminación de usuario por ID
* Se añade un método para edición de usuario por medio de ID
* Se añade un método para creación de un nuevo usuario (se recibe toda la información del *user*)