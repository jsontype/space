import React from 'react'
import { Modal, Box, Typography } from '@mui/material'

interface ShippingModalProps {
  open: boolean
  handleClose: () => void
}

const ShippingModal: React.FC<ShippingModalProps> = ({ open, handleClose }) => {
  const iframeUrl = '#'

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="w-[80%] h-[80%] bg-white p-[16px] mx-auto mt-[10%] overflow-auto">
        <Typography variant="h6">Shipping Modal</Typography>
        <iframe title="Shipping Modal" src={iframeUrl} width="100%" height="100%"></iframe>
      </Box>
    </Modal>
  )
}

export default ShippingModal
