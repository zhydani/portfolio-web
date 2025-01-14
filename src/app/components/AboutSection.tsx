import React from "react";
import { Box, Container, Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: "#f9f9f9",
        px: { xs: 2, md: 0 }, 
      }}
    >
      <Container
        maxWidth="md"
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 4,
            fontSize: { xs: "1.8rem", md: "2.2rem" }, 
            textAlign: { xs: "center", md: "left" }, 
          }}
        >
          Sobre
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.8, 
            fontSize: { xs: "1rem", md: "1.2rem" }, 
            color: "#555",
            textAlign: { xs: "justify", md: "left" }, 
          }}
        >
          Olá, eu sou Zhydani Reis! Sou graduada em <strong>Sistemas de Informação</strong> pela Universidade Estadual do Tocantins 
          e atuo como desenvolvedora desde <strong>2018</strong>. Especialista em <strong>frontend</strong>, também tenho experiência com <strong>backend</strong>, o 
          que me permite criar soluções completas e funcionais.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "#555",
            textAlign: { xs: "justify", md: "left" },
          }}
        >
          Certificada em <strong>HTML, CSS, JavaScript</strong> e <strong>Web Design</strong>, trabalho com foco em criar experiências digitais intuitivas, 
          modernas e eficientes. Sou apaixonada por transformar ideias em projetos reais e estou sempre aprendendo novas 
          tecnologias para aprimorar meu trabalho.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
