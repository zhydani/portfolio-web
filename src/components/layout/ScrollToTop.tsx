'use client'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Fab } from '@mui/material'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <Fab
      sx={{
        bgcolor: '#fb8500',
        color: 'white',
        '&:hover': {
          bgcolor: '#d77300 ',
        },
        position: 'fixed',
        bottom: 20,
        right: 20,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'visibility 0.3s',
        displayPrint: 'none',
      }}
      size="small"
      onClick={scrollToTop}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  )
}
