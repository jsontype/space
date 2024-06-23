import React from 'react'
import { Modal, Box, Typography } from '@mui/material'

interface SkillSheetModalProps {
  open: boolean
  handleClose: () => void
}

const SkillSheetModal: React.FC<SkillSheetModalProps> = ({ open, handleClose }) => {
  const iframeUrl =
    'https://docs.google.com/spreadsheets/d/1K6zeowhIPLv2ZU4sfpQqwWXwOCbIJ1Z3/edit?gid=214401444#gid=214401444'

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
        <Typography variant="h6">SkillSheet Modal</Typography>
        <iframe title="SkillSheet Modal" src={iframeUrl} width="100%" height="100%"></iframe>
      </Box>
    </Modal>
  )
}

export default SkillSheetModal
