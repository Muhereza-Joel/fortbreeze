import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        image: "/images/download.jpg",
        title: "Fortbreeze Hotel Fort Portal",
        subtitle: "Your serene retreat in the heart of Fort Portal.",
        description:
            "Relax and unwind in our beautiful hotel, where warm hospitality meets modern comfort. Whether you’re here for business or leisure, Fortbreeze offers a welcoming atmosphere surrounded by Fort Portal’s stunning natural beauty.",
        buttonText: "Book Now",
        buttonLink: "#book",
    },
    {
        id: 2,
        image: "/images/download2.jpg",
        title: "Quality You Can Trust",
        subtitle: "Exceptional service, every time.",
        description:
            "At Fortbreeze Hotel, we pride ourselves on delivering exceptional services and attention to detail. Enjoy elegantly appointed rooms, spotless facilities, and a dedicated team committed to making your stay perfect.",
        buttonText: "Explore Rooms",
        buttonLink: "#rooms",
    },
    {
        id: 3,
        image: "/images/download3.jpg",
        title: "Innovative Comfort",
        subtitle: "Modern amenities tailored for your convenience.",
        description:
            "From free high-speed Wi-Fi and conference rooms to modern dining options and relaxing lounge areas, Fortbreeze Hotel blends innovation and comfort to meet all your travel needs, ensuring a memorable and hassle-free stay.",
        buttonText: "View Amenities",
        buttonLink: "#amenities",
    },
];

// Text animation variants
const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};

export default function HomeSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => setCurrent(index);

    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            <AnimatePresence mode="wait">
                {slides.map((slide, index) =>
                    index === current ? (
                        <motion.div
                            key={slide.id}
                            className="absolute inset-0 w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/70"></div>

                            {/* Animated Text Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                                <motion.h1
                                    className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={1}
                                >
                                    {slide.title}
                                </motion.h1>
                                <motion.p
                                    className="text-xl md:text-2xl mb-4 drop-shadow-md"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={2}
                                >
                                    {slide.subtitle}
                                </motion.p>
                                <motion.p
                                    className="text-md md:text-lg max-w-2xl drop-shadow-sm"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={3}
                                >
                                    {slide.description}
                                </motion.p>

                                <motion.a
                                    href={slide.buttonLink}
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={4}
                                    className="mt-6 inline-block bg-gray-900 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg"
                                >
                                    {slide.buttonText}
                                </motion.a>
                            </div>
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>

            {/* Dots navigation */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            index === current ? "bg-white" : "bg-gray-400"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
