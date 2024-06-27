import React from 'react'
import { Modal, Box, Typography } from '@mui/material'

interface TodosModalProps {
  open: boolean
  handleClose: () => void
}

const TodosModal: React.FC<TodosModalProps> = ({ open, handleClose }) => {
  const iframeUrl = '#'

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: '80%',
          height: '80%',
          bgcolor: 'white',
          p: 4,
          mx: 'auto',
          mt: '10%',
          overflow: 'auto',
        }}
      >
        <Typography variant="h6">Todos Modal</Typography>
        <iframe title="Todos Modal" src={iframeUrl} width="100%" height="100%"></iframe>
      </Box>
    </Modal>
  )
}

export default TodosModal
