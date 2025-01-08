'use client';

import React from 'react';
import { Box } from '@mui/material';

import { Navbar } from './Navbar';

export function Header() {
  return (
    <Box component="header">
      <Navbar />
    </Box>
  );
}
