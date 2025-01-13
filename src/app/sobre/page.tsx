'use client';

import { Box } from "@mui/material";
import Content from "./components/Content";
import { BreadcrumbsSection } from "@/components/ui";

export default function SobrePage() {
  return (
    <Box>
        <BreadcrumbsSection pageName="Sobre" />
        <Content />
    </Box>
  );
}
