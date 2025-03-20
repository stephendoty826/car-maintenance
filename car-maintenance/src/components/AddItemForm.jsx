import React, { useState } from "react"
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddItemForm = () => {

  const [name, setName] = useState("")
  const [dueDate, setDueDate] = useState("")

  const handleAddItem = () => {
    
  }

  return (
    <>
      <Button variant="contained" sx={{ mt: 2, mb: 2 }}>Add Maintenance Item</Button>
      <Box>
        <TextField
          id="filled-basic"
          label="Maintenance Item"
          variant="filled"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          sx={{
            mt: 1,
            mb: 1,
            "& .MuiInputLabel-root": {
              color: "gray", // Change label color
            },
            "& .MuiInputBase-input": {
              color: "rgb(226, 226, 226)", // Change text color
            },
          }}
        />
        <TextField
          id="filled-basic"
          label="Due Date"
          variant="filled"
          value={dueDate}
          onChange={(e) => {setDueDate(e.target.value)}}
          sx={{
            mt: 1,
            mb: 1,
            ml: 2,
            "& .MuiInputLabel-root": {
              color: "gray", // Change label color
            },
            "& .MuiInputBase-input": {
              color: "rgb(226, 226, 226)", // Change text color
            },
          }}
        />
      </Box>
    </>
  );
};

export default AddItemForm;
