import React from 'react';
import { Typography, Switch, FormControlLabel } from '@mui/material';

const Settings = () => {
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Settings
        </Typography>
        <FormControlLabel
          control={<Switch />}
          label="Enable notifications"
        />
        <FormControlLabel
          control={<Switch />}
          label="Dark Mode"
        />
      </div>
    );
  };
  
  export default Settings;