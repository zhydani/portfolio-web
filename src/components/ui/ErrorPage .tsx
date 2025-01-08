import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { BreadcrumbsSection } from "./Breadcrumbs";

const ErrorPage: React.FC<{ message?: string }> = ({
  message = "Ocorreu um erro inesperado.",
}) => {
  return (
    <Box>
      <BreadcrumbsSection pageName="Erro" />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box
          sx={{
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "error.main",
                fontWeight: "bold",
              }}
            >
              Erro
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                mb: 4,
                color: "text.secondary",
              }}
            >
              {message}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ErrorPage;
