import React from 'react';
import { Button } from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';


const AccessibleButton = ({ isAccessibleMode, toggleTheme }) => {
  return (
    <Button
      className="accButton"  
      variant="contained"
      color="primary"
      startIcon={<AccessibilityIcon />}
      onClick={toggleTheme}
    >
      {isAccessibleMode ? "Normal" : "Accessible"}
    </Button>
  );
};

export default AccessibleButton;