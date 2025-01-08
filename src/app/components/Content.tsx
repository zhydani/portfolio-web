import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, FormControlLabel, Radio, RadioGroup, Typography, useMediaQuery } from "@mui/material";
// import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

export default function Content() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedOption, setSelectedOption] = useState("digital");

  useEffect(() => {
    setIsLoading(false);
  }, [isMobile]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    if (selectedOption === "digital") {
      window.location.href = "/solicitar/estudante";
    } else if (selectedOption === "digital-fisico") {
      window.location.href = "https://carteirademeiaentrada.com.br/novo-pedido";
    }
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "url('/bgs/bg-home-desktop.png') no-repeat center center/cover",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isMobile ? "auto" : "100vh",
        background: "url('/bgs/bg-home-desktop.png') no-repeat center center/cover",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: isMobile ? "center" : "space-between",
        padding: isMobile ? "20px" : "4% 10%",
        gap: 1,
      }}
    >
      {isMobile ? (
        <>
          <Box sx={{ flexDirection: "column", textAlign: "center", width: "100%" }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                color: "white",
                textAlign: "center",
                width: "100%",
              }}
            >
              Carteira de Estudante
            </Typography>

            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                mt: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Image
                src="/cie-digital.png"
                alt="Logo CIE"
                width={180}
                height={180}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                priority
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: 2.5,
                  fontSize: "0.75rem",
                  color: "white",
                  textAlign: "center",
                  lineHeight: 1.2,
                  width: "100%",
                  px: 1,
                }}
              >
                Carteira de Identificação Estudantil <b>Certificada</b> e padronizada Nacionalmente conforme Lei Federal nº 12.933/2013.
              </Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                mt: 2,
              }}
            >
              <Image
                src="/bgs/cie-2025-digital.png"
                alt="Carteirinha Digital"
                width={210}
                height={200}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                priority
              />
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ mb: 2, color: "white" }}
            >
              Selecione o tipo da sua carteirinha:
            </Typography>
            <RadioGroup
              row
              value={selectedOption}
              onChange={handleOptionChange}
              sx={{
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                  borderRadius: 3,
                  textAlign: "center",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "white",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <FormControlLabel
                  value="digital"
                  control={<Radio />}
                  label={
                    <Box
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <Image
                        src="/images/phone-icon.png"
                        alt="Carteira Digital"
                        width={50}
                        height={50}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                      <Typography
                        fontWeight="bold"
                        sx={{
                          fontSize: 14,
                          color: "#004e94",
                          mt: 1,
                        }}
                      >
                        Digital
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "#004e94",
                        }}
                      >
                        R$ 28,00
                      </Typography>
                    </Box>
                  }
                />
              </Box>

              <Box
                sx={{
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                  borderRadius: 3,
                  textAlign: "center",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "white",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <FormControlLabel
                  value="digital-fisico"
                  control={<Radio />}
                  label={
                    <Box
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <Image
                        src="/images/phone-card-icon.png"
                        alt="Carteira Digital + Físico"
                        width={98}
                        height={50}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                      <Typography
                        fontWeight="bold"
                        sx={{
                          fontSize: 14,
                          color: "#004e94",
                          mt: 1,
                        }}
                      >
                        Digital + Físico
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "#004e94",
                        }}
                      >
                        R$ 69,00
                      </Typography>
                    </Box>
                  }
                />
              </Box>
            </RadioGroup>
          </Box>

          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              mt: 2,
            }}
          >
            <Button
              onClick={handleButtonClick}
              variant="contained"
              size="large"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontSize: 18,
                // py: 1.5,
                px: 4,
                backgroundImage: "linear-gradient(90deg, #ff9f32 0%, #fb8500 100%)",
                color: "white",
                borderRadius: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  backgroundImage: "linear-gradient(90deg, #ca7e27 0%, #d77300 100%)",
                  transform: "translateY(-5px)",
                },
              }}
            >
              Peça a sua aqui!
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              mt: 1
            }}
          >
            <Typography
              sx={{
                fontSize: "0.85rem",
                color: "white",
                lineHeight: 1.2,
              }}
            >
              Válido em todo território nacional.
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              maxWidth: "45%",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                color: "white",
                mb: 2,
              }}
            >
              Carteira de Estudante
            </Typography>

            <Typography
              sx={{
                color: "white",
                fontSize: "1rem",
                lineHeight: 1.4,
                mb: 3,
              }}
            >
              Carteira de Identificação Estudantil <b>Certificada</b> e padronizada Nacionalmente conforme Lei Federal nº 12.933/2013.
            </Typography>

            <Box
              sx={{
                width: "100%",
                textAlign: "left",
                mb: 3
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ mb: 2, color: "white" }}
              >
                Selecione o tipo da sua carteirinha:
              </Typography>
              <RadioGroup
                row
                value={selectedOption}
                onChange={handleOptionChange}
                sx={{
                  justifyContent: "left",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 2,
                    borderRadius: 3,
                    textAlign: "center",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "white",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <FormControlLabel
                    value="digital"
                    control={<Radio />}
                    label={
                      <Box
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        <Image
                          src="/images/phone-icon.png"
                          alt="Carteira Digital"
                          width={50}
                          height={50}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                        <Typography
                          fontWeight="bold"
                          sx={{
                            fontSize: 14,
                            color: "#004e94",
                            mt: 1,
                          }}
                        >
                          Digital
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.85rem",
                            color: "#004e94",
                          }}
                        >
                          R$ 28,00
                        </Typography>
                      </Box>
                    }
                  />
                </Box>

                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 2,
                    borderRadius: 3,
                    textAlign: "center",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "white",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <FormControlLabel
                    value="digital-fisico"
                    control={<Radio />}
                    label={
                      <Box
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        <Image
                          src="/images/phone-card-icon.png"
                          alt="Carteira Digital + Físico"
                          width={98}
                          height={50}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                        <Typography
                          fontWeight="bold"
                          sx={{
                            fontSize: 14,
                            color: "#004e94",
                            mt: 1,
                          }}
                        >
                          Digital + Físico
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.85rem",
                            color: "#004e94",
                          }}
                        >
                          R$ 69,00
                        </Typography>
                      </Box>
                    }
                  />
                </Box>
              </RadioGroup>
            </Box>

            <Button
              onClick={handleButtonClick}
              variant="contained"
              size="large"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontSize: 18,
                py: 1.5,
                px: 4,
                backgroundImage: "linear-gradient(90deg, #ff9f32 0%, #fb8500 100%)",
                color: "white",
                borderRadius: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  backgroundImage: "linear-gradient(90deg, #ca7e27 0%, #d77300 100%)",
                  transform: "translateY(-5px)",
                },
              }}
            >
              Peça a sua aqui!
            </Button>

            <Box
              sx={{
                width: "100%",
                mt: 4,
                display: "flex",
                justifyContent: "left",
              }}
            >
              <Image
                src="/cie-digital.png"
                alt="Logo CIE"
                width={180}
                height={180}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                priority
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  mb: 1,
                }}
              >
                Válido em todo território nacional.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "40%",
            }}
          >
            <Image
              src="/bgs/cie-2025-digital.png"
              alt="Carteirinha Digital"
              width={300}
              height={400}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              priority
            />
          </Box>
        </>
      )}
    </Box>
  );
}
