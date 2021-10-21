import { Button } from '@mui/material'
import React from 'react'

function NavigationButton({url, text, history}) {
  return (
    <>
      <Button contained="true" onClick={() => history.push(url)}>{text}</Button>
    </>
  )
}

export default NavigationButton
