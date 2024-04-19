'use client'
import { Container } from "@mui/material";
import "../style/slider.css"
const TeacherCard = () => {
    return (

        <div className="slideContent">
            <Container>
                <div className="content" >
                    <img src="https://geekflare.com/cdn-cgi/image/width=800,height=420,fit=crop,quality=90,gravity=auto,sharpen=1,metadata=none,format=auto,onerror=redirect/wp-content/uploads/2023/06/AI-avatar.jpg" alt=""
                        style={{
                            objectFit: 'cover',
                            width: "70%",
                            height: "15em",
                            borderRadius: "30px",
                            marginLeft: "20px",
                            marginRight: "20px",
                            marginTop: "30px",
                            backgroundColor: "red"
                        }}
                    />
                    <p className="textInfor name">Khalil Dawoud</p>
                    <p className="textInfor"> Công việc</p>
                    <p className="textInfor"> Thông tin dài </p>
                </div>

            </Container>
        </div>

    )
}
export default TeacherCard;