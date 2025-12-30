import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Prevent browser from trying to restore scroll position on history navigation
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const handleScroll = () => {
            if (hash) {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                window.scrollTo(0, 0);
            }
        };

        handleScroll();

        // Fallback for some browsers/situations where layout might not be ready immediately
        const timer = setTimeout(handleScroll, 0);
        return () => clearTimeout(timer);

    }, [pathname, hash]);

    return null;
}
