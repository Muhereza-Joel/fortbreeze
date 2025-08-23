import { Phone, Mail, Facebook, Instagram } from "lucide-react";

export default function TopBar() {
    return (
        <div className="w-full bg-blue-900 text-white text-sm py-2 px-0">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Left: Contacts */}
                <div className="flex space-x-8">
                    <a
                        href="tel:+256700123456"
                        className="flex items-center space-x-1 hover:underline"
                    >
                        <span className="px-2 ml-2 sm:ml-9">Call Us: </span>
                        <Phone className="w-4 h-4" />
                        <span>+256 772 614 705</span>
                        <Phone className="w-4 h-4" />
                        <span>+256 393 240 934</span>
                    </a>

                    {/* Email (hidden on small screens) */}
                    <a
                        href="mailto:sales@fortbreezehotel.com"
                        className="hidden sm:flex items-center space-x-1 hover:underline"
                    >
                        <Mail className="w-4 h-4" />
                        <span>sales@fortbreezehotel.com</span>
                    </a>
                </div>

                {/* Right: Socials (hidden on small screens) */}
                <div className="hidden sm:flex space-x-4">
                    <a
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-400"
                    >
                        <Facebook className="w-4 h-4" />
                    </a>
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-400"
                    >
                        <Instagram className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
