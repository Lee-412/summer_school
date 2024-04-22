'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button, Container, InputBase, Link, Typography, styled } from '@mui/material';
import '../style/app.css'
import { useRouter } from 'next/navigation';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
export default function AppHeader() {
    const router = useRouter()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // handle close menu User
    const handleClose = () => {
        setAnchorEl(null);
    };

    // handle Click
    const handleClickProfile = () => {
        router.push('/profilepage');

    }
    const handleClickMyLearning = () => {
        router.push('/coursespage');

    }
    const handleClickSetting = () => {
        router.push('/');

    }
    const handleClickLogout = () => {
        router.push('/');

    }

    {/* handle count notification */ }
    function notificationsLabel(count: number) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }
    return (
        <React.Fragment>
            <div
                style={{
                    display: "flex",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    padding: "1%",
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    alignItems: "center",
                }}>
                <Button
                    onClick={() => {
                        router.push(
                            '/'
                        )
                    }}
                    sx={{
                        marginLeft: "3px",
                        marginRight: "3%",
                        textWrap: 'nowrap',
                        color: "black   "
                    }}
                >Đây là logo</Button>
                <Box
                    sx={{
                        border: "1px solid black",
                        width: '50%',
                        borderRadius: "30px",
                        marginRight: "16%"
                    }}>
                    <IconButton type="button" sx={{}} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{
                            width: '90%',
                        }}
                        placeholder="Search for anything"
                        inputProps={{ 'aria-label': 'Search for anything' }}
                    />

                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    textTransform: 'none'
                }}>
                    <Button sx={{
                        minWidth: 80,
                        // backgroundColor: "#427AA1",
                        color: "black",
                        textTransform: 'none',
                        ':hover': {
                            color: "#5d65d5",
                            backgroundColor: "white"
                        },

                    }}>Student</Button>
                    <Button
                        onClick={handleClickProfile}
                        sx={{
                            minWidth: 80,
                            // backgroundColor: "#427AA1",
                            color: "black",
                            textTransform: 'none',
                            ':hover': {
                                color: "#5d65d5",
                                backgroundColor: "white"
                            },
                        }}
                    >Profile</Button>
                    <Button
                        onClick={handleClickMyLearning}
                        sx={{
                            minWidth: 80,
                            // backgroundColor: "#427AA1",
                            color: "black",
                            textTransform: 'none',
                            ':hover': {
                                color: "#5d65d5",
                                backgroundColor: "white"
                            },

                        }}>MyLearning
                    </Button>
                    {/* count notification */}
                    <IconButton aria-label={notificationsLabel(100)}>
                        <Badge badgeContent={100} color="secondary">
                            <NotificationsNoneIcon />
                        </Badge>
                    </IconButton>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32, backgroundColor: "#00637C" }}>M</Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}

                    elevation={1}
                    sx={{
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    }}
                    // }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClickProfile}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClickMyLearning}>
                        <Avatar /> My Learning
                    </MenuItem>

                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClickSetting}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleClickLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </div>
        </React.Fragment >
    );
}