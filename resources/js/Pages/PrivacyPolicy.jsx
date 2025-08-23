import HeroSection from "@/Components/HeroSection";
import SectionHeading from "@/Components/SectionHeading";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";

export default function PrivacyPolicy() {
    return (
        <PublicLayout>
            <Head title="Our Privacy Policy" />

            <HeroSection
                titles={[
                    "At Fort Breeze, We value your privacy.",
                    "We always ensure customer data is protected.",
                ]}
                subtitle="We are committed to safeguarding your personal information and ensuring transparency in how we handle it."
                bgColor="bg-gray-100 dark:bg-gray-800"
                rotationSpeed={10000}
                buttonText="Read Our Privacy Policy"
                buttonLink="#privacy-policy"
                buttonColor="bg-blue-600 text-white hover:bg-blue-700"
            />

            <section className="max-w-12xl px-5 md:px-40 sm:px-40 mx-auto  py-2 bg-gray-100 text-gray-800 dark:text-gray-200">
                <div className="space-y-8 mb-8">
                    <div id="privacy-policy">
                        <h1 className="text-5xl mb-8">Our Privacy Policy</h1>

                        <h2 className="text-3xl font-bold mb-3">
                            1. Introduction
                        </h2>
                        <p>
                            This Privacy Policy explains how Fort Breeze Hotel
                            Fort Portal, Uganda, collects, uses, and protects
                            your personal information when you use our services,
                            visit our website, or stay at our property. By using
                            our services, you agree to the terms outlined here.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            2. Information We Collect
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                Personal details such as your name, email, phone
                                number, and address.
                            </li>
                            <li>
                                Booking information including stay dates, room
                                preferences, and payment details.
                            </li>
                            <li>
                                Information you provide through forms, emails,
                                or phone calls.
                            </li>
                            <li>
                                Website usage data such as IP address, browser
                                type, and pages visited.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            3. How We Use Your Information
                        </h2>
                        <p>We use your data to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Process bookings and payments.</li>
                            <li>
                                Provide personalized customer service and
                                improve our services.
                            </li>
                            <li>
                                Send you booking confirmations, invoices, or
                                important updates.
                            </li>
                            <li>
                                Comply with legal and regulatory requirements.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            4. Data Protection
                        </h2>
                        <p>
                            We take appropriate technical and organizational
                            measures to safeguard your data against unauthorized
                            access, alteration, disclosure, or destruction.
                            Access to your data is restricted to authorized
                            staff only.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            5. Sharing Your Information
                        </h2>
                        <p>
                            We do not sell your personal information to third
                            parties. We may share it with trusted service
                            providers (such as payment processors) strictly for
                            the purposes of delivering our services, and always
                            under confidentiality agreements.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            6. Cookies & Website Tracking
                        </h2>
                        <p>
                            Our website may use cookies to enhance your browsing
                            experience and gather anonymous usage statistics.
                            You can disable cookies in your browser settings,
                            though some features may not work as intended.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            7. Your Rights
                        </h2>
                        <p>
                            You have the right to access, update, or delete your
                            personal data. To make such a request, please
                            contact us using the details below.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            8. Changes to This Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy from time to time.
                            Any changes will be posted on our website with the
                            revised date indicated at the top.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            9. Contact Us
                        </h2>
                        <p>
                            If you have any questions or concerns about this
                            Privacy Policy or how we handle your data, please
                            reach out:
                        </p>
                        <p className="mt-2">
                            Fort Breeze Hotel, Fort Portal Tourism City, Uganda
                            Email:{" "}
                            <a
                                href="mailto:info@fortbreeze.com"
                                className="text-pink-500 hover:underline"
                            >
                                info@fortbreeze.com
                            </a>
                            Phone: +256-772-614705
                        </p>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
