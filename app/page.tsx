import Header from "@/component/layout/Header";
import HeroSection from "@/component/pages/sections/HeroSection";
import AboutSection from "@/component/pages/sections/AboutSection";
import FAQSection from "@/component/pages/sections/FAQSection";

export default function Home() {
    return (
        <main className={'min-h-screen w-screen'}>
            <Header/>
            <HeroSection/>
            <AboutSection/>
            <FAQSection/>
        </main>
    );
}
