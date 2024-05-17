import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Dialog, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';


import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { DriveFolderUpload } from '@mui/icons-material';

interface dataProps_RegisterModal {
    // access_token: string;
    // getData: any;
    isOpinionModalOpen: boolean;
    setIsOpinionModalOpen: (v: boolean) => void;
}

export default function OpinionModal(props: dataProps_RegisterModal) {
    const {
        // access_token, getData,
        isOpinionModalOpen, setIsOpinionModalOpen } = props;
    const [showPassword, setShowPassword] = React.useState(false);
    const handleOpen = () => setIsOpinionModalOpen(isOpinionModalOpen);
    const handleClose = () => setIsOpinionModalOpen(false);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dateTime, setDate] = useState('1/1/2024')
    const [role, setRole] = React.useState('');

    const handelCancelModal = () => {
        setIsOpinionModalOpen(false);
    }

    const handleSubmit = () => {
        // setIsErrorUsername(false);
        // setIsErrorPassword(false);
        // setErrorUsername("");
        // setErrorPassword("");
        // if (!username || !password) {

        //     if (!username) {
        //         setIsErrorUsername(true);
        //         setErrorUsername("Username is not empty.")

        //     }
        //     if (!password) {
        //         setIsErrorPassword(true);
        //         setErrorPassword("Password is not empty.")

        //     }
        //     return;
        // }
        // router.push('/');

        // Xử lý với api
        // const res = await signIn("credentials",
        //     {
        //         username: username,
        //         password: password,
        //         redirect: false
        //     }
        // )
        // if (!res?.error) {
        //     router.push('/')
        // }
        // else {
        //     console.log("check error", res)
        //     setResMessage(res.error);
        //     setOpenMessage(true);
        // }

    }

    return (
        <div>
            <Modal
                open={isOpinionModalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    // maxHeight: "100px"
                }}
            >
                <Grid
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                    }}
                >
                    <Grid item
                        xs={12}
                        sm={8}
                        md={5}
                        lg={4}
                        sx={{
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            width: "30%",
                            backgroundColor: "white",
                            borderRadius: "15px"
                        }}
                    >
                        <Container
                            component="main" maxWidth="xs"
                            sx={{
                                display: "inline-block",
                                marginBottom: "15px"
                            }}
                        >

                            <Box
                                sx={{

                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >

                                <Typography component="h1" variant="h5"
                                    sx={{

                                        backgroundColor: "white"
                                    }}
                                >
                                    Your Opinion
                                </Typography>

                                <Box >
                                    <Stack spacing={2} direction="row" sx={{ mb: 2 }}>
                                        <TextField
                                            type="text"
                                            variant='outlined'
                                            color='secondary'
                                            label="Tác giả"
                                            onChange={e => setName(e.target.value)}
                                            value={name}
                                            fullWidth
                                            required
                                            sx={{ mb: 2 }}

                                        />

                                        <TextField
                                            type="email"
                                            variant='outlined'
                                            color='secondary'
                                            label="Email"
                                            onChange={e => setEmail(e.target.value)}
                                            value={email}
                                            fullWidth
                                            required
                                            sx={{ mb: 2 }}
                                        />
                                    </Stack>
                                    <TextField
                                        type="date"
                                        color='secondary'
                                        label="Ngày viết bài"
                                        onChange={e => setDate(e.target.value)}
                                        value={dateTime}
                                        fullWidth
                                        required
                                        sx={{ mb: 2 }}
                                    />
                                    <TextField
                                        sx={{
                                            width: "100%",
                                            mb: 2
                                        }}
                                        variant="outlined"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        select
                                        label="Bạn là"
                                    >
                                        <MenuItem key={1} value="Sinh viên">
                                            Sinh viên
                                        </MenuItem>
                                        <MenuItem key={2} value="Học sinh">
                                            Học sinh
                                        </MenuItem>
                                        <MenuItem key={3} value="Người đi làm">
                                            Người đi làm
                                        </MenuItem>
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        sx={{
                                            width: "100%",

                                        }}
                                        id="outlined-textarea"
                                        label="Ý kiến của bạn ?"
                                        // placeholder="Placeholder"
                                        multiline
                                        maxRows={5}
                                    />
                                </Box>
                                <Typography>
                                    chỗ này t đang làm cái dropzone mà lười bỏ mẹ
                                </Typography>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}>


                                    <Button
                                        sx={{
                                            my: 1
                                        }}
                                        // type="reset"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        onClick={handelCancelModal}

                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        sx={{
                                            my: 1,
                                            marginLeft: "15px"
                                        }}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        onClick={handleSubmit}

                                    >
                                        Upload
                                    </Button>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>


                </Grid >

            </Modal>
        </div >
    );
}