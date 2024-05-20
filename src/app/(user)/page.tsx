import ScrollToTop from "@/Component/Scroll/scroll.to.top";
import AboutAdvertise from "@/Component/advertise/aboutadvertise";
import MainAdvertise from "@/Component/advertise/mainadvertise";
import ArticleAdvertise from "@/Component/articles/articleAdvertise";
import CommentIncome from "@/Component/comments/comments";
import MainSlider from "@/Component/mainslider/mainslider";
import { Icourse, getCourseData } from "@/utils/courses";

export default async function HomePage() {

    let articles = await getCourseData()
    let article_prop: Array<Icourse> = articles.data
    return (
        <>

            <MainAdvertise />
            <AboutAdvertise />
            <MainSlider />
            <ArticleAdvertise props={article_prop}/>
            <CommentIncome />
            <ScrollToTop />
        </>
    );
}
