import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import NavLink from "@/Components/NavLink";
import { useEffect, useState } from "react";
import BackToTop from "@/Components/BackToTop";
import TopBar from "@/Components/TopBar";

export default function PublicLayout({ title, children }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-500 select-none">
                <Head title={title} />

                {/* Fixed Header (TopBar + Nav) */}
                <header
                    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                        scrolled
                            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
                            : "bg-white dark:bg-gray-900 shadow-sm"
                    }`}
                >
                    {/* TopBar */}
                    <TopBar />

                    {/* Navigation */}
                    <nav className="border-t border-gray-200 dark:border-gray-700">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16 items-center">
                                {/* Left: Logo + Links */}
                                <div className="flex items-center space-x-8">
                                    <Link
                                        className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-900 hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 py-2 px-4"
                                        href={route("root")}
                                    >
                                        FortBreeze Hotel
                                    </Link>

                                    <div className="hidden sm:flex sm:space-x-6">
                                        <NavLink
                                            href={route("about")}
                                            active={route().current("about")}
                                        >
                                            About Us
                                        </NavLink>
                                        <NavLink
                                            href={route("services")}
                                            active={route().current("services")}
                                        >
                                            Our Services
                                        </NavLink>
                                        <NavLink
                                            href={route("rooms")}
                                            active={route().current("rooms")}
                                        >
                                            Rooms
                                        </NavLink>
                                        <NavLink
                                            href={route("restaurant")}
                                            active={route().current(
                                                "restaurant"
                                            )}
                                        >
                                            Restaurant & Bar
                                        </NavLink>
                                        <NavLink
                                            href={route("contact")}
                                            active={route().current("contact")}
                                        >
                                            Contact Us
                                        </NavLink>
                                    </div>
                                </div>

                                {/* Right: Book Now */}
                                <div className="flex items-center space-x-4">
                                    <Link
                                        href={route("booking")}
                                        className="px-8 py-2 bg-orange-600 text-white rounded-full shadow hover:bg-orange-700 transition-colors duration-300"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                {/* Page Content with padding for fixed header */}
                <main className="flex-grow transition-colors duration-500">
                    {children}
                </main>

                {/* Footer */}
                <BackToTop />
                <Footer />
            </div>
        </>
    );
}
