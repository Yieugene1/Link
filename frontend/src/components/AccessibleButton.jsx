import React from 'react';
import { Button } from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../store/themeSlice.js'

const AccessibleButton = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.value)
  return (
    <Button
      className="accButton"
      variant="contained"
      color="primary"
      startIcon={<AccessibilityIcon />}
      onClick={() => dispatch(changeTheme())}
    >
      {theme ? "Normal" : "Accessible"}
    </Button>
  );
};

export default AccessibleButton;
