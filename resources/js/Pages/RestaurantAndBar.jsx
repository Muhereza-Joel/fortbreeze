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
        title: "Restaurant in Fort Portal Uganda",
        description:
            "Enjoy Ugandan and international dishes prepared with fresh local ingredients at our Fort Portal restaurant. Our chefs create flavorful meals for all tastes.",
        icon: Utensils,
    },
    {
        title: "Coffee Lounge in Fort Portal",
        description:
            "Relax with Ugandan coffee, light snacks, and a comfortable atmosphere at our coffee lounge in Fort Portal. Perfect for meetings or quiet time.",
        icon: Coffee,
    },
    {
        title: "Bar in Fort Portal Hotel",
        description:
            "Enjoy drinks, wines, and cocktails at our bar in Fort Portal. We offer a pleasant setting with music and entertainment options.",
        icon: Wine,
    },
    {
        title: "Dining in Fort Portal Uganda",
        description:
            "Experience satisfying meals at our Fort Portal restaurant. We serve a variety of dishes using locally sourced ingredients from the region.",
        icon: Utensils,
    },
    {
        title: "Coffee Break in Fort Portal",
        description:
            "Take a break with quality coffee and snacks at our Fort Portal hotel. Our coffee lounge provides a comfortable space to relax.",
        icon: Coffee,
    },
    {
        title: "Evening Drinks in Fort Portal",
        description:
            "Unwind with evening drinks at our bar in Fort Portal Uganda. We offer a selection of beverages in a welcoming atmosphere.",
        icon: Wine,
    },
];

export default function RestaurantAndBar() {
    return (
        <PublicLayout>
            <SEOTemplate
                title="Restaurant & Bar in Fort Portal Uganda | FortBreeze Hotel"
                description="Enjoy dining and drinks at FortBreeze Hotel's restaurant and bar in Fort Portal Uganda. Featuring local Ugandan dishes, coffee lounge, and bar services."
                keywords="FortBreeze Hotel restaurant, dining Fort Portal Uganda, bar in Fort Portal, coffee lounge Fort Portal, Uganda cuisine, Fort Portal dining"
                url="https://fortbreezehotel.com/restaurant-and-bar"
                image="https://fortbreezehotel.com/images/bar.webp"
            />

            {/* Hero Section */}
            <HeroSection
                titles={["Restaurant & Bar at FortBreeze Hotel Fort Portal"]}
                titleGradient="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"
                subtitle="Enjoy dining and drinks at our Fort Portal restaurant and bar. We offer a variety of dishes and beverages in a comfortable setting."
                bgColor="bg-gray-50 dark:bg-gray-800"
                image="/images/bar.webp"
                buttonText="Make a Reservation"
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
                        title="Dining & Drinks at Our Fort Portal Hotel"
                        subtitle="Enjoy meals and beverages at our restaurant and bar in Fort Portal Uganda, featuring local flavors and comfortable atmosphere"
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
                title="Dine at Our Fort Portal Restaurant"
                text="Reserve a table at our restaurant in Fort Portal Uganda and enjoy a satisfying meal with local flavors."
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
