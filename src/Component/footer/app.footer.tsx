'use client'
import { Box, Button, Divider, IconButton, InputAdornment, List, ListItem, ListItemText, TextField, styled } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './appFooter.css'
import { AccountCircle } from '@mui/icons-material';
export default function AppFooter() {
    function generate(element: React.ReactElement) {
        return [0, 1, 2].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    // const Demo = styled('div')(({ theme }) => ({
    //     backgroundColor: theme.palette.background.paper,
    // }));
    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);

    const handlePhoneNumberChange = () => {

    }
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'White',
                padding: '1rem',
                textAlign: 'center',
                marginTop: '10px'
            }}
        >
            <div className='containerFooter'>
                <div className='leftDivFooter'
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        color: "#13072e"
                    }}>
                    <div style={{
                        display: "flex",
                        margin: "3px",
                        color: "#13072e",
                        fontWeight: "bold"
                    }}>
                        <AcUnitIcon sx={{ color: '#ff9a23', marginRight: "3px" }}></AcUnitIcon>
                        <span>university of technology</span>
                    </div>
                    <span>Stay in the loop and sign up for the Wardiere newsletter:</span>
                    <div style={{
                        display: "flex",
                        margin: "3px"

                    }}>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="phoneNumber"
                            name="phoneNumber"
                            autoComplete="phoneNumber"
                            autoFocus
                            onChange={handlePhoneNumberChange}
                            placeholder="Enter your email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="end">
                                        <ArrowForwardIcon />
                                    </InputAdornment>
                                ),
                                disableUnderline: true, // Remove the border
                            }}
                        />



                    </div>
                </div>
                <div className='rightDivFooter'>
                    <div>
                        <p className='titleList'>List Header</p>
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </div>
                    <div>
                        <p className='titleList'>List Header</p>
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </div>
                    <div>
                        <p className='titleList'>List Header</p>
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </div>
                </div>
            </div>
            <Divider></Divider>
            <div
                className='footerCopyright'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                <p>Team & Conditions</p>
            </div>
        </Box>
    );

}