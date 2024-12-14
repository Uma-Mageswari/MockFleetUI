import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { footerColors } from "../theme/colors";
import { HeaderProps } from "./types";

const Footer: React.FC<HeaderProps> = ({ style }) => {

  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: footerColors.footer_backgroundColor,
        color: 'white',
        py: 1, // Padding in the Y-axis
        textAlign: 'center',
        boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.14)',
      }}
    >
      <Container>
        <Typography variant="body2">
          © 2024 My Website. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
