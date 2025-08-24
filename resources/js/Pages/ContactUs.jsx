import HeroSection from "@/Components/HeroSection";
import PublicLayout from "@/Layouts/PublicLayout";
import SectionWrapper from "@/Components/SectionWrapper";
import { Head, useForm } from "@inertiajs/react";
import SEOTemplate from "@/Components/SEOTemplate";
import { toast } from "react-toastify";

export default function ContactUs() {
    const contactDetails = {
        address:
            "FortBreeze Hotel, Kagote Hill, Saka Road, Fort Portal Tourism City, Uganda",
        phone: "+256 772 614 705 / +256 393 240 934",
        email: "sales@fortbreezehotel.com",
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("contact.send"), {
            onSuccess: () => {
                toast.success(
                    "Thank you for contacting FortBreeze Hotel! Your message has been sent successfully!"
                );
                reset();
            },
            onError: (errors) => {
                toast.error(
                    "Failed to send the message. Please check the fields and try again."
                );
            },
        });
    };

    return (
        <PublicLayout>
            <SEOTemplate
                title="Contact Us | FortBreeze Hotel"
                description="Get in touch with FortBreeze Hotel for inquiries, bookings, and assistance."
                keywords="Contact FortBreeze Hotel, Fort Portal, Uganda, hotel inquiries, customer support"
                url="https://fortbreeze.com/contact"
                image="https://fortbreeze.com/images/contact-og.jpg"
            />

            <HeroSection
                titles={[
                    "Get in Touch with Us, Our Team is Here to Help You",
                    "FortBreeze Hotel, Fort Portal Tourism City Uganda",
                ]}
                subtitle="We’d love to hear from you! Whether you’re planning your stay, arranging an event, or need any assistance, our team is ready to help."
                bgColor="bg-yellow-100 dark:bg-gray-800"
                image="/images/download.jpg"
                rotationSpeed={10000}
                buttonText="Leave Us A Message"
                buttonLink="#message-form"
                buttonColor="bg-blue-600 text-white hover:bg-blue-700"
            />

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            Contact Information
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong>Physical Address:</strong>
                            <br />
                            {contactDetails.address}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong>Phone:</strong>
                            <br />
                            {contactDetails.phone}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong>Email:</strong>
                            <br />
                            <a
                                href={`mailto:${contactDetails.email}`}
                                className="text-indigo-600 dark:text-indigo-400 hover:underline"
                            >
                                {contactDetails.email}
                            </a>
                        </p>
                    </div>

                    {/* Embedded Map */}
                    <div className="lg:col-span-2">
                        <iframe
                            title="FortBreeze Hotel Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.10423550287!2d30.269694555587847!3d0.6618653181325446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1763da134db19159%3A0x7816703ab3c39f01!2sFort%20Breeze%20Hotel!5e0!3m2!1sen!2sug!4v1754798462980!5m2!1sen!2sug"
                            width="100%"
                            height="500"
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-lg shadow-lg border-0"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Contact Form */}
                    <div id="message-form" className="lg:col-span-3">
                        <SectionWrapper className="bg-white dark:bg-gray-800 p-8 rounded-md">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                                Send Us a Message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={data.firstName}
                                            onChange={(e) =>
                                                setData(
                                                    "firstName",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                                            required
                                        />
                                        {errors.firstName && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.firstName}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={data.lastName}
                                            onChange={(e) =>
                                                setData(
                                                    "lastName",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                                        />
                                        {errors.lastName && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.lastName}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows="5"
                                        value={data.message}
                                        onChange={(e) =>
                                            setData("message", e.target.value)
                                        }
                                        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                                        required
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition disabled:opacity-50"
                                >
                                    {processing ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </SectionWrapper>
                    </div>
                </div>
            </SectionWrapper>
        </PublicLayout>
    );
}
