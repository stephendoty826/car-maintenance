import React, { useState } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import MaintenanceItem from './MaintenanceItem';
import AddItemForm from './AddItemForm';

const MaintenanceList = () => {

  const carMaintenanceTasks = [
    {
      name: "Tire Rotation & Alignment",
      dueDate: "2025-06-15",
      priorityLevel: "Medium",
      frequency: "Every 6,000 miles",
      lastCompleted: "2024-12-15",
      notes: "Improves tire lifespan and handling."
    },
    {
      name: "Brake Inspection",
      dueDate: "2025-04-01",
      priorityLevel: "High",
      frequency: "Every 10,000 miles",
      lastCompleted: "2024-10-01",
      notes: "Check brake pads, rotors, and fluid levels."
    },
    {
      name: "Air Filter Replacement",
      dueDate: "2025-05-20",
      priorityLevel: "Low",
      frequency: "Every 12,000 miles",
      lastCompleted: "2024-11-20",
      notes: "Improves fuel efficiency and engine performance."
    },
    {
      name: "Belt & Hose Inspection",
      dueDate: "2025-07-10",
      priorityLevel: "Medium",
      frequency: "Every 15,000 miles",
      lastCompleted: "2024-07-10",
      notes: "Check for cracks, leaks, and wear to prevent breakdowns."
    }
  ];
  
  const [maintenanceItems, setMaintenanceItems] = useState(carMaintenanceTasks)

  const deleteItem = () => {

  }

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ flexGrow: 1, maxWidth: 752 }}
    >
    <Typography sx={{ mt: 4, mb: 1 }} variant="h4" component="div">
      Ford F-150 Maintenance
    </Typography>
    <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
      Next up: Oil Change
    </Typography>
    <AddItemForm />
    <List sx={{width: "100%", maxWidth: "350px"}}>
        {maintenanceItems.map((maintenanceItem, idx) => {
          return <MaintenanceItem maintenanceItem={maintenanceItem} idx={idx} key={idx}/>
        })}
    </List>
  </Box>
  )
}

export default MaintenanceList