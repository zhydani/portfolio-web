'use client';

import { Box } from "@mui/material";
import Content from "./components/Content";
import { BreadcrumbsSection } from "@/components/ui";

export default function TrabalhosPage() {
  return (
    <Box>
        <BreadcrumbsSection pageName="Trabalhos" />
        <Content />
    </Box>
  );
}
