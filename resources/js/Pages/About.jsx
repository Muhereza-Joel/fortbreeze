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
                image="https://fortbreeze.com/images/about-og.jpg"
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
                image="/images/download1.jpg"
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
                        image="/images/download1.jpg"
                        alt="Room with a view"
                        title="Serene Accommodations"
                        text="Nestled in the breathtaking foothills of the Rwenzori Mountains, FortBreeze Hotel offers elegantly appointed rooms and suites with panoramic views of Fort Portal’s iconic hills, blending modern amenities with timeless comfort."
                        reverse={false}
                    />

                    <PictorialSection
                        image="/images/download2.jpg"
                        alt="Signature restaurant dishes"
                        title="Exquisite Culinary Experiences"
                        text="Indulge your palate at our signature restaurant, where expert chefs craft exquisite dishes from locally sourced ingredients—blending authentic Ugandan flavors with international cuisine. Enjoy spa treatments and personalized concierge services tailored just for you."
                        reverse={true}
                    />

                    <PictorialSection
                        image="/images/download3.jpg"
                        alt="Cultural tour experience"
                        title="Unforgettable Adventures"
                        text="Whether visiting for business, leisure, or to explore Fort Portal’s rich cultural heritage and natural wonders, FortBreeze Hotel is your gateway to impeccable service and warm Ugandan hospitality. Create memories that will last a lifetime."
                        reverse={false}
                    />
                </section>
            </SectionWrapper>
        </PublicLayout>
    );
}
