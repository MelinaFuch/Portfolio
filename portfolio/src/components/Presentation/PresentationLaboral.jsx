import { Grid, Container, Button, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

function PresentationLaboral() {
  const Img = styled.img`
    width: 50rem;
    height: auto;
  `;

  const [textLaboral, setTextLaboral] = useState("");
  const [index, setIndex] = useState(0);
  const [mostrarCursor, setMostrarCursor] = useState(true);
  const [perfil, setPerfil] = useState("laboral");

  const strings = [
    "Soy desarrolladora web Full-Stack voluntaria en No Country desde octubre de 2023. Me gradué de Henry y desde ahí continúo con mi aprendizaje en tecnologías nuevas y las ya conocidas. Actualmente me encuentro trabajando como profesional independiente, y realizando un curso de inglés.",
  ];

  useEffect(() => {
    if (index < strings[0].length) {
      const timeoutId = setTimeout(() => {
        setTextLaboral((text) => text + strings[0].charAt(index));
        setIndex((index) => index + 1);
      }, 80);
      return () => clearTimeout(timeoutId);
    }
  }, [textLaboral, index]);

  useEffect(() => {
    // Crea un intervalo para hacer parpadear el cursor
    const cursorIntervalId = setInterval(() => {
      setMostrarCursor((mostrarCursorPrevio) => !mostrarCursorPrevio);
    }, 500); // Cambia el estado de mostrarCursor cada 500ms
    // Limpia los intervalos cuando el componente se desmonta
    return () => {
      // clearInterval(intervalId);
      clearInterval(cursorIntervalId);
    };
  });

  return (
    <Container
      sx={{
        minWidth: "100vw",
        maxWidth: "100vw",
        height: "100vh",
        bgcolor: "#000",
        p: 10,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              //   ml: 5,
              // fontSize: "3rem",
              letterSpacing: 3,
              color: "#5cff5c",
              textShadow:
                "0 0 5px #008000, 0 0 10px #008000, 0 0 15px #008000, 0 0 20px #008000",
            }}
            align={"center"}
          >
            {textLaboral}
            {mostrarCursor ? <span className="cursor">|</span> : " "}
          </Typography>
        </Grid>
        <Grid item xs={0} md={6} align={"center"}>
          <Img src="/img/profesional.png" alt="avatar" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PresentationLaboral;
