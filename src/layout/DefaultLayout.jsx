import NavigationBar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <div className="flex flex-col h-screen bg-[#090a0b] text-white overflow-x-hidden">
            <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#090a0b] shadow-lg">
                <NavigationBar />
            </header>

            <main className="layout-container layout-pt-navbar flex-1 pt-20">
                <Outlet />
            </main>

            <div className="mt-40"></div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
