'use client'

import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const ArticleAdvertise = () => {

    const router = useRouter()
    const handleClickRegister = () => {
        router.push('/registerCourses');
    }
    return (
        <>
            <Box sx={{
                height: "50%"
            }}>
                <div className="lefDiv">
                    <img src="https://csc.edu.vn/data/images/tin-tuc/data-science-machine-learning/tin-tuc/generative-ai/generative-ai-khtn.jpg" alt="" style={{
                        width: "90%",
                        height: "95%",
                        objectFit: 'cover',
                        borderRadius: "50px",

                    }} />
                </div>
                <div className="rightDiv" >

                    <span
                        style={{
                            fontWeight: "bold",
                            fontSize: "60px",

                        }}>
                        Danh sách bài bảo nổi bật
                    </span>
                    <p style={{
                        fontSize: "20px",
                        marginRight: "50px"
                    }}>
                        Danh sách bài bảo nổi bật
                    </p>
                    <Button
                        onClick={handleClickRegister}
                        className="buttonAbout"
                    >
                        Learn More
                    </Button>
                </div>
            </Box >
        </>
    )
}
export default ArticleAdvertise;