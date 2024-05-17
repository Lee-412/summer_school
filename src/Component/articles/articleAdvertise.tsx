'use client'

import { Avatar, Box, Button, Container, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const listData = [
    {
        id: 1,
        title: 'bai bao 1',
        user: 'Lee 1 ',
        data: 'caigiday'
    },
    {
        id: 2,
        title: 'bai bao 2',
        user: 'Lee 2 ',
        data: 'caigiday 2'
    },
    {
        id: 3,
        title: 'bai bao 3',
        user: 'Lee  3 ',
        data: 'caigiday 3'
    },
    {
        id: 4,
        title: 'bai bao 4',
        user: 'Lee 4 ',
        data: 'caigiday 4'
    },
    {
        id: 5,
        title: 'bai bao 5',
        user: 'Lee 5 ',
        data: 'caigiday 5'
    },
    {
        id: 6,
        title: 'bai bao 6',
        user: 'Lee 6 ',
        data: 'caigiday 5'
    },

]


const ArticleAdvertise = () => {

    const router = useRouter()
    const handleClickRegister = () => {
        router.push('/registerCourses');
    }
    const handleOnclick = () => {
        alert("khong co gi")
    }
    return (
        <Box sx={{
            display: "flex",
            backgroundColor: "#F1F0E4"
        }}>

            <Box sx={{
                width: "30%",
                mt: "5%",
                mr: "3%",
                ml: "5%",
                mb: "0px"
            }}>

                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontSize: "40px",
                        color: "#156782"
                    }}>
                    Bài báo nổi bật
                </Typography>
            </Box>

            <Box sx={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                ml: "3%",
                mt: "3%",
                mb: "0px"

            }} >
                {
                    listData.map(data => {
                        return (
                            <>
                                <Box
                                    key={data.id}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        cursor: "pointer",
                                    }}
                                    component="div"
                                    onClick={handleOnclick}

                                >
                                    <Typography variant="h6" sx={{
                                        margin: "3%",
                                        width: "15%",
                                        color: "#F1F0E4",
                                        backgroundColor: "#156782",
                                        borderRadius: "15px",
                                        display: "flex",
                                        alignContent: "center",
                                        alignItems: "center",
                                        justifyContent: "center",

                                    }}   >
                                        {data.user}
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        ml: "3%",
                                        mt: "3%",
                                        mr: "3%",
                                        color: "#156782"

                                    }}>
                                        {data.title}
                                    </Typography> <br />

                                </Box>
                                <Divider variant="inset"
                                    sx={{
                                        bgcolor: "orange",
                                        ml: "0px",
                                        width: "80%"
                                    }}
                                />
                            </>)
                    })}
                <Button
                    onClick={handleClickRegister}

                    sx={{
                        ml: "5%",
                        bgcolor: "orange",
                        height: "fit-content",
                        width: "fit-content",
                        padding: "10px",
                        borderRadius: "10px",
                        mt: "3%",
                        mb: "5%",
                        "&:hover": {
                            bgcolor: "#ff9a23",
                            color: "white",
                            opacity: "0,7"
                        }
                    }}
                >
                    Learn More
                </Button>
            </Box>

        </Box >
    )
}
export default ArticleAdvertise;