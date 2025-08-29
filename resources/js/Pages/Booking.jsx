import HeroSection from "@/Components/HeroSection";
import SectionHeading from "@/Components/SectionHeading";
import SEOTemplate from "@/Components/SEOTemplate";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head, useForm } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Booking() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("booking.send"), {
            onSuccess: () => {
                toast.success("Your booking request has been sent!");
                reset();
            },
            onError: () => {
                toast.error(
                    "Failed to send booking request. Please check your fields."
                );
            },
        });
    };

    return (
        <PublicLayout>
            <SEOTemplate
                title="Book Accommodation in Fort Portal Uganda | FortBreeze Hotel"
                description="Reserve your room, restaurant table, or conference facility at FortBreeze Hotel in Fort Portal Uganda. Easy booking process for accommodation and services."
                keywords="book hotel Fort Portal, accommodation booking Uganda, FortBreeze Hotel reservation, restaurant booking Fort Portal, conference facilities Fort Portal"
                url="https://fortbreezehotel.com/booking"
                image="https://fortbreezehotel.com/images/booking.webp"
            />

            <HeroSection
                titles={[
                    "Book Your Stay at FortBreeze Hotel Fort Portal",
                    "Reserve Your Accommodation in Fort Portal Uganda",
                ]}
                subtitle="Plan your stay, reserve a table at our restaurant, or book our conference facilities. Our team at FortBreeze Hotel in Fort Portal is ready to assist with your booking."
                bgColor="bg-gray-50 dark:bg-gray-800"
                rotationSpeed={10000}
                buttonText="Make a Booking"
                buttonLink="#booking-form"
                buttonColor="bg-blue-600 text-white hover:bg-blue-700"
            />

            <div className="py-12">
                <SectionHeading
                    title="Booking Form for FortBreeze Hotel"
                    subtitle="Complete this form to book accommodation, restaurant reservations, or conference facilities at our Fort Portal hotel"
                />
                <div
                    id="booking-form"
                    className="mx-auto max-w-3xl sm:px-6 lg:px-8"
                >
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Full Name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="w-full p-3 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="w-full p-3 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="sr-only">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="Phone"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        className="w-full p-3 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                                        required
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="service"
                                        className="sr-only"
                                    >
                                        Select Service
                                    </label>
                                    <select
                                        id="service"
                                        value={data.service}
                                        onChange={(e) =>
                                            setData("service", e.target.value)
                                        }
                                        className="w-full p-3 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                                        required
                                    >
                                        <option value="">
                                            Select a Service
                                        </option>
                                        <option value="room">
                                            Room Booking
                                        </option>
                                        <option value="conference">
                                            Conference/Events
                                        </option>
                                        <option value="restaurant">
                                            Restaurant Reservation
                                        </option>
                                        <option value="spa">
                                            Spa & Wellness
                                        </option>
                                    </select>
                                    {errors.service && (
                                        <p className="text-red-500 text-sm">
                                            {errors.service}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="date" className="sr-only">
                                        Select Date
                                    </label>
                                    <input
                                        id="date"
                                        type="date"
                                        value={data.date}
                                        onChange={(e) =>
                                            setData("date", e.target.value)
                                        }
                                        className="w-full p-3 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                                        required
                                    />
                                    {errors.date && (
                                        <p className="text-red-500 text-sm">
                                            {errors.date}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="sr-only"
                                    >
                                        Additional Message
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder="Additional Message"
                                        rows="4"
                                        value={data.message}
                                        onChange={(e) =>
                                            setData("message", e.target.value)
                                        }
                                        className="w-full p-3 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                                >
                                    {processing
                                        ? "Sending..."
                                        : "Submit Booking Request"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={5000} />
        </PublicLayout>
    );
}
