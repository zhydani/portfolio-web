import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const WorksSection = () => {
  const works = [
    {
      title: "Mobile App UI Design",
      imageUrl: "/works/mobile-app-design.jpg",
      link: "https://example-mobileapp.com", // Substituir pelo link real
    },
    {
      title: "Website Design",
      imageUrl: "/works/website-design.jpg",
      link: "https://example-website.com", // Substituir pelo link real
    },
    {
      title: "E-commerce Platform",
      imageUrl: "/works/ecommerce-platform.jpg",
      link: "https://example-ecommerce.com", // Substituir pelo link real
    },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        {/* Título da seção */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textTransform: "uppercase",
            fontSize: "2.2rem",
            textAlign: "left", // Alinha o título à esquerda
          }}
        >
          Trabalhos Recentes
        </Typography>

        {/* Trabalhos */}
        <Grid container spacing={4}>
          {works.map((work, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link href={work.link} passHref>
                <Box
                  component="a"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  {/* Imagem */}
                  <Image
                    src={work.imageUrl}
                    alt={work.title}
                    width={600}
                    height={400}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  {/* Título */}
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color: "#333",
                    }}
                  >
                    {work.title}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorksSection;
