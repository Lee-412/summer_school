'use client'

import { Button } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useRouter } from "next/navigation";
const MainAdvertise = () => {
    const router = useRouter()
    const handleClickRegister = () => {
        router.push('/registerCourses');
    }
    return (
        <>
            <div
                style={{
                    backgroundColor: "#156782",
                    width: '100%',
                    maxHeight: '900px',
                    display: "flex"
                }}
            >
                <div className="lefDivMain" style={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    alignContent: "flex-start",
                    // alignItems: "center",
                    color: "white",
                    marginLeft: "120px",
                    marginRight: "0px"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",

                        marginTop: "100px",
                        marginBottom: "0px"
                    }}>
                        <AcUnitIcon sx={{ color: '#ff9a23' }}></AcUnitIcon>
                        University Of Technology
                    </div>
                    <span style={{
                        fontWeight: "bold",
                        fontSize: "60px",


                    }} >2024 World</span>
                    <span style={{
                        color: "orange",
                        fontWeight: "bold",
                        fontSize: "50px",

                    }} >School Summer</span>
                    <span style={{
                        color: "White",
                        fontWeight: "bold",
                        fontSize: "50px",


                    }} >Generative AI </span>
                    <span style={{
                        color: "White",
                        fontWeight: "bold",
                        fontSize: "20px",

                    }} >July 1, 2024 | University of Technology</span>
                    <Button
                        onClick={handleClickRegister}
                        sx={{
                            backgroundColor: '#ff9a23',
                            width: "90px",
                            marginTop: "20px",
                            marginBottom: "120px",
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

                <div className="rightDivMain" style={{
                    width: "50%",

                    display: "flex",

                    alignContent: "center",
                    alignItems: "center"
                }}>
                    <img src="https://media.licdn.com/dms/image/D5612AQEJvHTUhbWx5g/article-inline_image-shrink_1000_1488/0/1694417637183?e=1718841600&v=beta&t=W5Ia0VzzRZxWwzxEQHyazjqv56bH0Vw4oPl4AjcIm8g" alt="" style={{
                        width: "80%",
                        height: "73%",
                        objectFit: 'cover',
                        borderRadius: "50px",
                        marginLeft: "20px"
                    }} />
                </div>

            </div >
        </>
    )
}
export default MainAdvertise;