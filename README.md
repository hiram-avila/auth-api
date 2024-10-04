# Node.js API con Autenticación, Redis, BCrypt y MySQL (Sequelize) en AWS RDS

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![AWS RDS](https://img.shields.io/badge/AWS%20RDS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

Este proyecto es una API desarrollada con Node.js que utiliza autenticación de usuarios con **bcrypt** para el hash de contraseñas, **Redis** para almacenamiento en caché, y **Sequelize** para la interacción con una base de datos MySQL alojada en **AWS RDS**. Todo está contenido en **Docker** para facilitar el despliegue y la escalabilidad.

## 🛠️ Características

- **Node.js y Express**: API RESTful para gestionar usuarios.
- **Autenticación**: Se utiliza **bcrypt** para el hash de contraseñas.
- **Redis**: Implementado para el almacenamiento en caché de datos.
- **Sequelize**: ORM para interactuar con MySQL.
- **MySQL**: Base de datos alojada en **Amazon RDS**.
- **Docker**: Contenerización de la aplicación y servicios (Redis).
- **JWT (JSON Web Tokens)**: Para la autenticación segura de usuarios.

## 📋 Requisitos Previos

Antes de empezar, asegúrate de tener instalado lo siguiente:

- [Docker](https://www.docker.com/get-started) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
- [Node.js](https://nodejs.org/en/download/) (v14+) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
- Una instancia de **MySQL** corriendo en **Amazon RDS** o localmente.

## ⚙️ Configuración del Proyecto

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu-usuario/tu-proyecto.git
    cd tu-proyecto
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

    ```bash
    DB_NAME=nombre_de_tu_base_de_datos
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_HOST=tu_endpoint_rds
    DB_PORT=3306
    REDIS_HOST=redis
    REDIS_PORT=6379
    JWT_SECRET=tu_secreto_jwt
    ```

4. Construye y ejecuta los contenedores de Docker:

    ```bash
    docker-compose build
    docker-compose up
    ```

## 📌 Endpoints de la API

### ➕ Registro de Usuario

- **URL**: `/api/users/register`
- **Método**: `POST`
- **Descripción**: Registra a un nuevo usuario en la base de datos.
- **Cuerpo de la solicitud**:
  ```json
  {
    "username": "nombre_de_usuario",
    "password": "contraseña_segura"
  }
