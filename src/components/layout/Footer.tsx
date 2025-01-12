'use client';

import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: '#200245',
        color: 'white',
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 4,
          }}
        >
          {/* Logo */}
          <Box sx={{ flex: 1, minWidth: '250px', textAlign: { xs: 'center', sm: 'left' } }}>
            <Image
              src="/logo-z2.png"
              alt="Logo Zhydani Reis"
              width={80}
              height={80}
            />
          </Box>

          {/* Projetos */}
          <Box sx={{ flex: 1, minWidth: '150px', textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                color: '#fff',
                opacity: 0.8,
              }}
            >
              Projetos
            </Typography>
            <Box>
              <Link
                href="/trabalhos"
                underline="none"
                color="inherit"
                sx={{
                  '&:hover': {
                    color: '#ccc',
                  },
                }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Veja meus trabalhos
                </Typography>
              </Link>
            </Box>
          </Box>

          {/* Serviços */}
          <Box sx={{ flex: 1, minWidth: '150px', textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                color: '#fff',
                opacity: 0.8,
              }}
            >
              Serviços
            </Typography>
            <Box>
              <Link
                href="/servicos"
                underline="none"
                color="inherit"
                sx={{
                  '&:hover': {
                    color: '#ccc',
                  },
                }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Desenvolvimento Web
                </Typography>
              </Link>
              <Link
                href="/servicos/design"
                underline="none"
                color="inherit"
                sx={{
                  '&:hover': {
                    color: '#ccc',
                  },
                }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Design de Interfaces
                </Typography>
              </Link>
            </Box>
          </Box>

          {/* Sobre mim */}
          <Box sx={{ flex: 1, minWidth: '150px', textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                color: '#fff',
                opacity: 0.8,
              }}
            >
              Sobre mim
            </Typography>
            <Link
              href="/sobre"
              underline="none"
              color="inherit"
              sx={{
                '&:hover': {
                  color: '#ccc',
                },
              }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                Conheça minha história
              </Typography>
            </Link>
          </Box>

          {/* Redes sociais */}
          <Box sx={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <Link
                href="https://www.linkedin.com/in/zhydani/"
                color="inherit"
                target="_blank"
                sx={{
                  '&:hover': {
                    transform: 'scale(1.3)',
                    transition: 'transform 0.3s',
                  },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </Link>
              <Link
                href="mailto:zhydani@gmail.com"
                color="inherit"
                sx={{
                  '&:hover': {
                    transform: 'scale(1.3)',
                    transition: 'transform 0.3s',
                  },
                }}
              >
                <EmailIcon fontSize="large" />
              </Link>
              <Link
                href="https://wa.me/5563984038535"
                color="inherit"
                target="_blank"
                sx={{
                  '&:hover': {
                    transform: 'scale(1.3)',
                    transition: 'transform 0.3s',
                  },
                }}
              >
                <WhatsAppIcon fontSize="large" />
              </Link>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3, bgcolor: 'rgba(255, 255, 255, 0.4)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="inherit">
            © {currentYear} Zhydani Reis
          </Typography>
          {/* <Typography variant="body2" color="inherit">
            Desenvolvido por Zhydani Reis
          </Typography> */}
        </Box>
      </Container>
    </Box>
  );
}
