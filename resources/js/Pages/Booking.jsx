import HeroSection from "@/Components/HeroSection";
import SectionHeading from "@/Components/SectionHeading";
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
            <Head title="FortBreeze- Booking" />

            <HeroSection
                titles={[
                    "Book Your Stay or Services at Fort Breeze Hotel",
                    "Experience Comfort and Luxury in At Fort Breeze Hotel",
                ]}
                subtitle="Plan your stay, reserve a table, or book a conference room easily. Our team is ready to make your visit memorable."
                bgColor="bg-green-100 dark:bg-gray-800"
                rotationSpeed={10000}
                buttonText="Make a Booking"
                buttonLink="#booking-form"
                buttonColor="bg-blue-600 text-white hover:bg-blue-700"
            />

            <div className="py-12">
                <SectionHeading
                    title="Start By Filling Out The Form"
                    subtitle="Our team is ready to assist you with your booking."
                />
                <div
                    id="booking-form"
                    className="mx-auto max-w-3xl sm:px-6 lg:px-8"
                >
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
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

                                <input
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

                                <input
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

                                <select
                                    value={data.service}
                                    onChange={(e) =>
                                        setData("service", e.target.value)
                                    }
                                    className="w-full p-3 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                                    required
                                >
                                    <option value="">Select a Service</option>
                                    <option value="room">Room Booking</option>
                                    <option value="conference">
                                        Conference/Events
                                    </option>
                                    <option value="restaurant">
                                        Restaurant Reservation
                                    </option>
                                    <option value="spa">Spa & Wellness</option>
                                </select>
                                {errors.service && (
                                    <p className="text-red-500 text-sm">
                                        {errors.service}
                                    </p>
                                )}

                                <input
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

                                <textarea
                                    placeholder="Additional Message"
                                    rows="4"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                    className="w-full p-3 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                                ></textarea>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                                >
                                    {processing
                                        ? "Sending..."
                                        : "Submit Your Booking Request"}
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
