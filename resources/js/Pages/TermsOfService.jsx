import HeroSection from "@/Components/HeroSection";
import SectionHeading from "@/Components/SectionHeading";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";

export default function TermsOfService() {
    return (
        <PublicLayout>
            <Head title="Terms of Service" />

            <HeroSection
                titles={[
                    "Welcome To Fort Breeze Hotel, Here are Our Terms of Service",
                    "Please read these terms carefully before using our services.",
                ]}
                subtitle="By accessing or using our services, you agree to comply with and be bound by these Terms of Service."
                bgColor="bg-gray-100 dark:bg-gray-800"
                rotationSpeed={10000}
                buttonText="Read Our Privacy Policy"
                buttonLink="#terms-of-service"
                buttonColor="bg-blue-600 text-white hover:bg-blue-700"
            />

            <section className="max-w-12xl px-5 md:px-40 sm:px-40 mx-auto py-2 bg-gray-100 text-gray-800 dark:text-gray-200">
                <div className="space-y-8 mb-8">
                    <div id="terms-of-service">
                        <h1 className="text-5xl mb-8">Terms of Service</h1>

                        <h2 className="text-3xl font-bold mb-3">
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing or using the services of Fort Breeze
                            Hotel, Fort Portal, Uganda, you agree to abide by
                            these Terms of Service. If you do not agree, please
                            do not use our services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            2. Services Provided
                        </h2>
                        <p>
                            We provide hospitality services including room
                            bookings, dining, events, and related services. All
                            bookings and use of services are subject to
                            availability and these Terms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            3. Reservations & Payments
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                Reservations must be confirmed with accurate
                                personal details.
                            </li>
                            <li>
                                Payment terms will be communicated at the time
                                of booking. Failure to pay may result in
                                cancellation.
                            </li>
                            <li>
                                Any fraudulent or unauthorized transactions will
                                be reported to the authorities.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            4. Guest Responsibilities
                        </h2>
                        <p>As a guest, you agree to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                Provide accurate information when making a
                                booking.
                            </li>
                            <li>
                                Respect hotel rules, staff, and other guests.
                            </li>
                            <li>
                                Take responsibility for any damage caused to
                                property during your stay.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            5. Cancellations & Refunds
                        </h2>
                        <p>
                            Cancellation and refund policies depend on the type
                            of booking made. Please check the terms provided at
                            the time of your reservation for specific details.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            6. Limitation of Liability
                        </h2>
                        <p>
                            While we take all reasonable steps to ensure your
                            comfort and safety, Fort Breeze Hotel will not be
                            held liable for:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Loss of personal belongings.</li>
                            <li>
                                Interruptions caused by events beyond our
                                control, such as natural disasters or power
                                outages.
                            </li>
                            <li>
                                Any indirect or incidental damages related to
                                your stay or use of our services.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            7. Changes to Services or Terms
                        </h2>
                        <p>
                            We may update these Terms of Service or modify our
                            services at any time. Updates will be posted on our
                            website, and continued use of our services implies
                            acceptance of the revised terms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            8. Governing Law
                        </h2>
                        <p>
                            These Terms of Service are governed by the laws of
                            Uganda. Any disputes will be resolved in the
                            competent courts of Fort Portal, Uganda.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            9. Contact Us
                        </h2>
                        <p>
                            If you have any questions about these Terms of
                            Service, please reach out:
                        </p>
                        <p className="mt-2">
                            Fort Breeze Hotel, Fort Portal Tourism City, Uganda
                            <br />
                            Email:{" "}
                            <a
                                href="mailto:info@fortbreeze.com"
                                className="text-pink-500 hover:underline"
                            >
                                info@fortbreeze.com
                            </a>
                            <br />
                            Phone: +256-772-614705
                        </p>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
