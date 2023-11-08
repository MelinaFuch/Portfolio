import { Grid, Container, Button, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

function Presentation() {
  const Img = styled.img`
    width: 50rem;
    height: auto;
  `;

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [mostrarCursor, setMostrarCursor] = useState(true);

  const strings = [
    "Soy desarrolladora web Full-Stack voluntaria en No Country desde octubre de 2023. Me gradué de Henry y desde ahí continúo con mi aprendizaje en tecnologías nuevas y las ya conocidas. Actualmente me encuentro trabajando como profesional independiente, y realizando un curso de inglés.",
  ];

  useEffect(() => {
    if (index < strings[0].length) {
      const timeoutId = setTimeout(() => {
        setText((text) => text + strings[0].charAt(index));
        setIndex((index) => index + 1);
      }, 80);
      return () => clearTimeout(timeoutId);
    }
  }, [text, index]);

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
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
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
              sx={{
                //   ml: 5,
                fontSize: "3rem",
                letterSpacing: 3,
                color: "#5cff5c",
                textShadow:
                  "0 0 5px #008000, 0 0 10px #008000, 0 0 15px #008000, 0 0 20px #008000",
              }}
              align={"center"}
            >
              {text}
              {mostrarCursor ? <span className="cursor">{"|"}</span> : " "}
            </Typography>
          </Grid>
          <Grid item xs={0} md={6} align={"center"}>
            <Img src="/img/avatar.png" alt="avatar" />
          </Grid>
        </Grid>
      </Container>

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
              sx={{
                //   ml: 5,
                fontSize: "3rem",
                letterSpacing: 3,
                color: "#5cff5c",
                textShadow:
                  "0 0 5px #008000, 0 0 10px #008000, 0 0 15px #008000, 0 0 20px #008000",
              }}
              align={"center"}
            >
              {text}
              {mostrarCursor ? <span className="cursor">{"|"}</span> : " "}
            </Typography>
          </Grid>
          <Grid item xs={0} md={6} align={"center"}>
            <Img src="/img/avatar.png" alt="avatar" />
          </Grid>
        </Grid>
      </Container>
    </ReactCardFlip>
  );
}

export default Presentation;
