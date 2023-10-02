import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

const MainLayout = ({ children }: any) => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;