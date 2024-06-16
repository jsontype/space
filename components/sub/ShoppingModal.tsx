import React from "react";
import { Modal, Box, Typography } from "@mui/material";

interface ShippingModalProps {
  open: boolean;
  handleClose: () => void;
}

const ShippingModal: React.FC<ShippingModalProps> = ({ open, handleClose }) => {
  const iframeUrl = "https://docs.google.com/spreadsheets/d/1K6zeowhIPLv2ZU4sfpQqwWXwOCbIJ1Z3/edit?gid=214401444#gid=214401444";

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: "80%",
          height: "80%",
          bgcolor: "white",
          p: 4,
          mx: "auto",
          mt: "10%",
          overflow: "auto",
        }}
      >
        <Typography variant="h6">Shipping Modal</Typography>
        <iframe
          title="Shipping Modal"
          src={iframeUrl}
          width="100%"
          height="100%"
        ></iframe>
      </Box>
    </Modal>
  );
};

export default ShippingModal;