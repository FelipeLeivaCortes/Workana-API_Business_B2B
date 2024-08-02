# WORKANA - Business_B2B

Business_B2B es una API desarrollada en Node.js con Express para gestionar operaciones B2B (Business to Business).

## Requisitos

- Node.js (versión 18 o superior)
- npm (versión 6 o superior)
- MySQL (o cualquier otra base de datos SQL que estés utilizando)

## Instalación

1. Clona el repositorio:
    ```
    git clone https://github.com/tu-usuario/Business_B2B.git
    cd Business_B2B
    ```

2. Instala las dependencias:
    ```
    npm install
    ```

3. Configura las variables de entorno:
    Copie el archivo `.env.example` y renombrelo como `.env` en la raíz del proyecto y añade las siguientes variables:

    ```
    NODE_ENV=development|testing|production
    APP_PORT=
    API_KEY_PORTAL=
    API_KEY_SAP=

    DB_PORT=
    DB_USER=
    DB_PASSWORD=
    DB_HOST=
    DB_DATABASE_DEV=
    DB_DATABASE_TEST=
    ```

4. Configura la base de datos:

    - Crear una base de datos en MySQL:
        ```
        sql
        CREATE DATABASE business_b2b;
        ```

    - Importa el esquema de la base de datos si tienes un archivo SQL con la estructura:

        ```
        mysql -u tu_usuario -p business_b2b < path/to/schema.sql
        ```

## Uso

1. Inicia el servidor en modo desarrollo:

    ```
    npm run dev
    ```

    El servidor estará disponible en `http://localhost:3000` (o en el puerto que hayas definido en el archivo `.env`).

2. Para iniciar el servidor en modo producción:

    ```
    npm start
    ```

## Scripts

- `npm run dev`: Inicia el servidor en modo desarrollo utilizando nodemon.

- `npm run test`: Inicia el servidor en modo de testing (Para futuras mejoras, incluirlas en el directorio test).

- `npm start`: Inicia el servidor en modo producción.


## Despliegue

Para desplegar la aplicación en producción, sigue estos pasos:

1. Asegúrate de tener configuradas las variables de entorno adecuadas en el servidor de producción.

2. Instala las dependencias en el servidor de producción:
    ```
    npm install --production
    ```

3. Inicia la aplicación:
    ```
    npm start
    ```

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
Este archivo README.md ahora incluye la configuración para MySQL. Asegúrate de ajustar los detalles específicos de tu proyecto según sea necesario. Si necesitas más ayuda, ¡házmelo saber!