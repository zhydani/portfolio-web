import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  DesignServices as DesignServicesIcon,
} from "@mui/icons-material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ServicesSection = () => {
  const services = [
    {
      title: "Desenvolvimento Front-End",
      description: "Criação de interfaces responsivas e interativas utilizando React, HTML, CSS e JavaScript.",
      icon: <CodeIcon />,
    },
    {
      title: "Desenvolvimento Back-End",
      description: "Criação e manutenção de APIs e sistemas utilizando tecnologias como Django e ASP.NET Core.",
      icon: <StorageIcon />,
    },
    {
      title: "Web Design",
      description: "Criação de layouts modernos e designs atrativos para sites e sistemas.",
      icon: <DesignServicesIcon />,
    },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container
        maxWidth="md"
        sx={{
          maxWidth: 700,
          textAlign: "left", // Alinha tudo à esquerda
        }}
      >
        {/* Título da seção */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textTransform: "uppercase", // Deixa o título em uppercase
            fontSize: "2.2rem",
          }}
        >
          Serviços
        </Typography>

        {/* Serviços */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1, textTransform: "uppercase", fontSize: "1.1rem" }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", lineHeight: 1.6 }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Botão "Ver Mais" */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            href="/servicos"
            variant="contained"
            endIcon={<ArrowRightAltIcon sx={{ marginLeft: 0.5 }} />}
            sx={{
              backgroundImage: "linear-gradient(90deg, #b873ea 0%, #9d44de 100%)",
              color: "white",
              borderRadius: 3,
              px: 4,
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "transform 0.3s ease",
              "&:hover": {
                backgroundImage: "linear-gradient(90deg, #7f36b4 0%, #6d14ad 100%)",
                transform: "translateY(-5px)",
              },
            }}
          >
            Ver Mais
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
