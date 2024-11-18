# Imagen base
FROM node:16

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY backend/package*.json ./
RUN npm install

# Copiar el resto del código
COPY backend/ .

# Exponer el puerto
EXPOSE 3000

# Comando por defecto
CMD ["node", "index.js"]
