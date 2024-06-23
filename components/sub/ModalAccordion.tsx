import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { SxProps, Theme } from '@mui/material/styles'
import StoryModal from './StoryModal'

interface ModalAccordionProps {
  open: boolean
  handleClose: () => void
}

const ModalAccordion: React.FC<ModalAccordionProps> = ({ open, handleClose }) => {
  const [storyModalOpen, setStoryModalOpen] = useState(false)

  const handleOpenStoryModal = () => {
    setStoryModalOpen(true)
  }

  const handleCloseStoryModal = () => {
    setStoryModalOpen(false)
  }

  const positionStyle: SxProps<Theme> = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const boxStyle: SxProps<Theme> = {
    width: '100%',
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  const buttonContainerStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'flex-end',
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={positionStyle}>
          <Box sx={boxStyle}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ bgcolor: 'black', color: 'white' }}
              >
                Q.自己紹介
              </AccordionSummary>
              <AccordionDetails>
                こんにちは!Webプログラマーの「Azuma」です。
                <br />
                韓国から来ました。東京で開発者として働いています。
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ bgcolor: 'black', color: 'white' }}
              >
                Q.なぜプログラマーですか？
              </AccordionSummary>
              <AccordionDetails>
                私は幼い頃からプログラマーになりたいという夢がありました。
                <br />
                また、海外の生活にも憧れを抱いていました。
                <br />
                自分がやりたいことを追求しながらも、より社会に貢献し、
                <br />
                つまり人間の生活を便利にするプログラムを作ろうと思っております。
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ bgcolor: 'black', color: 'white' }}
              >
                Q.強みは何ですか？
              </AccordionSummary>
              <AccordionDetails>
                私の強みは次のとおりです。 <br />
                ・コーディング:EC、B2C、B2B Saasソリューションなど多様な分野のプロジェクト経験
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ bgcolor: 'black', color: 'white' }}
                onClick={handleOpenStoryModal}
              >
                プログラマーになるまでのストーリー
              </AccordionSummary>
            </Accordion>
            <Box sx={buttonContainerStyle}>
              <Button onClick={handleClose} sx={{ mt: 2 }}>
                CLOSE
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      <StoryModal open={storyModalOpen} handleClose={handleCloseStoryModal} />
    </div>
  )
}

export default ModalAccordion
