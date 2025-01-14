import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import NextLink from 'next/link';

const WorksSection = () => {
  const works = [
    {
      title: "Site Institucional",
      imageUrl: "/works/lucre-contabilidade.png",
      link: "https://www.lucrecontabilidade.site/",
    },
    {
      title: "Website Design",
      imageUrl: "/works/transparencia-figma.png",
      link: "https://www.figma.com/design/Wivxa9Vn0WZIgTNTC8dBA8/Novo-Portal-da-Transpar%C3%AAncia?m=auto&t=goMKkAyWq0uHqid6-6",
    },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: "#f9eefe" }}>
      <Container
        maxWidth="md"
        sx={{
          textAlign: "left",
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
          Trabalhos Recentes
        </Typography>

        <Grid container spacing={4}>
          {works.map((work, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    p: 2,
                    borderRadius: 2,
                    backgroundImage: "linear-gradient(90deg, #b873ea 0%, #9d44de 100%)",
                    color: "white",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 1,
                      backgroundColor: "#ffffff", 
                      borderRadius: "8px",
                      mb: 2,
                    }}
                  >
                    <Image
                      src={work.imageUrl}
                      alt={work.title}
                      width={700}
                      height={400}
                      style={{
                        borderRadius: "8px",
                        objectFit: "cover",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {work.title}
                  </Typography>
                </Box>
              </a>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            component={NextLink}
            href="/trabalhos"
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

export default WorksSection;
