import { Typography } from '@mui/material'
import React from 'react'

function Dummy({ id, name, description, count }) {
  return (
    <>
      <Typography sx={{ mt: 1 }} variant="body2">ID: {id}</Typography>
      <Typography sx={{ mt: 1 }} variant="body2">Nom: {name}</Typography>
      <Typography sx={{ mt: 1 }} variant="body2">Description: {description}</Typography>
      <Typography sx={{ mt: 1 }} variant="body2">Count: {count}</Typography>
    </>
  )
}

export default Dummy
