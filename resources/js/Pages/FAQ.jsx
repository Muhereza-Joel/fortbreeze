import HeroSection from "@/Components/HeroSection";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import { Disclosure } from "@headlessui/react";
import { ChevronUp } from "lucide-react";

export default function FAQ() {
    const faqs = [
        {
            question: "How can I make a reservation?",
            answer: "You can book directly through our website, by calling our front desk, or by visiting Fort Breeze Hotel in person.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept cash, mobile money, debit/credit cards, and secure online payments.",
        },
        {
            question: "Can I cancel or modify my booking?",
            answer: "Yes. Cancellations and modifications depend on your booking type. Please check your booking confirmation or contact us directly.",
        },
        {
            question: "Do you provide airport transfers?",
            answer: "Yes, we offer convenient airport transfer services upon request. Please let us know when booking.",
        },
        {
            question: "Do you offer event hosting?",
            answer: "Absolutely. Fort Breeze Hotel provides event spaces for conferences, weddings, and private functions.",
        },
        {
            question: "How can I contact the hotel?",
            answer: (
                <>
                    You can reach us by email at{" "}
                    <a
                        href="mailto:info@fortbreeze.com"
                        className="text-pink-500 hover:underline"
                    >
                        info@fortbreeze.com
                    </a>{" "}
                    or call us at +256-772-614705.
                </>
            ),
        },
    ];

    return (
        <PublicLayout>
            <Head title="Frequently Asked Questions" />

            <HeroSection
                titles={[
                    "Frequently Asked Questions",
                    "Got questions? We’ve got answers.",
                ]}
                subtitle="Here are some of the most common questions our guests ask. Click to expand and see the answers."
                bgColor="bg-indigo-50 dark:bg-gray-800"
                rotationSpeed={10000}
            />

            <section className="max-w-4xl px-5 md:px-10 mx-auto py-10  text-gray-800 dark:text-gray-200">
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <Disclosure key={idx}>
                            {({ open }) => (
                                <div className="border-b border-gray-300 dark:border-gray-700">
                                    <Disclosure.Button className="flex justify-between items-center w-full py-4 text-left text-lg font-medium focus:outline-none">
                                        <span>{faq.question}</span>
                                        <ChevronUp
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } w-5 h-5 text-gray-600`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="pb-4 text-gray-600 dark:text-gray-300">
                                        {faq.answer}
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </section>
        </PublicLayout>
    );
}
