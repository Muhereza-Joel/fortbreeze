import CallToAction from "@/Components/CallToAction";
import FeatureGrid from "@/Components/FeatureGrid";
import { GradientWrapper } from "@/Components/GradientWrapper";
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
            title: "Luxury Accommodation in Fort Portal",
            description:
                "Experience our spacious, elegantly furnished rooms with stunning views of Fort Portal's rolling hills and the Rwenzori Mountains. Our luxury hotel offers the best accommodation in Fort Portal Uganda with premium amenities and comfort.",
            icon: BedDouble,
        },
        {
            title: "Fine Dining Restaurant Fort Portal",
            description:
                "Savor authentic Ugandan dishes and international cuisine crafted from fresh local ingredients. Our restaurant in Fort Portal offers the best dining experience with a sophisticated ambiance and excellent service.",
            icon: Utensils,
        },
        {
            title: "Airport Transfers & Transportation Services",
            description:
                "Enjoy reliable and comfortable transport services connecting you to Kasese Airport and key Fort Portal attractions. We provide convenient airport transfers and local transportation for all our guests.",
            icon: Car,
        },
        {
            title: "Spa & Wellness Center Fort Portal",
            description:
                "Unwind with rejuvenating massages, wellness therapies, and access to our sauna and relaxation lounges. Our spa services offer the perfect relaxation experience during your stay in Uganda.",
            icon: Heart,
        },
        {
            title: "Nature Tours & Cultural Experiences",
            description:
                "Explore nearby natural wonders like Kibale National Park and Crater Lakes, or immerse yourself in local Tooro cultural heritage. We offer guided tours to the best attractions in Western Uganda.",
            icon: Trees,
        },
        {
            title: "High-Speed Wi-Fi & Modern Amenities",
            description:
                "Stay connected with complimentary, reliable internet access throughout our hotel. We provide all the modern amenities you need for both business and leisure travel in Uganda.",
            icon: Wifi,
        },
    ];

    return (
        <PublicLayout>
            <SEOTemplate
                title="Welcome to Fortbreeze Hotel | Best Accommodation in Fort Portal Uganda"
                description="Located in the heart of Fort Portal along Saaka Road Just 0.8Km From Fort Portal City. Fortbreeze Hotel, your perfect getaway in Fort Portal. Enjoy stunning views, fine dining, and convenient access to Kibale National Park and other attractions."
                keywords="Fortbreeze Hotel, Fort Portal Uganda, luxury hotel, accommodation Fort Portal, Kibale National Park hotel, best hotel Fort Portal, Uganda tourism"
                url="https://fortbreezehotel.com"
                image="https://fortbreezehotel.com/images/entrance2.webp"
            />

            <HomeSlider />

            <HeroSectionWithCTA
                title="Fortbreeze Hotel Fort Portal"
                subtitle="Comfortable accommodation in Western Uganda"
                description="Experience quality hospitality at Fortbreeze Hotel, nestled among beautiful views of Fort Portal's landscape. Enjoy the natural beauty around us—from green landscapes to the stunning Rwenzori Mountains. Perfect for both quiet getaways and adventures, with convenient access to Kibale National Park and other Uganda attractions."
                buttonText="Book Your Stay"
                buttonLink={route("booking")}
                image="/images/sittingchairs.webp"
                imagePosition="right"
                bgColor="bg-white"
                textColor="text-gray-900"
                titleGradient="bg-gradient-to-r from-purple-600 to-pink-500"
                enableMorph={true}
            />

            <HeroSectionWithCTA
                title="We Have The Best Rooms & Suites in Fort Portal"
                subtitle="Well-appointed accommodation for every traveler"
                description="Discover comfortable and stylish rooms designed for both business and leisure travelers. At Fortbreeze Hotel, we focus on creating a welcoming atmosphere with modern amenities blended with local touches. Our accommodation options range from standard rooms to executive suites, all designed with your comfort in mind."
                buttonText="Explore Our Rooms"
                buttonLink={route("rooms")}
                image="/images/roomsitting2.webp"
                imagePosition="left"
                bgColor="bg-white"
                textColor="text-gray-900"
                titleGradient="bg-gradient-to-r from-teal-500 to-cyan-500"
                enableMorph={true}
            />

            <HeroSectionWithCTA
                title="Fortbreeze Hotel is Near Kibale National Park and Rwenzori Mountains"
                subtitle="Your base for exploring Western Uganda"
                description="Stay at Fortbreeze Hotel for convenient access to chimpanzee tracking in Kibale Forest and other local attractions. Enjoy our comfortable suites, modern amenities like high-speed internet, and peaceful gardens. We're the ideal choice for travelers looking to explore Fort Portal's natural wonders while enjoying quality accommodation."
                buttonText="Visit Us Today"
                buttonLink={route("booking")}
                image="/images/entrance2.webp"
                imagePosition="right"
                bgColor="bg-white"
                textColor="text-gray-900"
                titleGradient="bg-gradient-to-r from-orange-500 to-yellow-400"
                enableMorph={true}
            />

            {/* Additional SEO-rich content section */}
            <GradientWrapper
                from="#7c4a1a" // warm brown
                via="#d97706" // golden yellow
                to="#fef3c7" // soft cream
                overlayLight="rgba(255,255,255,0.75)"
                overlayDark="rgba(17,24,39,0.85)"
            >
                <SectionWrapper>
                    <SectionHeading
                        title="Hotel Amenities & Services | Fortbreeze Hotel Fort Portal"
                        subtitle="Experience comfort, luxury, and adventure in the heart of Fort Portal Uganda"
                    />
                    <FeatureGrid items={services} />
                </SectionWrapper>
                <section className="py-16 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                            Why Stay at Fortbreeze Hotel in Fort Portal?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                    Great Location in Fort Portal
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Our hotel is in a perfect spot in Fort
                                    Portal, close to popular places like Kibale
                                    National Park where you can see chimpanzees,
                                    the beautiful Crater Lakes, and the Rwenzori
                                    Mountains. This makes it easy to explore
                                    Western Uganda's natural beauty and cultural
                                    sites.
                                </p>

                                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                    Comfortable Rooms with Modern Features
                                </h3>
                                <p className="text-gray-600">
                                    We offer well-designed rooms and suites that
                                    focus on your comfort. Each room has quality
                                    beds, private bathrooms, air conditioning,
                                    and modern entertainment options. Whether
                                    you're here for work or vacation, our rooms
                                    provide a comfortable place to rest after
                                    exploring Fort Portal.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                    Good Food and Dining Options
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Our restaurant serves both local Ugandan
                                    dishes and international meals made with
                                    fresh ingredients from the area. Our cooks
                                    prepare tasty food that appeals to different
                                    tastes. Eating at Fortbreeze is a enjoyable
                                    experience, making us a popular choice for
                                    meals in Fort Portal.
                                </p>

                                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                    Helpful Staff and Service
                                </h3>
                                <p className="text-gray-600">
                                    At Fortbreeze Hotel, our team is dedicated
                                    to making your stay pleasant. From our front
                                    desk staff who can help plan trips to Kibale
                                    National Park, to our restaurant and
                                    cleaning teams, everyone works to ensure you
                                    have a good experience. Our focus on good
                                    service has made us a leading hotel in Fort
                                    Portal.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </GradientWrapper>

            {/* Call to Action */}
            <CallToAction
                title="Dine With Us at Fortbreeze Hotel Restaurant"
                text="Reserve a table and enjoy an unforgettable culinary journey at FortBreeze Hotel. Experience the best dining in Fort Portal with our exquisite menu featuring local Ugandan flavors and international cuisine."
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
