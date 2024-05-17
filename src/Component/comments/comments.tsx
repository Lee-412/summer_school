'use client'

import { Button } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useRouter } from "next/navigation";
import RegisterModal from "../modalRegister/register";
import { useState } from "react";
import OpinionModal from "../modalOpinion/opinion";
const CommentIncome = () => {
    const router = useRouter()

    const [isOpinionModalOpen, setIsOpinionModalOpen] = useState(false);

    const handleClickRegister = () => {
        // router.push('/registerCourses');
        setIsOpinionModalOpen(true);
    }
    return (

        <div
            style={{
                backgroundColor: "#156782",
                width: '100%',
                maxHeight: '900px',
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div className="rightDivMain" style={{
                width: "100%",
                height: "50%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
            }}>
                <img src="https://www.shutterstock.com/image-photo/diverse-company-employees-having-online-600nw-2021639273.jpg" alt="vl ko co gi à" style={{

                    objectFit: 'cover',
                    borderRadius: "20%",
                    margin: "3%",
                    marginBottom: "0px"

                }} />

            </div>
            <div className="lefDivMain" style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "flex-start",
                alignItems: "center",
                color: "white",

                marginRight: "0px"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",

                    marginTop: "20px",
                    marginBottom: "0px"
                }}>
                    <AcUnitIcon sx={{ color: '#ff9a23' }}></AcUnitIcon>
                    University Of Technology
                </div>
                <span style={{
                    fontWeight: "bold",
                    fontSize: "30px",


                }} >2024 World School Summer Generative AI</span>

                <span style={{
                    color: "White",
                    fontWeight: "bold",
                    fontSize: "20px",

                }} >Chia sẻ với chúng tôi kiến thức của bạn, để cùng người khác theo đuổi đam mê</span>
                <Button
                    onClick={handleClickRegister}
                    sx={{
                        backgroundColor: '#ff9a23',
                        width: "90px",
                        marginTop: "20px",
                        marginBottom: "30px",
                        borderRadius: "10px",
                        ':hover': {
                            backgroundColor: '#ff9a23',
                            color: "white",
                            opacity: "0.7"
                        }
                    }}>
                    Register
                </Button>
            </div>
            <OpinionModal
                // access_token={access_token}
                // getData={getData}
                isOpinionModalOpen={isOpinionModalOpen}
                setIsOpinionModalOpen={setIsOpinionModalOpen}
            />
        </div >



    )
}
export default CommentIncome;