import HeroSection from "@/Components/HeroSection";
import SectionHeading from "@/Components/SectionHeading";
import SectionWrapper from "@/Components/SectionWrapper";
import SEOTemplate from "@/Components/SEOTemplate";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head, Link } from "@inertiajs/react";
import { BedDouble, Users, Shield, Coffee } from "lucide-react";

export default function Rooms() {
    const roomTypes = [
        {
            title: "Budget Single Room",
            description:
                "Air-conditioned single room with a private bathroom, flatscreen TV, wardrobe, and safety deposit box.",
            image: "/images/download3.jpg",
            amenities: [
                "Air conditioning",
                "Private bathroom",
                "Flat-screen TV",
                "Safety deposit box",
            ],
        },
        {
            title: "Superior Double Room",
            description:
                "Spacious double room with garden views, seating area, terrace, and deep soaking bathtub.",
            image: "/images/download3.jpg",
            amenities: [
                "Garden view",
                "Terrace",
                "Seating area",
                "Deep soaking bathtub",
            ],
        },
        {
            title: "King Suite",
            description:
                "Luxurious suite featuring kitchenette with refrigerator, dining area, seating space, balcony, and ensuite bathroom.",
            image: "/images/download3.jpg",
            amenities: [
                "Kitchenette",
                "Refrigerator",
                "Balcony",
                "Dining area",
            ],
        },
        {
            title: "Presidential Suite",
            description:
                "Expansive living area, full kitchen, balcony with views, dual bedrooms—perfect for VIP guests.",
            image: "/images/download3.jpg",
            amenities: [
                "Full kitchen",
                "Two bedrooms",
                "Balcony with views",
                "Spacious living area",
            ],
        },
    ];

    return (
        <PublicLayout>
            <SEOTemplate
                title="Our Rooms | FortBreeze Hotel"
                description="Explore the diverse range of rooms and suites at FortBreeze Hotel, designed for comfort and luxury."
                keywords="FortBreeze Hotel, Fort Portal, Uganda, hotel rooms, luxury accommodations"
                url="https://fortbreeze.com/rooms"
                image="https://fortbreeze.com/images/rooms-og.jpg"
            />

            <HeroSection
                titles={["Our Rooms & Suite Are Budget Friendly"]}
                subtitle="Discover our range of thoughtfully designed accommodations, from cozy single rooms to opulent suites—all tailored for your comfort."
                bgColor="bg-orange-100 dark:bg-gray-800"
                titleGradient="bg-gradient-to-r from-orange-500 via-yellow-500 to-purple-600"
                image="/images/download2.jpg"
                buttonText="Explore Our Rooms"
                buttonLink="#rooms"
                buttonColor="bg-blue-600 text-white hover:bg-blue-700"
            />

            <SectionWrapper>
                <SectionHeading
                    title="Room Types"
                    subtitle="Find the perfect ambiance—whether you're traveling solo, with family, or as VIP elite."
                />
                <div
                    id="rooms"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {roomTypes.map((room, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
                        >
                            <img
                                src={room.image}
                                alt={room.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                                    {room.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {room.description}
                                </p>
                                <ul className="text-gray-600 dark:text-gray-400 mb-4 list-disc list-inside space-y-1 text-sm">
                                    {room.amenities.map((amenity, idx) => (
                                        <li key={idx}>{amenity}</li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <Link
                                        href="/booking"
                                        className="block text-center px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500 transition"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </PublicLayout>
    );
}
