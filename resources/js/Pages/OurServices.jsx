import CallToAction from "@/Components/CallToAction";
import FeatureGrid from "@/Components/FeatureGrid";
import { GradientWrapper } from "@/Components/GradientWrapper";
import HeroSection from "@/Components/HeroSection";
import SectionHeading from "@/Components/SectionHeading";
import SectionWrapper from "@/Components/SectionWrapper";
import SEOTemplate from "@/Components/SEOTemplate";
import TestimonialSlider from "@/Components/TestimonialSlider";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import { BedDouble, Utensils, Car, Heart, Trees, Wifi } from "lucide-react";

// Test services remain the same
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

const testimonials = [
    {
        name: "Nakato K.",
        role: "Travel Blogger",
        quote: "The stay at FortBreeze was incredible — exceptional service and stunning views of the Rwenzori Mountains!",
    },
    {
        name: "Mukasa S.",
        role: "Business Traveler",
        quote: "Perfect balance of comfort and convenience during my conference in Fort Portal. The breakfast rolex was delicious!",
    },
    {
        name: "Kirabo N.",
        role: "Tour Guide",
        quote: "I recommend FortBreeze to all my clients. The crater lake views at sunset are magical!",
    },
    {
        name: "Tumusiime J.",
        role: "Government Official",
        quote: "Impeccable service that reminds me why Uganda is called the Pearl of Africa. The staff treated me like family!",
    },
    {
        name: "Nalubega R.",
        role: "Safari Operator",
        quote: "After long game drives in Queen Elizabeth Park, FortBreeze is my preferred place to unwind. The pool area is heavenly!",
    },
    {
        name: "Ocen P.",
        role: "Journalist",
        quote: "The cultural dance performances at the hotel restaurant made my stay unforgettable. And the luwombo chicken was divine!",
    },
    {
        name: "Namukasa A.",
        role: "Wedding Planner",
        quote: "We hosted a traditional introduction ceremony at FortBreeze. The gardens provided the perfect backdrop for our photos!",
    },
    {
        name: "Kato E.",
        role: "Adventure Seeker",
        quote: "Best place to stay before hiking to the top of the world! (Rwenzoris). Hot showers never felt so good after trekking!",
    },
    {
        name: "Nabukenya D.",
        role: "Family Traveler",
        quote: "My children loved the banana pancakes, and I appreciated the authentic Ugandan hospitality. We'll be back during school holidays!",
    },
    {
        name: "Okello M.",
        role: "Wildlife Photographer",
        quote: "The balcony view gave me perfect shots of tropical birds at dawn. Staff even woke me when chimpanzees were spotted nearby!",
    },
];

export default function OurServices() {
    return (
        <PublicLayout title="Our Services">
            <SEOTemplate
                title="Our Services | FortBreeze Hotel"
                description="Explore the exceptional services offered at FortBreeze Hotel, from luxury accommodations to unique experiences in Fort Portal."
                keywords="FortBreeze Hotel, Fort Portal, Uganda, hotel services, luxury accommodations"
                url="https://fortbreeze.com/services"
                image="https://fortbreeze.com/images/services-og.jpg"
            />

            <HeroSection
                titles={[
                    "Our Services At FortBreeze Hotel",
                    "Unmatched Hospitalicty in Fort Portal City",
                    "Experience Luxury & Comfort at FortBreeze",
                ]}
                animationMode="typing"
                typingSpeed={120}
                rotationSpeed={10000}
                subtitle="Discover a range of premium services designed to make your stay at FortBreeze Hotel in Fort Portal truly exceptional — from luxury accommodation and fine dining to wellness and cultural experiences."
                bgColor="bg-gray-100 dark:bg-gray-800"
                image="/images/fitnesscentre.webp"
                buttonText="Explore Our Services"
                buttonLink="#services"
                buttonColor="bg-blue-600 text-white hover:bg-blue-700"
            />

            <GradientWrapper
                from="#22c55e"
                via="#f97316"
                to="#facc15"
                overlayLight="rgba(255,255,255,0.75)"
                overlayDark="rgba(17,24,39,0.85)"
            >
                <span id="services"></span>
                <SectionWrapper>
                    <SectionHeading
                        title="What We Offer"
                        subtitle="Experience comfort, luxury, and adventure in the heart of Fort Portal"
                    />
                    <FeatureGrid items={services} />
                </SectionWrapper>
            </GradientWrapper>

            <SectionWrapper>
                <SectionHeading
                    title="What Our Customers Say"
                    subtitle="Hear from our guests about their unforgettable experiences at FortBreeze Hotel"
                />
                <TestimonialSlider testimonials={testimonials} />
            </SectionWrapper>
            <CallToAction
                title="Book Your Stay At Fort Breeze Hotel Now"
                text="Reserve your room and enjoy luxury in Fort Portal Tourism City."
                buttonText="Book Now"
                buttonLink={route("booking")}
                bgColor="bg-gray-900"
                darkBgColor="dark:bg-gray-900"
                textColor="text-gray-100 dark:text-gray-100"
                subTextColor="text-gray-500"
                buttonBgColor="bg-white"
                buttonTextColor="text-green-600"
                buttonHoverBg="hover:bg-green-50"
                paddingY="py-40"
                paddingX="px-10"
            />
        </PublicLayout>
    );
}
