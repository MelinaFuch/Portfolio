import { Grid, Container, Button, Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "./Projects.modules.css";
import styled from "@emotion/styled";

function Projects() {
  const Img = styled.img`
    width: 19rem;
    height: auto;
    margin-bottom: 10px;
  `;
  // margin: auto;
  var sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    afterChange: (current) => {
      sliderRef.current.slickGoTo(current);
    },
  };

  return (
    <Container
      className="container"
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Box
        // mt={"10rem"}
        sx={{
          height: "auto",
          width: "97%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        align={"center"}
      >
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, index) => (
            <Box
              key={project.name}
              style={{
                width:
                  sliderRef.current &&
                  sliderRef.current.innerSlider.state.currentSlide === index
                    ? "20px"
                    : "310px",
                height:
                  sliderRef.current &&
                  sliderRef.current.innerSlider.state.currentSlide === index
                    ? "200px"
                    : "350px",
                transition: "width 0.5s",
              }}
            >
              <Img src={project.img} alt={project.name} />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.5rem",
                  letterSpacing: 3,
                  color: "#5cff5c",
                  textShadow:
                    "0 0 5px #008000, 0 0 10px #008000, 0 0 15px #008000, 0 0 20px #008000",
                }}
              >
                {project.name}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "1.1rem",
                  mb: 0.8,
                  color: "#5cff5c",
                  textShadow:
                    "0 0 5px #008000, 0 0 10px #008000, 0 0 15px #008000, 0 0 20px #008000",
                }}
              >
                {project.subtitle}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: ".9rem",
                  color: "#5cff5c",
                  textShadow:
                    "0 0 5px #008000, 0 0 10px #008000, 0 0 15px #008000, 0 0 20px #008000",
                }}
              >
                {project.rol}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}

const projects = [
  {
    name: "InfoFarma",
    subtitle: "Proyecto Grupal [No Country]",
    rol: "Desarrollo de componentes | Filtrado por letra y ordenamiento por precio | Estilizado de página con MaterialUI | Diseño de página por Figma",
    img: "img/projects/infofarma.jpg",
  },
  {
    name: "Agregar funcionalidades",
    subtitle: "Trabajo Freelance para Uvi",
    rol: "Integración de Paypal| Creación de formulario para asesorías | Actualizar información general de la página.",
    img: "img/projects/uvi.jpg",
  },
  {
    name: "Casamiento",
    subtitle: "Trabajo Freelance",
    rol: "Creación y gestión de Base de Datos y rutas | Implementación de librería para cargar fotos. | Diseño responsive. | Deploy",
    img: "img/projects/casamiento.jpg",
  },
  {
    name: "Huellitas",
    subtitle: "Proyecto Grupal [Henry]",
    rol: "Creación de componentes, estados globales y rutas (CRUD) | Implementación de filtros | Integración de geolocalización y Mercado Pago",
    img: "img/projects/huellitas.jpg",
  },
  {
    name: "SPA Dogs",
    subtitle: "Proyecto Individual [Henry]",
    rol: "Creación y gestión de Base de Datos y rutas | Consumición de datos de API externa | Creación de componentes y estados globales | Implementar sistema de filtrado y ordenamiento",
    img: "img/projects/pidogs.jpg",
  },
];

export default Projects;
