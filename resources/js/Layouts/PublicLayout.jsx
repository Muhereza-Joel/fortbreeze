import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import NavLink from "@/Components/NavLink";
import ThemeToggle from "@/Components/ThemeToggle";

export default function PublicLayout({ title, children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <Head title={title} />

            {/* Navigation */}
            <nav className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Left: Logo + Links */}
                        <div className="flex items-center space-x-8">
                            <div className="text-lg font-bold text-gray-900 dark:text-gray-100 transition-colors duration-500">
                                FortBreeze Hotel
                            </div>
                            <div className="hidden sm:flex sm:space-x-6">
                                <NavLink
                                    href={route("home")}
                                    active={route().current("home")}
                                >
                                    Home
                                </NavLink>
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
                                    active={route().current("restaurant")}
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

                        {/* Right: Book Now + Theme Toggle */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href={route("booking")}
                                className="px-8 py-2 bg-orange-600 text-white rounded-full shadow hover:bg-orange-700 transition-colors duration-300"
                            >
                                Book Now
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Page Content */}
            <main className="flex-grow transition-colors duration-500">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
