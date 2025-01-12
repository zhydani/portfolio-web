'use client';

import { Box } from "@mui/material";
import Content from "./components/Content";
import { BreadcrumbsSection } from "@/components/ui";

export default function ServicosPage() {
  return (
    <Box>
        <BreadcrumbsSection pageName="Serviços" />
        <Content />
    </Box>
  );
}
