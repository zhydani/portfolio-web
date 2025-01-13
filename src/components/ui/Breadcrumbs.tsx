import React from 'react';
import { Box, Breadcrumbs, Container, Link, Typography, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadcrumbsSectionProps {
  pageName: string;
}

export const BreadcrumbsSection: React.FC<BreadcrumbsSectionProps> = ({ pageName }) => {
  return (
    <Box 
      pt={3}
      sx={{
        backgroundImage: "linear-gradient(90deg, #b873ea 0%, #9d44de 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            px: { xs: 2, sm: 4 },
            mb: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            {pageName}
          </Typography>
        </Box>
        <Box
          sx={{
            px: { xs: 2, sm: 4 },
          }}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: '#fff' }} />}
            aria-label="breadcrumb"
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              color: '#fff',
              pb: 3,
            }}
          >
            <Link
              href="/"
              underline="none"
              color="inherit"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              <HomeIcon sx={{ mr: 0.5, fontSize: { xs: '1rem', sm: 'inherit' } }} />
              Início
            </Link>
            <Tooltip title="Você está aqui">
              <Typography
                color="inherit"
                sx={{
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  cursor: 'default',
                }}
              >
                {pageName}
              </Typography>
            </Tooltip>
          </Breadcrumbs>
        </Box>
      </Container>
    </Box>
  );
};
