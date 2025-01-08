'use client';

import { Fab } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter, usePathname } from 'next/navigation';

export function BackPage() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <Fab
      color="primary"
      size='medium'
      aria-label="voltar"
      variant="extended"
      onClick={() => router.back()}
      sx={{
        position: 'fixed',
        bottom: 26,
        left: -17,
        color: 'white',
        pl: 3.5
      }}
    >
      <ArrowBackIcon sx={{mr: 1}} />
      Voltar
    </Fab>
  );
}
