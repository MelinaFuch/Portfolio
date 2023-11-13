import React from "react";
import "./Skills.modules.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";
import styled from "@emotion/styled";
import { Grid, Container, Button, Box, Typography } from "@mui/material";

const Skills = () => {
  const Img = styled.img`
    width: 10rem;
    height: auto;
    border-radius: 20px;
    margin-bottom: 10px;
  `;
  var slider = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    pauseOnHover: true,
    arrows: false,
  };
  const StyledBox = styled(Box)`
    transition: transform 0.5s ease-in-out, border 0.6s ease-in-out;
    &:hover {
      transform: scale(1.1);
      border: 2px solid #000;
      box-shadow: 0 0 5px #008000, 0 0 10px #008000, 0 0 15px #008000,
        0 0 20px #008000;
    }
  `;

  return (
    <Container className="container2">
      <Slider {...settings} ref={slider}>
        {techs.map((tech, index) => (
          <StyledBox
            className="container-techs"
            key={index}
            height={"auto"}
            p={2}
            bgcolor={"#fff"}
            borderRadius={5}
            align={"center"}
            onMouseOver={() => setHoveredImage(index)}
            onMouseOut={() => setHoveredImage(null)}
          >
            <Img src={tech.img} alt={tech.name} className="slider-image" />
            <Typography variant="h4" fontSize={"1.6rem"}>
              {tech.name}
            </Typography>
          </StyledBox>
        ))}
      </Slider>
    </Container>
  );
};
const techs = [
  { img: "img/techSkills/js.png", name: "JavaScript" },
  { img: "img/techSkills/html.png", name: "HTML" },
  { img: "img/techSkills/css.png", name: "CSS" },
  { img: "img/techSkills/mui.png", name: "Material UI" },
  { img: "img/techSkills/nextjs.png", name: "Next.js" },
  { img: "img/techSkills/reduxjs.jpg", name: "Toolkit" },
  { img: "img/techSkills/reactjs.jpg", name: "React.js" },
  { img: "img/techSkills/reduxjs.jpg", name: "Redux" },
  { img: "img/techSkills/js.png", name: "JavaScript" },
  { img: "img/techSkills/docker.png", name: "Docker" },
  { img: "img/techSkills/mongodb.png", name: "MongoDB" },
  { img: "img/techSkills/postgresql.png", name: "PostgreSQL" },
  { img: "img/techSkills/nodejs.jpg", name: "Node.js" },
  { img: "img/techSkills/git.png", name: "Git" },
];
const front = [
  { img: "img/techSkills/js.png", name: "JavaScript" },
  { img: "img/techSkills/html.png", name: "HTML" },
  { img: "img/techSkills/css.png", name: "CSS" },
  { img: "img/techSkills/mui.png", name: "Material UI" },
  { img: "img/techSkills/nextjs.png", name: "Next.js" },
  { img: "img/techSkills/reduxjs.jpg", name: "Toolkit" },
  { img: "img/techSkills/reactjs.jpg", name: "React.js" },
  { img: "img/techSkills/reduxjs.jpg", name: "Redux" },
];

const back = [
  { img: "img/techSkills/js.png", name: "JavaScript" },
  { img: "img/techSkills/docker.png", name: "Docker" },
  { img: "img/techSkills/mongodb.png", name: "MongoDB" },
  { img: "img/techSkills/postgresql.png", name: "PostgreSQL" },
  { img: "img/techSkills/nodejs.jpg", name: "Node.js" },
];

const toolsTechs = [{ img: "img/techSkills/git.png", name: "Git" }];
export default Skills;
