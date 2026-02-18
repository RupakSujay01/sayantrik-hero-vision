import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export const SEO = ({
    title,
    description = "Sayantrik Engineers India Pvt Ltd - Premier engineering and integration partner in the energy and chemicals sector.",
    keywords = "engineering, procurements, construction, EPCM, oil and gas, petrochemical, India, Sayantrik",
    image = "/og-image.jpg",
    url
}: SEOProps) => {
    const siteUrl = window.location.origin;
    const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl;
    const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title} | Sayantrik Engineers</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={`${title} | Sayantrik Engineers`} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={`${title} | Sayantrik Engineers`} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
        </Helmet>
    );
};
