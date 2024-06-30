import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
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

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Box className="p-[10px] w-full bg-black-500 border border-[#000] shadow-[24px]">
            <Accordion>
              <div className="bg-black text-white">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-white" />}
                  aria-controls="panel1-content"
                  id="panel1-header">
                  Q.自己紹介
                </AccordionSummary>
              </div>
              <AccordionDetails>
                こんにちは！Webプログラマーの「Azuma」です。
                <br />
                韓国から来ました。東京で開発者として働いています。
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <div className="bg-black text-white">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-white" />}
                  aria-controls="panel1-content"
                  id="panel1-header">
                  Q.なぜプログラマーですか？
                </AccordionSummary>
              </div>
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
              <div className="bg-black text-white">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-white" />}
                  aria-controls="panel1-content"
                  id="panel1-header">
                  Q.強みは何ですか？
                </AccordionSummary>
              </div>
              <AccordionDetails>
                私の強みは次のとおりです。 <br />
                ・コーディング:EC、B2C、B2B Saasソリューションなど多様な分野のプロジェクト経験
              </AccordionDetails>
            </Accordion>
            <Box className="pt-[10px] justify-between flex">
              <Button onClick={handleOpenStoryModal}>詳しいストーリーを見る</Button>
              <Button onClick={handleClose}>CLOSE</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      <StoryModal open={storyModalOpen} handleClose={handleCloseStoryModal} />
    </div>
  )
}

export default ModalAccordion
