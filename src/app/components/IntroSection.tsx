import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const IntroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#f9eefe",
        padding: { xs: "2rem 1rem", md: "3rem 2rem" },
        minHeight: "80vh",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: "lg",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "600px" },
            mb: { xs: 3, md: 0 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.5rem" },
              color: "#000",
              lineHeight: 1.2,
            }}
          >
            <Typewriter
              words={["Olá, sou Zhydani Reis"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
            />
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginTop: "1rem",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.5rem" },
              color: "#444",
              lineHeight: 1.6,
            }}
          >
            Ajudo empresas e pessoas a criar e melhorar 
            <br />
            seus sites, aplicativos e designs para a web.
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: "50%",
            overflow: "hidden",
            width: { xs: "150px", sm: "200px", md: "300px" },
            height: { xs: "150px", sm: "200px", md: "300px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Image
            src="/perfil.jpg"
            alt="Zhydani Reis"
            width={300}
            height={300}
            style={{
              objectFit: "contain",
              width: "100%", 
              height: "100%",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default IntroSection;
