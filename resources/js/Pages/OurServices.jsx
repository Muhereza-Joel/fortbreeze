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

// Updated services with SEO-focused descriptions
const services = [
    {
        title: "Accommodation in Fort Portal",
        description:
            "Comfortable rooms with views of Fort Portal's hills and Rwenzori Mountains. Our accommodation options provide a relaxing stay for visitors to Western Uganda.",
        icon: BedDouble,
    },
    {
        title: "Restaurant in Fort Portal",
        description:
            "Enjoy Ugandan dishes and international cuisine made with fresh local ingredients. Our Fort Portal restaurant offers a pleasant dining experience.",
        icon: Utensils,
    },
    {
        title: "Airport Transfers & Transportation",
        description:
            "Reliable transport services to Kasese Airport and Fort Portal attractions. We provide convenient transportation for our guests.",
        icon: Car,
    },
    {
        title: "Spa & Wellness Services",
        description:
            "Relax with massages, wellness therapies, and access to our sauna. Our spa services help you unwind during your stay in Fort Portal.",
        icon: Heart,
    },
    {
        title: "Tours to Kibale National Park",
        description:
            "Explore Kibale National Park, Crater Lakes, and local cultural heritage. We offer guided tours to attractions in Western Uganda.",
        icon: Trees,
    },
    {
        title: "High-Speed Internet Access",
        description:
            "Complimentary Wi-Fi throughout our hotel in Fort Portal. Stay connected during your visit to Uganda.",
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
                title="Hotel Services in Fort Portal Uganda | FortBreeze Hotel"
                description="Discover accommodation, dining, and tour services at FortBreeze Hotel in Fort Portal Uganda. Enjoy comfortable rooms, restaurant meals, and convenient access to Kibale National Park."
                keywords="FortBreeze Hotel services, accommodation Fort Portal, restaurant Fort Portal, tours Kibale National Park, hotel services Uganda, Fort Portal Uganda hotel"
                url="https://fortbreezehotel.com/services"
                image="https://fortbreezehotel.com/images/fitnesscentre.webp"
            />

            <HeroSection
                titles={[
                    "Stay Fit And Healthy at FortBreeze Hotel ",
                    "The Best Accommodation & Dining in Fort Portal",
                    "Tours to Kibale National Park And Beyond",
                ]}
                animationMode="typing"
                typingSpeed={120}
                rotationSpeed={10000}
                subtitle="Experience our range of services at FortBreeze Hotel in Fort Portal Uganda. From comfortable accommodation and dining to transportation and tours to Kibale National Park."
                bgColor="bg-gray-50 dark:bg-gray-800"
                image="/images/fitnesscentre.webp"
                buttonText="View Our Services"
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
                        title="Services at Our Fort Portal Hotel"
                        subtitle="Enjoy comfortable accommodation, dining, and convenient access to attractions in Western Uganda"
                    />
                    <FeatureGrid items={services} />
                </SectionWrapper>
            </GradientWrapper>

            <SectionWrapper>
                <SectionHeading
                    title="Guest Experiences at FortBreeze Hotel"
                    subtitle="Read what our visitors say about their stay at our Fort Portal hotel"
                />
                <TestimonialSlider testimonials={testimonials} />
            </SectionWrapper>

            <CallToAction
                title="Book Your Stay at FortBreeze Hotel"
                text="Reserve your room at our Fort Portal hotel and enjoy comfortable accommodation with convenient access to local attractions."
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
