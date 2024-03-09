import React from 'react';
import Paper from '@mui/material/Paper';

const PaperSt = ({ children }) => {
  const paperStyle = {
    height: 240,
    width: 400,
    backgroundColor: '#1A2335' ,
    margin:'2000 500'// Set the background color here
  };

  return <Paper style={paperStyle}>{children}</Paper>;
};

export default PaperSt;
