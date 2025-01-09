import { Box } from "@mui/material";
import React from "react";
import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";

export default function Content() {

  return (
    <Box>
      <IntroSection />
      <AboutSection />
    </Box>
  );
}
