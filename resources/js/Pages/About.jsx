import HeroSection from "@/Components/HeroSection";
import PictorialSection from "@/Components/PictorialSection";
import SectionHeading from "@/Components/SectionHeading";
import SectionWrapper from "@/Components/SectionWrapper";
import SEOTemplate from "@/Components/SEOTemplate";
import PublicLayout from "@/Layouts/PublicLayout";

export default function About() {
    return (
        <PublicLayout title="About Us">
            <SEOTemplate
                title="About FortBreeze Hotel | Luxury in Fort Portal"
                description="Learn about FortBreeze Hotel, its luxurious rooms, exquisite dining, and unforgettable experiences in Fort Portal, Uganda."
                keywords="FortBreeze Hotel, Fort Portal, Uganda, luxury hotel, accommodations, restaurant"
                url="https://fortbreeze.com/about"
                image="https://fortbreeze.com/images/mainentrance.webp"
            />
            <HeroSection
                titles={[
                    "About FortBreeze Hotel",
                    "Luxury in the Heart of Uganda",
                    "Experience Rwenzori Magic",
                ]}
                // animationMode="typing"
                // typingSpeed={120}
                rotationSpeed={10000}
                subtitle="Experience unparalleled luxury and authentic hospitality in the heart of Fort Portal. At FortBreeze Hotel, we are dedicated to delivering an exceptional stay that blends comfort, culture, and personalized service."
                image="/images/mainentrance.webp"
                bgColor="bg-green-100 dark:bg-gray-800"
                buttonText="Read More About Us"
                buttonLink="#about"
                buttonColor="bg-blue-600 text-white hover:bg-blue-700"
            />

            {/* About Content */}
            <SectionWrapper className="bg-orange-50 dark:bg-gray-900 py-16">
                <h2
                    id="about"
                    className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4"
                >
                    Our Journey from the Start
                </h2>
                <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-lg max-w-7xl mx-auto">
                    Nestled in the breathtaking foothills of the Rwenzori
                    Mountains, FortBreeze Hotel offers a refined sanctuary for
                    discerning travelers seeking the perfect balance between
                    relaxation and adventure. Our elegantly appointed rooms and
                    suites boast panoramic views of Fort Portal’s iconic hills,
                    combining modern amenities with timeless comfort.
                </p>

                <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-lg max-w-7xl mx-auto">
                    Indulge your palate at our signature restaurant, where
                    expert chefs craft exquisite dishes from locally sourced
                    ingredients — blending authentic Ugandan flavors with
                    international cuisine. Enhance your stay with rejuvenating
                    spa treatments, immersive cultural tours, and personalized
                    concierge services designed to cater to your every need.
                </p>

                <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-lg max-w-7xl mx-auto">
                    Whether you’re visiting Fort Portal for business, leisure,
                    or to explore its rich cultural heritage and natural
                    wonders, FortBreeze Hotel stands as a beacon of impeccable
                    service and warm Ugandan hospitality. We warmly invite you
                    to create unforgettable memories with us.
                </p>
            </SectionWrapper>

            {/* Main heading */}
            <SectionWrapper>
                <SectionHeading
                    title="Discover the Essence of FortBreeze Hotel"
                    subtitle="Experience comfort, luxury, and adventure in the heart of Fort Portal"
                />
                {/* About content pictorial sections */}
                <section className="max-w-7xl mx-auto space-y-20 px-4 sm:px-6 lg:px-8">
                    <PictorialSection
                        image="/images/livingbed.webp"
                        alt="Room with a view"
                        title="Elegant Rooms and Suites"
                        text="Set in the stunning foothills of the Rwenzori Mountains, Fortbreeze Hotel offers stylish rooms and suites with sweeping views of Fort Portal’s hills. Each space blends modern comforts with timeless charm, giving you the perfect place to relax and feel at home."
                        reverse={false}
                    />

                    <PictorialSection
                        image="/images/sittingchairs.webp"
                        alt="Signature restaurant dishes"
                        title="Authentic Flavors, Global Taste"
                        text="Treat yourself at our signature restaurant, where skilled chefs prepare delicious meals made with fresh local ingredients—mixing authentic Ugandan flavors with international cuisine. Relax with our spa treatments and enjoy concierge services designed just for you."
                        reverse={true}
                    />

                    <PictorialSection
                        image="/images/gym.webp"
                        alt="Cultural tour experience"
                        title="Stay Active and Energized"
                        text="Whether you’re here for business or leisure, our modern fitness centre helps you keep up with your workout routine. From cardio to strength training, enjoy a well-equipped gym and friendly atmosphere. Recharge your body, stay healthy, and make the most of your stay at Fortbreeze Hotel."
                        reverse={false}
                    />
                </section>
            </SectionWrapper>
        </PublicLayout>
    );
}
