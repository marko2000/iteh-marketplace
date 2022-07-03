import { Avatar, Menu, MenuItem, IconButton, ListItemIcon } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useState } from "react";

const Profile = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = e => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <IconButton onClick={handleClick} size="small">
                <Avatar sx={{width: 32, height: 32}}>M</Avatar>
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose} transformOrigin={{horizontal: 'right', vertical: 'bottom'}} anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                <MenuItem>
                    <ListItemIcon>
                        <Logout />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Profile;