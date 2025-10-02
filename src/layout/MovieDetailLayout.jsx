import NavigationBar from "../component/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../component/Footer.jsx";

function MovieDetailLayout() {
    return (
        <div className="flex flex-col h-screen bg-[#090a0b] text-white overflow-x-hidden">
            <header className="">
                <NavigationBar />
            </header>

            <main className="layout-pt-navbar flex-1">
                <Outlet />
            </main>

            <div className="mt-40"></div>
            <Footer />
        </div>
    );
}

export default MovieDetailLayout;
