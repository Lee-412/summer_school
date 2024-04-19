'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "@mui/material/Button/Button";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slider, { Settings } from "react-slick";
import "../style/slider.css"
import { Container } from "@mui/material";
import TeacherCard from "../teacher/teacher.component";

const MainSlider = () => {

    const NextArrow = (props: any) => {
        return (
            <Button color="inherit" variant="contained"
                onClick={props.onClick}
                sx={{
                    position: "absolute",
                    right: 0,
                    top: "40%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35,
                }}
            >
                <ChevronRightIcon />
            </Button>
        )
    }

    const PrevArrow = (props: any) => {
        return (
            <Button color="inherit" variant="contained"
                onClick={props.onClick}
                sx={{
                    position: "absolute",
                    top: "40%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35,
                }}
            >
                <ChevronLeftIcon />
            </Button>
        )
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    //box === div

    return (
        <>


            <h1>
                <span>Meet </span>
                <span>Our </span>
                <span style={{
                    color: "#ff9a23"
                }}>Teacher</span>

            </h1>
            <Slider {...settings}>
                <div className="slideContent">
                    <Container>
                        <div className="content" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYIASQZfume3eavWfsVYoHqVUrk1tbNw9mL4KLXGW8g&s" alt=""
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: "50px",
                                    marginLeft: "0px",
                                    marginRight: "0px",
                                    backgroundColor: "red"
                                }}
                            />
                            <p>Nhà khoa học</p>
                            <p>Công việc</p>
                            <p>Thông tin dài </p>
                        </div>

                    </Container>
                </div>

                <div className="slideContent">
                    <Container>
                        <div className="content" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYIASQZfume3eavWfsVYoHqVUrk1tbNw9mL4KLXGW8g&s" alt=""
                                style={{

                                    objectFit: 'cover',
                                    borderRadius: "50px",
                                    marginLeft: "20px"
                                }}
                            />
                            <p>Nhà khoa học</p>
                            <p>Công việc</p>
                            <p>Thông tin dài </p>
                        </div>

                    </Container>
                </div>
                <div className="slideContent">
                    <Container>
                        <div className="content">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYIASQZfume3eavWfsVYoHqVUrk1tbNw9mL4KLXGW8g&s" alt=""
                                style={{

                                    objectFit: 'cover',
                                    borderRadius: "50px",
                                    marginLeft: "20px"
                                }}
                            />
                            <p>Nhà khoa học</p>
                            <p>Công việc</p>
                            <p>Thông tin dài </p>
                        </div>

                    </Container>
                </div>
                <div className="slideContent">
                    <Container>
                        <div className="content" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYIASQZfume3eavWfsVYoHqVUrk1tbNw9mL4KLXGW8g&s" alt=""
                                style={{

                                    objectFit: 'cover',
                                    borderRadius: "50px",
                                    marginLeft: "20px"
                                }}
                            />
                            <p>Nhà khoa học</p>
                            <p>Công việc</p>
                            <p>Thông tin dài </p>
                        </div>

                    </Container>
                </div>
                <div className="slideContent">
                    <Container>
                        <div className="content" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYIASQZfume3eavWfsVYoHqVUrk1tbNw9mL4KLXGW8g&s" alt=""
                                style={{

                                    objectFit: 'cover',
                                    borderRadius: "50px",
                                    marginLeft: "20px"
                                }}
                            />
                            <p>Nhà khoa học</p>
                            <p>Công việc</p>
                            <p>Thông tin dài </p>
                        </div>

                    </Container>
                </div>
                <div className="slideContent">
                    <Container>
                        <div className="content" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYIASQZfume3eavWfsVYoHqVUrk1tbNw9mL4KLXGW8g&s" alt=""
                                style={{

                                    objectFit: 'cover',
                                    borderRadius: "50px",
                                    marginLeft: "20px"
                                }}
                            />
                            <p>Nhà khoa học</p>
                            <p>Công việc</p>
                            <p>Thông tin dài </p>
                        </div>

                    </Container>
                </div>

                {/* <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard /> */}

            </Slider >


        </>
    );
}


export default MainSlider;