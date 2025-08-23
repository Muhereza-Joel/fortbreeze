import HeroSection from "@/Components/HeroSection";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";

export default function Careers() {
    return (
        <PublicLayout>
            <Head title="Careers at Fort Breeze Hotel" />

            <HeroSection
                titles={[
                    "Join Our Team at Fort Breeze",
                    "Build your career in hospitality with us.",
                ]}
                subtitle="We believe in creating memorable experiences for our guests—and that starts with our people."
                bgColor="bg-pink-50 dark:bg-gray-800"
                rotationSpeed={10000}
            />

            <section className="max-w-7xl px-5 md:px-20 mx-auto py-10  text-gray-800 dark:text-gray-200">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-5xl mb-8">Careers</h1>
                        <p>
                            At Fort Breeze Hotel, we are always looking for
                            passionate and dedicated individuals to join our
                            team. Whether you are just starting out or have
                            years of experience in hospitality, we provide
                            opportunities to grow and thrive.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            Why Work With Us?
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Friendly and inclusive work environment.</li>
                            <li>
                                Opportunities for training and professional
                                growth.
                            </li>
                            <li>Competitive salaries and employee benefits.</li>
                            <li>
                                Be part of a team that values excellence in
                                hospitality.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            Current Openings
                        </h2>
                        <p className="mb-3">
                            We are always looking for talent in the following
                            areas:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Front Desk & Guest Relations</li>
                            <li>Food & Beverage Service</li>
                            <li>Housekeeping & Maintenance</li>
                            <li>Event Management & Coordination</li>
                            <li>Hotel Administration</li>
                        </ul>
                        <p className="mt-4">
                            If no positions are currently listed, you are still
                            welcome to send us your CV for future consideration.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            How to Apply
                        </h2>
                        <p>
                            Please email your CV and a brief cover letter to{" "}
                            <a
                                href="mailto:careers@fortbreeze.com"
                                className="text-pink-500 hover:underline"
                            >
                                careers@fortbreeze.com
                            </a>
                            . Shortlisted candidates will be contacted for
                            interviews.
                        </p>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
