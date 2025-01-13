import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

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
  {
    title: "Desenv. Mobile",
    description: "Desenvolvimento de aplicativos móveis com React Native, incluindo publicação no Google Play e Apple Store.",
    iconUrl: "/icons/mobile.jpg",
  },
  {
    title: "Manutenção de Sistemas",
    description: "Manutenção e melhorias em sistemas desenvolvidos com ASP.NET Core, Django Rest Framework e React.",
    iconUrl: "/icons/manutencao.jpg",
  },
  {
    title: "Pega System",
    description: "Desenvolvimento e manutenção de soluções utilizando a plataforma Pega System.",
    iconUrl: "/icons/system.jpg",
  },
  {
    title: "E-commerce",
    description: "Criação de lojas virtuais completas com integração a Mercado Pago e PagSeguro para pagamentos.",
    iconUrl: "/icons/ecommerce.jpg",
  },
  {
    title: "Blogs",
    description: "Desenvolvimento de blogs personalizados com ferramentas modernas e fáceis de usar.",
    iconUrl: "/icons/blogs.jpg",
  },
];

export default function Content() {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
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
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  "&:hover": {
                    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Image
                  src={service.iconUrl}
                  alt={service.title}
                  width={200}
                  height={200}
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
                    fontSize: "1.1rem",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
