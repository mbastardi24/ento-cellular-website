import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About"
import { useEffect } from "react";

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <About />
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;