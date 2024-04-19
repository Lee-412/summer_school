'use client'

import { Button } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useRouter } from "next/navigation";
import '../style/aboutadvertise.css'
const AboutAdvertise = () => {

    const router = useRouter()
    const handleClickRegister = () => {
        router.push('/registerCourses');
    }
    return (
        <>
            <div className="divContainer">
                <div className="lefDiv">
                    <img src="https://csc.edu.vn/data/images/tin-tuc/data-science-machine-learning/tin-tuc/generative-ai/generative-ai-khtn.jpg" alt="" style={{
                        width: "90%",
                        height: "73%",
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
                        Thông tin
                    </span>
                    <p style={{
                        fontSize: "20px",
                        marginRight: "50px"
                    }}>
                        Trong này là thông tin về cái môn học với thông tin về cách triển khai, ít thôi
                    </p>
                    <Button
                        onClick={handleClickRegister}
                        className="buttonAbout"
                    >
                        Learn More
                    </Button>
                </div>
            </div >
        </>
    )
}
export default AboutAdvertise;