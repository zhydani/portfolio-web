import React from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { BreadcrumbsSection } from "./Breadcrumbs";

const LoadingPage: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <Box>
      <BreadcrumbsSection pageName="Carregando..." />

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
            <CircularProgress color="primary" size={60} />
            {message && (
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  color: "primary.main",
                }}
              >
                {message}
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoadingPage;
