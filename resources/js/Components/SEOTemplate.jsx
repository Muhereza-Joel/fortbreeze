import React from "react";
import { Head } from "@inertiajs/react";

export default function SEOTemplate({
    title,
    description,
    keywords = "",
    url,
    image,
    type = "website",
    children,
}) {
    const defaultTitle = "FortBreeze Hotel | Luxury in Fort Portal";
    const defaultDescription =
        "Experience unparalleled luxury and authentic hospitality at FortBreeze Hotel, Fort Portal, Uganda.";
    const defaultUrl = "https://fortbreeze.com";
    const defaultImage = "https://fortbreeze.com/images/og-image.jpg";

    return (
        <>
            <Head>
                {/* Title & Meta */}
                <title>{title || defaultTitle}</title>
                <meta
                    name="description"
                    content={description || defaultDescription}
                />
                {keywords && <meta name="keywords" content={keywords} />}
                <link rel="canonical" href={url || defaultUrl} />

                {/* Open Graph */}
                <meta property="og:title" content={title || defaultTitle} />
                <meta
                    property="og:description"
                    content={description || defaultDescription}
                />
                <meta property="og:type" content={type} />
                <meta property="og:url" content={url || defaultUrl} />
                <meta property="og:image" content={image || defaultImage} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title || defaultTitle} />
                <meta
                    name="twitter:description"
                    content={description || defaultDescription}
                />
                <meta name="twitter:image" content={image || defaultImage} />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Hotel",
                            name: title || "FortBreeze Hotel",
                            url: url || defaultUrl,
                            image: image || defaultImage,
                            description: description || defaultDescription,
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Fort Portal Tourism City",
                                addressLocality: "Fort Portal",
                                addressRegion: "Western Uganda",
                                postalCode: "0000",
                                addressCountry: "UG",
                            },
                            telephone: "+256-772-614705",
                        }),
                    }}
                />
            </Head>

            {children}
        </>
    );
}
