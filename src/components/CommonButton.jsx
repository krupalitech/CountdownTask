import { Button } from '@mui/material'

function CommonButton({ 
  variant = 'contained', 
  size = 'large', 
  startIcon, 
  onClick, 
  disabled, 
  sx = {}, 
  buttonType = 'default',
  children, 
  ...props 
}) {
  const buttonStyles = {
    start: {
      background: '#4ade80',
      color: 'white',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      px: 3,
      '&:hover:not(:disabled)': {
        background: '#22c55e',
      },
      '&:disabled': {
        opacity: 0.5,
      },
    },
    pause: {
      background: '#facc15',
      color: '#000',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      px: 3,
      '&:hover:not(:disabled)': {
        background: '#eab308',
      },
      '&:disabled': {
        opacity: 0.5,
      },
    },
    resume: {
      background: '#3b82f6',
      color: 'white',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      px: 3,
      '&:hover:not(:disabled)': {
        background: '#2563eb',
      },
      '&:disabled': {
        opacity: 0.5,
      },
    },
    reset: {
      background: '#ef4444',
      color: 'white',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      px: 3,
      '&:hover': {
        background: '#dc2626',
      },
    },
    default: {
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      px: 3,
    },
  }

  const defaultSx = buttonStyles[buttonType] || buttonStyles.default

  return (
    <Button
      variant={variant}
      size={size}
      startIcon={startIcon}
      onClick={onClick}
      disabled={disabled}
      sx={{ ...defaultSx, ...sx }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default CommonButton

