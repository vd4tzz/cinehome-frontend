import NavigationBar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <div className="flex flex-col h-screen bg-[#090a0b] text-white overflow-x-hidden">
            <header className="">
                <NavigationBar />
            </header>

            <main className="layout-container layout-pt-navbar flex-1">
                <Outlet />
            </main>

            <div className="mt-40"></div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
