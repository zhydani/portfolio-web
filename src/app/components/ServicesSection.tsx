import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import NextLink from "next/link";

const ServicesSection = () => {
  const services = [
    {
      title: "Desenv. Front-End",
      description: "Criação de interfaces responsivas e interativas utilizando React, HTML, CSS e JavaScript.",
      iconUrl: "/icons/frontend.jpg",
    },
    {
      title: "Desenv. Back-End",
      description: "Criação e manutenção de APIs e sistemas utilizando tecnologias como Django e ASP.NET Core.",
      iconUrl: "/icons/backend.jpg",
    },
    {
      title: "Web Design",
      description: "Criação de layouts modernos e designs atrativos para sites e sistemas.",
      iconUrl: "/icons/webdesign.jpg",
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: "#f9f9f9" }}>
      <Container
        maxWidth="md"
        sx={{
          maxWidth: 700,
          textAlign: "left",
          px: { xs: 2, md: 2 }, 
        }}
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
          Serviços
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  maxWidth: { xs: "100%", sm: "300px" }, 
                  width: "100%",
                  "&:hover": {
                    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Image
                  src={service.iconUrl}
                  alt={service.title}
                  width={120}
                  height={120}
                  style={{
                    marginBottom: "16px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    textTransform: "uppercase",
                    fontSize: { xs: "1rem", md: "1.1rem" }, 
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.9rem", md: "1rem" }, 
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            component={NextLink}
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
