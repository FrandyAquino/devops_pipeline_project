# Pipeline DevOps - Aplicación Web Simple

Este proyecto implementa un pipeline DevOps completo para una aplicación web simple que incluye un frontend y un backend. El objetivo es demostrar la integración de herramientas y conceptos DevOps, como CI/CD, contenedores Docker, pruebas automatizadas y monitoreo básico.

## Componentes del Proyecto

### 1. Aplicación Web Simple

- **Frontend**: Aplicación sencilla construida con HTML, CSS y JavaScript.
- **Backend**: Backend básico usando Node.js y Express.
- **Base de Datos**: Se utiliza MongoDB o SQLite para la base de datos.

### 2. Pipeline CI/CD

- **Control de Versiones**: GitHub se utiliza para el control de versiones.
- **Integración Continua (CI)**: Jenkins o GitHub Actions se usan para la integración continua.
- **Contenedores (Docker)**: Docker se emplea para contenerizar tanto el frontend como el backend.
- **Despliegue Automatizado**: El pipeline incluye despliegue automático a través de Jenkins o GitHub Actions.

### 3. Pruebas

- **Pruebas Unitarias**: Se implementan pruebas unitarias para el backend y el frontend.
- **Pruebas de Integración**: Se verifican las interacciones entre el frontend, backend y base de datos.
- **Análisis de Código Estático**: Se incluye un análisis de código estático para asegurar buenas prácticas de programación.

### 4. Monitoreo

- **Logs Centralizados**: Se implementa un sistema para centralizar los logs de la aplicación.
- **Métricas Básicas**: Se recopilan métricas básicas del sistema.
- **Alertas Simples**: Se configuran alertas para monitorear el estado del sistema.

---

## Requisitos

1. **Docker**: Para contenerizar la aplicación y sus servicios.
2. **GitHub**: Repositorio para control de versiones y despliegue automático.
3. **Jenkins o GitHub Actions**: Herramientas para el pipeline CI/CD.
4. **MongoDB o SQLite**: Base de datos para la aplicación.
5. **Node.js y Express**: Para el backend de la aplicación.
6. **Pruebas**: Jest o Mocha para pruebas unitarias e integración.

---

## Imagenes acerca del proyecto

![image](https://github.com/user-attachments/assets/d20bfde1-94d3-4be8-b261-9a63b1e957db)
![image](https://github.com/user-attachments/assets/4625a9dc-ae5a-40c9-8a4e-7064de761762)
![image](https://github.com/user-attachments/assets/a0c70903-ed4b-4db8-b23b-55e9d73251a6)



## Guía de Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
