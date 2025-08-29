import DotsBackground from "@/Components/DotsBackground";
import { GradientWrapper } from "@/Components/GradientWrapper";
import HeroSection from "@/Components/HeroSection";
import PictorialSection from "@/Components/PictorialSection";
import SectionHeading from "@/Components/SectionHeading";
import SectionWrapper from "@/Components/SectionWrapper";
import SEOTemplate from "@/Components/SEOTemplate";
import PublicLayout from "@/Layouts/PublicLayout";
import { Link } from "@inertiajs/react";

export default function About() {
    return (
        <PublicLayout title="About Us">
            <SEOTemplate
                title="About FortBreeze Hotel Fort Portal | Accommodation & Services"
                description="Learn about FortBreeze Hotel in Fort Portal Uganda - quality accommodation near Kibale National Park with comfortable rooms, dining, and convenient access to local attractions."
                keywords="FortBreeze Hotel, about FortBreeze, Fort Portal Uganda hotel, accommodation near Kibale National Park, hotel in Fort Portal, Uganda travel, Rwenzori Mountains hotel"
                url="https://fortbreezehotel.com/about"
                image="https://fortbreezehotel.com/images/mainentrance.webp"
            />

            <HeroSection
                titles={[
                    "About FortBreeze Hotel Fort Portal",
                    "Quality Accommodation in Western Uganda",
                    "Hotel Near Kibale National Park",
                ]}
                rotationSpeed={10000}
                subtitle="Experience comfortable accommodation and genuine hospitality in Fort Portal Uganda. At FortBreeze Hotel, we focus on providing a pleasant stay that combines comfort, local culture, and personalized service."
                image="/images/mainentrance.webp"
                bgColor="bg-gray-50 dark:bg-gray-800"
                buttonText="Learn More About Our Hotel"
                buttonLink="#about"
                buttonColor="bg-blue-600 text-white hover:bg-blue-700"
            />

            {/* About Content */}
            <DotsBackground
                dotColor={
                    ["#ef4444", "#facc15", "#22c55e", "#3b82f6"][
                        Math.floor(Math.random() * 4)
                    ]
                }
                baseColor="#e0f2fe" // light sky background
                minDotSize={20}
                maxDotSize={60}
                density={40}
                opacity={0.25}
            >
                <div className="max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-40 pb-16 sm:pb-24 lg:pb-32 mx-auto">
                    <h2
                        id="about"
                        className="text-2xl sm:text-3xl pt-12 sm:pt-20 lg:pt-24 font-bold text-gray-900 dark:text-gray-100 mb-6"
                    >
                        About FortBreeze Hotel in Fort Portal
                    </h2>

                    <div className="grid gap-10 lg:grid-cols-2">
                        {/* Left Column */}
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                Our Location in Fort Portal Uganda
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                Located in the beautiful foothills of the
                                Rwenzori Mountains, FortBreeze Hotel offers a
                                comfortable stay for travelers exploring Western
                                Uganda. Our hotel provides panoramic views of
                                Fort Portal's hills and convenient access to
                                local attractions like Kibale National Park.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                Accommodation in Fort Portal
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our well-appointed rooms and suites combine
                                modern amenities with comfortable furnishings.
                                Each accommodation option is designed to provide
                                a restful environment after a day of exploring
                                Fort Portal and the surrounding areas.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                Dining at Our Fort Portal Hotel
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                Our restaurant features a variety of dishes made
                                with locally sourced ingredients, blending
                                Ugandan flavors with international cuisine. We
                                focus on providing satisfying meals for all our
                                guests, whether you're here for business or
                                leisure.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                Exploring Western Uganda
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                FortBreeze Hotel serves as an ideal base for
                                discovering Western Uganda's natural wonders and
                                cultural heritage. We're conveniently located
                                for visits to Kibale National Park, crater
                                lakes, and other local attractions.
                            </p>
                        </div>
                    </div>
                </div>

                <SectionHeading
                    title="Discover FortBreeze Hotel Fort Portal"
                    subtitle="Experience comfortable accommodation and convenient access to attractions in Western Uganda"
                />

                {/* About content pictorial sections */}
                <section className="max-w-7xl mx-auto space-y-20 px-4 py-10 sm:px-6 lg:px-8">
                    <PictorialSection
                        image="/images/livingbed.webp"
                        alt="Comfortable room with view at FortBreeze Hotel Fort Portal"
                        title="Rooms with Views of Fort Portal"
                        text="Our hotel in Fort Portal Uganda offers comfortable rooms and suites with views of the surrounding hills. Each space is designed with your comfort in mind, providing a relaxing environment after exploring local attractions."
                        reverse={false}
                        buttonLink={route("booking")}
                        buttonText="Reserve Now"
                    />

                    <PictorialSection
                        image="/images/sittingchairs.webp"
                        alt="Dining at FortBreeze Hotel restaurant in Fort Portal"
                        title="Dining at Our Fort Portal Hotel"
                        text="Enjoy meals prepared with fresh local ingredients at our restaurant. We offer a mix of Ugandan dishes and international cuisine, providing satisfying options for all tastes during your stay in Fort Portal."
                        reverse={true}
                        buttonLink={route("booking")}
                        buttonText="Book Your Stay"
                    />

                    <PictorialSection
                        image="/images/gym.webp"
                        alt="Fitness center at FortBreeze Hotel Uganda"
                        title="Stay Active During Your Visit"
                        text="Maintain your workout routine at our fitness center during your stay. Whether you're here for business or leisure, our facilities help you stay active and energized while visiting Fort Portal Uganda."
                        reverse={false}
                        buttonLink={route("booking")}
                        buttonText="Get A Ticket Now"
                    />
                </section>
            </DotsBackground>

            {/* Additional SEO content */}

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
                                Our hotel is in a perfect spot in Fort Portal,
                                close to popular places like Kibale National
                                Park where you can see chimpanzees, the
                                beautiful Crater Lakes, and the Rwenzori
                                Mountains. This makes it easy to explore Western
                                Uganda's natural beauty and cultural sites.
                            </p>

                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                Comfortable Rooms with Modern Features
                            </h3>
                            <p className="text-gray-600">
                                We offer well-designed rooms and suites that
                                focus on your comfort. Each room has quality
                                beds, private bathrooms, air conditioning, and
                                modern entertainment options. Whether you're
                                here for work or vacation, our rooms provide a
                                comfortable place to rest after exploring Fort
                                Portal.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                Good Food and Dining Options
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Our restaurant serves both local Ugandan dishes
                                and international meals made with fresh
                                ingredients from the area. Our cooks prepare
                                tasty food that appeals to different tastes.
                                Eating at Fortbreeze is a enjoyable experience,
                                making us a popular choice for meals in Fort
                                Portal.
                            </p>

                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                Helpful Staff and Service
                            </h3>
                            <p className="text-gray-600">
                                At Fortbreeze Hotel, our team is dedicated to
                                making your stay pleasant. From our front desk
                                staff who can help plan trips to Kibale National
                                Park, to our restaurant and cleaning teams,
                                everyone works to ensure you have a good
                                experience. Our focus on good service has made
                                us a leading hotel in Fort Portal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
