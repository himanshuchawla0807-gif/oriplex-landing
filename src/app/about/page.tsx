import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
            <Navbar />
            {/* Add padding to account for fixed navbar */}
            <div style={{ paddingTop: "80px" }}>
                <Team />
            </div>
            <Footer />
        </main>
    );
}
