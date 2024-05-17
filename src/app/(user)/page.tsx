import ScrollToTop from "@/Component/Scroll/scroll.to.top";
import AboutAdvertise from "@/Component/advertise/aboutadvertise";
import MainAdvertise from "@/Component/advertise/mainadvertise";
import ArticleAdvertise from "@/Component/articles/articleAdvertise";
import CommentIncome from "@/Component/comments/comments";
import MainSlider from "@/Component/mainslider/mainslider";

export default function HomePage() {


    return (
        <>

            <MainAdvertise />
            <AboutAdvertise />
            <MainSlider />
            <ArticleAdvertise />
            <CommentIncome />
            <ScrollToTop />
        </>
    );
}
