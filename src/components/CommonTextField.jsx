import { TextField } from '@mui/material'

function CommonTextField({ label, type = 'text', value, onChange, disabled, inputProps, sx = {}, ...props }) {
  const defaultSx = {
    width: '100%',
    maxWidth: '300px',
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.6)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.8)',
      },
    },
    '& .MuiOutlinedInput-input': {
      textAlign: 'center',
      fontSize: '1.1rem',
    },
    '& .MuiOutlinedInput-input::placeholder': {
      color: 'rgba(255, 255, 255, 0.6)',
      opacity: 1,
    },
    '& .MuiInputBase-input:disabled': {
      WebkitTextFillColor: 'rgba(255, 255, 255, 0.7)',
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.8)',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white',
    },
  }

  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      inputProps={inputProps}
      sx={{ ...defaultSx, ...sx }}
      {...props}
    />
  )
}

export default CommonTextField

