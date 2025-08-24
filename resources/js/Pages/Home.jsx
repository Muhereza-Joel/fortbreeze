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
                description="Escape the ordinary and relax at Fortbreeze Hotel, set among beautiful views and rich culture. Enjoy the natural beauty around us—from green landscapes to the stunning Rwenzori Mountains. Whether you want a quiet getaway or an adventure, our hotel gives you the perfect mix of comfort, peace, and local experiences to refresh your mind and spirit."
                buttonText="Book Your Stay"
                buttonLink="#book"
                image="/images/sittingchairs.webp"
                imagePosition="right"
                bgColor="bg-white"
                textColor="text-gray-900"
                titleGradient="bg-gradient-to-r from-purple-600 to-pink-500"
                enableMorph={true}
            />

            <HeroSectionWithCTA
                title="Elegance in Every Detail"
                subtitle="Hospitality redefined."
                description="Discover comfort and style in our well-designed rooms, perfect for both business and leisure travelers. At Fortbreeze Hotel, every detail is crafted to make you feel at home—modern elegance blended with cozy touches creates a warm and inviting atmosphere. Enjoy thoughtful amenities, friendly service, and spaces designed to match your needs, whether you want a productive stay or a relaxing escape."
                buttonText="Explore Our Rooms"
                buttonLink="#book"
                image="/images/roomsitting2.webp"
                imagePosition="left"
                bgColor="bg-white"
                textColor="text-gray-900"
                titleGradient="bg-gradient-to-r from-teal-500 to-cyan-500"
                enableMorph={true}
            />

            <HeroSectionWithCTA
                title="Modern Comfort. Timeless Style."
                subtitle="Relax. Recharge. Repeat."
                description="Enjoy the best of modern comfort and local charm at Fortbreeze Hotel. Our spacious suites and modern amenities—like high-speed internet and fully equipped conference facilities—are designed to meet your every need. Relax in tastefully decorated rooms inspired by Fort Portal’s culture, unwind in our peaceful gardens, or explore nearby attractions. At Fortbreeze, every stay combines convenience with warm, timeless hospitality."
                buttonText="Visit Us Today"
                buttonLink="#book"
                image="/images/entrance2.webp"
                imagePosition="right"
                bgColor="bg-white"
                textColor="text-gray-900"
                titleGradient="bg-gradient-to-r from-orange-500 to-yellow-400"
                enableMorph={true}
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
