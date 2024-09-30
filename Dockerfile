# Usar la imagen oficial de Node.js como base
FROM node:16

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos de package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código de la aplicación al contenedor
COPY . .

# Exponer el puerto en el que correrá tu aplicación (por ejemplo, 3000)
EXPOSE 3000

# Comando para correr la aplicación
CMD ["npm", "start"]
