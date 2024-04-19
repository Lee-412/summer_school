import AboutAdvertise from "@/Component/advertise/aboutadvertise";
import MainAdvertise from "@/Component/advertise/mainadvertise";
import BasicSpeedDial from "@/Component/dial/speed.dial";
import MainSlider from "@/Component/mainslider/mainslider";
import TeacherCard from "@/Component/teacher/teacher.component";
import { Container } from "@mui/material";

export default function HomePage() {


    return (
        <>
            <MainAdvertise />
            <AboutAdvertise />
            <MainSlider />
        </>
    );
}
