import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Benefits from "@/components/Benefits";
import { useEffect } from "react";

const BenefitsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Benefits />
            </main>
            <Footer />
        </div>
    );
};

export default BenefitsPage;