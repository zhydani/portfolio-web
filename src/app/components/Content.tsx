import { Box } from "@mui/material";
import React from "react";
import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import WorksSection from "./WorksSection";

export default function Content() {

  return (
    <Box>
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
    </Box>
  );
}
