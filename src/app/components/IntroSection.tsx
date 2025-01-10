import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const IntroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "#f9eefe",
        padding: "3rem 2rem",
        minHeight: "80vh",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            maxWidth: "600px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3.5rem" },
              color: "#000",
            }}
          >
            Olá, sou Zhydani Reis
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginTop: "1rem",
              fontSize: { xs: "1rem", md: "1.5rem" },
              color: "#444",
            }}
          >
            Ajudo empresas e pessoas a criar e melhorar 
            <br />
            seus sites, aplicativos e designs para a web
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: "50%",
            overflow: "hidden",
            marginTop: { xs: "2rem", md: "0" },
            width: { xs: "200px", md: "300px" },
            height: { xs: "200px", md: "300px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/perfil.jpg"
            alt="Zhydani Reis"
            width={300}
            height={300}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default IntroSection;
