'use client';

import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
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
          <Box sx={{ flex: 1, minWidth: '250px', textAlign: { xs: 'center', sm: 'left' } }}>
            <Image
              src="/logo-z2.png"
              alt="Logo Z2 Sistemas"
              width={80}
              height={80}
            />
          </Box>

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
              Estudantes
            </Typography>
            <Box>
              <Link
                href="/acompanhar-pedido"
                underline="none"
                color="inherit"
                sx={{
                  '&:hover': {
                    color: '#023047',
                  },
                }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Acompanhe seu pedido
                </Typography>
              </Link>
            </Box>
          </Box>

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
              Carteirinha
            </Typography>
            <Box>
              <Link
                href="/solicitar/estudante"
                underline="none"
                color="inherit"
                sx={{
                  '&:hover': {
                    color: '#023047',
                  },
                }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Estudante
                </Typography>
              </Link>
              {/* <Link
                href="/solicitar/professor"
                underline="none"
                color="inherit"
                sx={{
                  '&:hover': {
                    color: '#023047',
                  },
                }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Professor/Téc. Administrativo
                </Typography>
              </Link> */}
            </Box>
          </Box>

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
              Sobre
            </Typography>
            <Link
              href="/sobre-nos"
              underline="none"
              color="inherit"
              sx={{
                '&:hover': {
                  color: '#023047',
                },
              }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                União Estudantil
              </Typography>
            </Link>
          </Box>

          <Box sx={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
              <Link
                href="https://www.facebook.com"
                color="inherit"
                target="_blank"
                sx={{
                  '&:hover': {
                    transform: 'scale(1.3)',
                    transition: 'transform 0.3s',
                  },
                }}
              >
                <FacebookIcon fontSize="large" />
              </Link>
              <Link
                href="https://www.instagram.com"
                color="inherit"
                target="_blank"
                sx={{
                  '&:hover': {
                    transform: 'scale(1.3)',
                    transition: 'transform 0.3s',
                  },
                }}
              >
                <InstagramIcon fontSize="large" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=556381066332"
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

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left',
            mt: 3,
          }}
        >
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
            © {currentYear} Z2 Sistemas
          </Typography>
          <Typography variant="body2" color="inherit">
            Desenvolvido por Zhydani Reis
          </Typography>
        </Box>


      </Container>
    </Box>
  );
}
