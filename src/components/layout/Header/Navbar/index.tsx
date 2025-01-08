import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: "Sobre", href: "/" },
    { label: "Serviços", href: "/" },
    { label: "Trabalhos", href: "/" },
  ];

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        background: "#f9eefe",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", padding: "0px !important" }}>
          <Box sx={{ display: "flex", alignItems: "center", py: 0.8, mb: 0.5 }}>
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Image
                  src="/logo-z2.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  style={{ marginTop: 5, marginBottom: 2 }}
                />
              </Box>
            </Link>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 4 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  sx={{
                    color: "black",
                    // fontSize: 16,
                    pt: 1,
                    fontWeight: "semibold",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    ":hover": {
                      background: "none",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%) scaleX(0)",
                      width: "80%",
                      height: "2px",
                      backgroundColor: "black",
                      transition: "transform 0.3s ease-in-out",
                      transformOrigin: "center",
                    },
                    "&:hover::after": {
                      transform: "translateX(-50%) scaleX(1)",
                    },
                  }}
                  component={Link}
                  href={item.href}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                component={Link}
                href="/solicitar/estudante"
                endIcon={<ArrowRightAltIcon sx={{ marginLeft: 0.5 }} />}
                variant="contained"
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
                Entrar em contato
              </Button>
            </Box>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
              aria-label="menu"
            >
              <MenuIcon color="primary" />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: "100%",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component={Link} href={item.href}>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      color: "black",
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <Box sx={{ width: "100%", padding: 1.5 }}>
                <Button
                  component={Link}
                  href="/solicitar/estudante"
                  endIcon={<ArrowRightAltIcon sx={{ marginLeft: 0.5 }} />}
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundImage: "linear-gradient(90deg, #b873ea 0%, #9d44de 100%)",
                    color: "white",
                    borderRadius: 3,
                    px: 2,
                    fontSize: "1rem",
                    fontWeight: "bold",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      backgroundImage: "linear-gradient(90deg, #7f36b4 0%, #6d14ad 100%)",
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  Entrar em contato
                </Button>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
