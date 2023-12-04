# Práctica 4 
### Dockerización de Aplicación NestJS y GitHub Actions

Esta práctica sirve como guía para Dockerizar una aplicación NestJS y establecer un flujo de trabajo automatizado mediante GitHub Actions. Con este enfoque, podrás construir y desplegar contenedores Docker de manera eficiente.

### Pasos a seguir:
***
### 1. Repositorio  
Crear repositorio en este caso PRACTICA4_2P

![Alt text](<img1.jpg>)

### 2. Preparar el código fuente.

Posteriormente, simplemente llevamos a cabo la confirmación del código que se utilizará.

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.09.05_d7d0d922.jpg>)

### 3. Establecer la configuración de secrets en GitHub. 

Crea los secrets "DOCKER_USER" y "DOCKER_PASSWORD" en la sección de Secrets de tu repositorio en GitHub.

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.10.22_c7bcde09.jpg>)

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.11.17_71353831.jpg>)

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.11.44_20d7fd43.jpg>)

### 4. Configurar el token de Docker Hub. 

Utiliza tu nombre de usuario y la clave (token) de Docker Hub para completar los secrets "DOCKER_USER" y "DOCKER_PASSWORD". Crea un token en Docker con el nombre "Github-Actions" y copia este token generado en el secret "DOCKER_PASSWORD".

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.14.42_54b7ce8c.jpg>)

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.18.30_ffdcf59b.jpg>)

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.19.32_be692b3d.jpg>)

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.22.20_2d2a2962.jpg>)

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.22.55_79a417f9.jpg>)

### 5. Dockerización de la aplicación

Crear un contenedor Docker para tu aplicación NestJS (idealmente, un servicio REST o GraphQL sin dependencias).

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.28.43_fc6d0b95.jpg>)

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.30.33_b660c851.jpg>)

### 6. Comprobar la construcción y operatividad. 

Comprobar que la imagen pueda ser compilada mediante el siguiente comando:
```
 docker login
```
```
 docker build -t larissalopez3001/webhooks:latest. 
 ```
 Confirma el correcto funcionamiento de la aplicación.

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.47.42_1b41278a.jpg>)

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 17.58.07_9c9664c8.jpg>)

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 18.25.04_7bab27bb.jpg>)

### 7. Confirmación

Finalmente, realizamos la confirmación para permitir que los builds se realicen automáticamente cada vez que se realice un nuevo commit en el repositorio.

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 18.59.21_715d16fc.jpg>)

### 8. Crear la acción de la imagen Docker
Establece un flujo de trabajo en GitHub Actions para generar la imagen Docker utilizando el archivo docker-image.yml.

![Alt text](<Imagen de WhatsApp 2023-12-03 a las 18.59.49_67be009f.jpg>)

# Evidencias de la práctica

Cuando guardamos estos cambios, se generará automáticamente una nueva construcción (build).

![Alt text](image.png)

![Alt text](image-1.png)