import CallToAction from "@/Components/CallToAction";
import FeatureGrid from "@/Components/FeatureGrid";
import HeroSectionWithCTA from "@/Components/HeroSectionWithCTA";
import HomeSlider from "@/Components/HomeSlider";
import SectionHeading from "@/Components/SectionHeading";
import SectionWrapper from "@/Components/SectionWrapper";
import SEOTemplate from "@/Components/SEOTemplate";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import { BedDouble, Utensils, Car, Heart, Trees, Wifi } from "lucide-react";

export default function Home() {
    const services = [
        {
            title: "Luxury Accommodation",
            description:
                "Spacious, elegantly furnished rooms with stunning views of Fort Portal’s rolling hills and the Rwenzori Mountains.",
            icon: BedDouble,
        },
        {
            title: "Fine Dining Restaurant",
            description:
                "Savor authentic Ugandan dishes and international cuisine crafted from fresh local ingredients in a sophisticated ambiance.",
            icon: Utensils,
        },
        {
            title: "Airport & City Transfers",
            description:
                "Reliable and comfortable transport services connecting you to Kasese Airport and key Fort Portal attractions.",
            icon: Car,
        },
        {
            title: "Spa & Wellness",
            description:
                "Unwind with rejuvenating massages, wellness therapies, and access to our sauna and relaxation lounges.",
            icon: Heart,
        },
        {
            title: "Nature & Cultural Tours",
            description:
                "Explore nearby natural wonders like Kibale National Park and Crater Lakes, or immerse yourself in local Tooro cultural heritage.",
            icon: Trees,
        },
        {
            title: "High-Speed Wi-Fi",
            description:
                "Complimentary, reliable internet access throughout the hotel to keep you connected during your stay.",
            icon: Wifi,
        },
    ];
    return (
        <PublicLayout>
            <SEOTemplate
                title="Welcome to Fortbreeze Hotel"
                description="Experience luxury and comfort at Fortbreeze Hotel, your perfect getaway in Fort Portal."
                keywords="Fortbreeze Hotel, Fort Portal, Uganda, luxury hotel, accommodation"
                url="https://fortbreeze.com"
                image="https://fortbreeze.com/images/home-og.jpg"
            />
            <HomeSlider />

            <HeroSectionWithCTA
                title="Discover the Charm of Fort Portal"
                subtitle="Where comfort meets tranquility."
                description="Escape the ordinary and unwind in the serene elegance of Fortbreeze Hotel, nestled among breathtaking views and rich culture. Immerse yourself in the natural beauty that surrounds us—from lush green landscapes to the majestic Rwenzori Mountains. Whether you're seeking a peaceful retreat or an adventure-filled getaway, our hotel offers the perfect balance of comfort, tranquility, and authentic local experiences to refresh your mind and spirit."
                buttonText="Book Your Stay"
                buttonLink="#book"
                image="/images/download.jpg"
                imagePosition="right"
                bgColor="bg-white"
                textColor="text-gray-900"
                titleGradient="bg-gradient-to-r from-purple-600 to-pink-500"
            />

            <HeroSectionWithCTA
                title="Elegance in Every Detail"
                subtitle="Hospitality redefined."
                description="Experience refined luxury with our thoughtfully designed rooms and personalized services, perfect for both business and leisure travelers. Every corner of Fortbreeze Hotel showcases exceptional attention to detail, combining modern elegance with cozy touches to create an inviting atmosphere. Enjoy tailored amenities, attentive staff, and sophisticated spaces that cater to your unique needs, ensuring your stay is as productive or relaxing as you desire."
                buttonText="Explore Our Rooms"
                buttonLink="#book"
                image="/images/download.jpg"
                imagePosition="left"
                bgColor="bg-white"
                textColor="text-gray-900"
                titleGradient="bg-gradient-to-r from-teal-500 to-cyan-500"
            />

            <HeroSectionWithCTA
                title="Modern Comfort. Timeless Style."
                subtitle="Relax. Recharge. Repeat."
                description="Enjoy a perfect blend of innovation and tradition with modern amenities, spacious suites, and a touch of classic Fort Portal charm. From high-speed internet and cutting-edge conference facilities to tastefully decorated rooms inspired by local culture, we provide everything you need to relax, recharge, and reconnect. Whether lounging in our serene gardens or exploring nearby attractions, Fortbreeze Hotel promises a memorable experience that combines convenience with timeless hospitality."
                buttonText="Visit Us Today"
                buttonLink="#book"
                image="/images/download.jpg"
                imagePosition="right"
                bgColor="bg-white"
                textColor="text-gray-900"
                titleGradient="bg-gradient-to-r from-orange-500 to-yellow-400"
            />

            <SectionWrapper>
                <SectionHeading
                    title="What We Offer"
                    subtitle="Experience comfort, luxury, and adventure in the heart of Fort Portal"
                />
                <FeatureGrid items={services} />
            </SectionWrapper>

            {/* Call to Action */}
            <CallToAction
                title="Dine With Us Today"
                text="Reserve a table and enjoy an unforgettable culinary journey at FortBreeze Hotel."
                buttonText="Book a Table"
                buttonLink={route("booking")}
                bgColor="bg-gray-900"
                darkBgColor="dark:bg-gray-900"
                textColor="text-gray-100"
                buttonBgColor="bg-yellow-500"
                buttonTextColor="text-white"
                buttonHoverBg="hover:bg-yellow-600"
                paddingY="py-20"
                paddingX="px-6"
            />
        </PublicLayout>
    );
}
