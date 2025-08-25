import CallToAction from "@/Components/CallToAction";
import { GradientWrapper } from "@/Components/GradientWrapper";
import HeroSection from "@/Components/HeroSection";
import SectionHeading from "@/Components/SectionHeading";
import SectionWrapper from "@/Components/SectionWrapper";
import SEOTemplate from "@/Components/SEOTemplate";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import { Utensils, Coffee, Wine } from "lucide-react";

const restaurantBarFeatures = [
    {
        title: "Fine Dining Restaurant",
        description:
            "Savor a fusion of Ugandan and international cuisines prepared by our expert chefs, using fresh, locally sourced ingredients.",
        icon: Utensils,
    },
    {
        title: "Cozy Coffee Lounge",
        description:
            "Relax in our coffee lounge with premium Ugandan coffee, light snacks, and a serene ambiance for conversations or work.",
        icon: Coffee,
    },
    {
        title: "Premium Cocktail Bar",
        description:
            "Enjoy handcrafted cocktails, wines, and spirits in a stylish setting with occasional live music and entertainment.",
        icon: Wine,
    },
    {
        title: "Fine Dining Restaurant",
        description:
            "Savor a fusion of Ugandan and international cuisines prepared by our expert chefs, using fresh, locally sourced ingredients.",
        icon: Utensils,
    },
    {
        title: "Cozy Coffee Lounge",
        description:
            "Relax in our coffee lounge with premium Ugandan coffee, light snacks, and a serene ambiance for conversations or work.",
        icon: Coffee,
    },
    {
        title: "Premium Cocktail Bar",
        description:
            "Enjoy handcrafted cocktails, wines, and spirits in a stylish setting with occasional live music and entertainment.",
        icon: Wine,
    },
];

export default function RestaurantAndBar() {
    return (
        <PublicLayout>
            <SEOTemplate
                title="Restaurant & Bar | FortBreeze Hotel"
                description="Indulge in a culinary journey at FortBreeze Hotel's restaurant and bar, offering exquisite dining and a vibrant atmosphere."
                keywords="FortBreeze Hotel, Fort Portal, Uganda, restaurant, bar, dining"
                url="https://fortbreezehotel.com/restaurant-and-bar"
                image="https://fortbreezehotel.com/images/bar.webp"
            />

            {/* Hero Section */}
            <HeroSection
                titles={["Visit Our Restaurant & Bar At FortBreeze Hotel"]}
                titleGradient="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"
                subtitle="Do not hesitate to leave your reservation. We handle all bookings with care and attention."
                bgColor="bg-gray-100 dark:bg-gray-800"
                image="/images/bar.webp"
                buttonText="Leave Your Reservation"
                buttonLink="/booking"
                buttonColor="bg-blue-600 text-white hover:bg-blue-700"
            />

            {/* Features Section */}
            <GradientWrapper
                from="#facc15"
                via="#f97316"
                to="#ef4444"
                overlayLight="rgba(255,255,255,0.75)"
                overlayDark="rgba(17,24,39,0.85)"
            >
                <SectionWrapper>
                    <SectionHeading
                        title="Culinary Excellence & Unmatched Ambiance"
                        subtitle="From breakfast to late-night drinks, we offer a world-class dining and bar experience."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {restaurantBarFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 text-center"
                            >
                                <feature.icon className="w-12 h-12 mx-auto text-orange-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </SectionWrapper>
            </GradientWrapper>

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
