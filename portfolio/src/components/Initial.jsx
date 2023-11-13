import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import "./Initial.modules.css";

function Initial() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [currentString, setCurrentString] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [mostrarCursor, setMostrarCursor] = useState(true);
  const [showAboutMeButton, setShowAboutMeButton] = useState(false);

  const strings = [
    "¡Hola! Mucho gusto, mi nombre es Melina Esmeralda Sosa Fuch.",
    "Soy una desarrolladora Full Stack de Mar del Plata, Argentina...",
    "¡Te invito a conocer más sobre mi perfil profesional y personal!",
  ];

  useEffect(() => {
    if (!showButton && !showAboutMeButton) {
      if (index < strings[currentString].length) {
        const timeoutId = setTimeout(() => {
          setText((text) => text + strings[currentString].charAt(index));
          setIndex((index) => index + 1);
        }, 100);
        return () => clearTimeout(timeoutId);
      } else if (currentString < strings.length - 1) {
        setShowButton(true);
      } else {
        setShowAboutMeButton(true);
      }
    }
  }, [text, index, showButton, showAboutMeButton]);

  const handleClick = () => {
    setText((text) => text + "\n");
    setIndex(0);
    setCurrentString((currentString) => currentString + 1);
    setShowButton(false);
  };

  const handleFinalClick = () => {
    console.log("holi");
  };

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#000",
        justifyContent: "center",
        alignContent: "center",

        height: "100vh",
        weight: "100vw",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          maxWidth: "100vw",
        }}
      >
        <Typography
          sx={{
            fontSize: "3rem",
            letterSpacing: 3,
            color: "#5cff5c",
            textShadow:
              "0 0 5px #008000, 0 0 10px #008000, 0 0 15px #008000, 0 0 20px #008000",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            margin: 0,
            maxWidth: "99vw",
            mb: 5,
          }}
        >
          {text}
          {mostrarCursor ? <span className="cursor">|</span> : " "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {showButton && (
          <Button
            className="button-continue"
            sx={{
              pl: 2,
              pr: 2,
              fontSize: "2rem",
              border: "3px solid #5cff5c",
              borderRadius: "5px",
              color: "#5cff5c",
              textShadow:
                "0 0 5px #008000, 0 0 10px #008000, 0 0 15px #008000, 0 0 20px #008000",
            }}
            onClick={handleClick}
          >
            Continuar
          </Button>
        )}
        {showAboutMeButton && (
          <Button
            sx={{
              pl: 2,
              pr: 2,
              fontSize: "2rem",
              border: "5px solid #5cff5c",
              color: "#5cff5c",
              // width: '7rem',
              textShadow:
                "0 0 5px #008000, 0 0 10px #008000, 0 0 15px #008000, 0 0 20px #008000",
            }}
            onClick={handleFinalClick}
          >
            Ven a conocerme
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Initial;
