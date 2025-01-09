import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BuildIcon from "@mui/icons-material/Build";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WebIcon from "@mui/icons-material/Web";

const services = [
  {
    title: "Desenvolvimento Front-End",
    description: "Criação de interfaces responsivas e interativas utilizando React, Next.js, HTML, CSS e JavaScript.",
    icon: <CodeIcon fontSize="large" />,
  },
  {
    title: "Desenvolvimento Back-End",
    description: "Criação e manutenção de APIs e sistemas utilizando tecnologias como Django, ASP.NET Core e bancos de dados.",
    icon: <StorageIcon fontSize="large" />,
  },
  {
    title: "Web Design",
    description: "Criação de layouts modernos e designs atrativos para sites e sistemas usando Figma e Photoshop.",
    icon: <DesignServicesIcon fontSize="large" />,
  },
  {
    title: "Sistemas e Manutenção",
    description: "Desenvolvimento e manutenção de sistemas como PEGA System e outras aplicações empresariais.",
    icon: <BuildIcon fontSize="large" />,
  },
  {
    title: "E-commerce",
    description: "Criação de lojas virtuais com integração de PagSeguro, Mercado Pago e funcionalidades personalizadas.",
    icon: <StorefrontIcon fontSize="large" />,
  },
  {
    title: "Sites Institucionais e Blogs",
    description: "Desenvolvimento de portfólios, blogs e sites institucionais personalizados e otimizados.",
    icon: <WebIcon fontSize="large" />,
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 15 }, backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: "bold" }}>
        Serviços
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ textAlign: "center" }}>
            <Box sx={{ mb: 2 }}>{service.icon}</Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {service.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
              {service.description}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Seção de Ver Todos */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="outlined"
          sx={{
            px: 6,
            py: 1,
            borderRadius: 0,
            "&:hover": {
              backgroundColor: "#004b23",
              color: "#fff",
            },
          }}
        >
          VER TODOS
        </Button>
      </Box>
    </Box>
  );
};

export default ServicesSection;
