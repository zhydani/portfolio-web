import React from 'react';
import { Box, Breadcrumbs, Container, Link, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadcrumbsSectionProps {
  pageName: string;
}

export const BreadcrumbsSection: React.FC<BreadcrumbsSectionProps> = ({ pageName }) => {
  return (
    <Box pt={4}>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: 3,
            py: 2,
            px: { xs: 2, sm: 4 },
          }}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: '#757575' }} />}
            aria-label="breadcrumb"
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              color: '#757575',
            }}
          >
            <Link
              href="/"
              underline="none"
              color="inherit"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#424242',
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
            <Typography
              color="inherit"
              sx={{
                fontWeight: 'bold',
                color: '#424242',
                fontSize: { xs: '0.9rem', sm: '1rem' },
              }}
            >
              {pageName}
            </Typography>
          </Breadcrumbs>
        </Box>
      </Container>
    </Box>
  );
};
