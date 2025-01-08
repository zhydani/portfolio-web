'use client'

import { ThemeProvider } from '@mui/material'
import React from 'react'

import { theme } from '@/config/theme'
import { AppCssBaseline } from './AppCssBaseline'

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <AppCssBaseline />
      {children}
    </ThemeProvider>
  )
}
