import { Grid, Container, Button, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

function PresentationPersonal() {
  const Img = styled.img`
    width: 50rem;
    height: auto;
  `;

  const [textLaboral, setTextLaboral] = useState("");
  const [index, setIndex] = useState(0);
  const [mostrarCursor, setMostrarCursor] = useState(true);
  const [perfil, setPerfil] = useState("personal");

  const strings = [
    "Me encanta adquirir nuevos conocimientos sobre todo. Diseño y creo mi propia ropa, me expreso pintando y creando (desde ropa hasta cuadros). Tengo un perrhijo salchicha. Además, me gusta disfrutar de una buena lectura para despejarme, y me encanta poder ayudar a todos los seres vivos, de alguna forma todxs podemos ayudar a una vida que lo necesite",
  ];

  useEffect(() => {
    if (index < strings[0].length) {
      const timeoutId = setTimeout(() => {
        setTextLaboral((text) => text + strings[0].charAt(index));
        setIndex((index) => index + 1);
      }, 70);
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
        // alignContent: "center",
        // justifyContent: "center",
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
        <Grid item xs={0} md={6} align={"center"} m={"auto"}>
          <Img src="/img/personal.png" alt="avatar" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              // ml: 5,
              // fontSize: "2rem",
              letterSpacing: 3,
              color: "#5cff5c",
              textShadow:
                "0 0 5px #008000, 0 0 10px #008000, 0 0 15px #008000, 0 0 20px #008000",
            }}
            align={"center"}
            m={"auto"}
          >
            {textLaboral}
            {mostrarCursor ? <span className="cursor">|</span> : " "}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PresentationPersonal;
