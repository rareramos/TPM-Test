import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
    const [scroll, setScroll] = useState([0]);
    useEffect(() => {
        const updateScroll = () => {
            setScroll([window.pageYOffset]);
        }

        window.addEventListener('scroll', updateScroll);
        updateScroll();
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);
    return scroll;
};

