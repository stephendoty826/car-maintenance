import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import BuildIcon from '@mui/icons-material/Build';
import DeleteIcon from '@mui/icons-material/Delete';

const MaintenanceItem = ({maintenanceItem}) => {
  return (
    <ListItem
      sx={{width: "100%", maxWidth: "350px"}}
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon style={{fill: "rgb(226, 226, 226)"}}/>
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: '#3b3b3b' }}>
          <BuildIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={maintenanceItem.name}
        secondary={null}
      />
    </ListItem>
  )
}

export default MaintenanceItem