import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

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
  {
    title: "Aplicativo Mobile para Apple",
    imageUrl: "/works/minhacda-apple.png",
    link: "https://apps.apple.com/br/app/minha-cda/id1537436698",
  },
  {
    title: "Aplicativo Mobile para ANDROID",
    imageUrl: "/works/minhacda-googleplay.png",
    link: "https://play.google.com/store/apps/details?id=com.minhacda",
  },
  {
    title: "Site Institucional",
    imageUrl: "/works/zoraide-vieira.png",
    link: "https://www.zoraidevieira.com.br/",
  },
  {
    title: "E-commerce Personalizado",
    imageUrl: "/works/uniao-estudantil.png",
    link: "https://carteirademeiaentrada.com.br/",
  },
  {
    title: "E-commerce Personalizado",
    imageUrl: "/works/uniao-estudantil-digital.png",
    link: "https://digital.carteirademeiaentrada.com.br/",
  },
  {
    title: "Blog",
    imageUrl: "/works/literatura-tocantinense.png",
    link: "https://literaturatocantinense.com.br/",
  },
  {
    title: "Site Institucional",
    imageUrl: "/works/portal-transparencia.png",
    link: "https://portaldatransparencia.defensoria.to.def.br/",
  },
];

export default function Content() {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {works.map((work, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                      p: 0.5,
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
      </Container>
    </Box>
  );
}
