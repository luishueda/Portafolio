import { useEffect } from 'react';

const defaultTitle = 'Luis Hueda | Desarrollo web y sistemas personalizados';
const defaultDescription = 'Luis Hueda desarrolla páginas web y sistemas personalizados para negocios que buscan soluciones digitales modernas y funcionales.';

const usePageMetadata = (title = defaultTitle, description = defaultDescription) => {
    useEffect(() => {
        document.title = title;
        const descriptionElement = document.querySelector('meta[name="description"]');
        const openGraphTitle = document.querySelector('meta[property="og:title"]');
        const openGraphDescription = document.querySelector('meta[property="og:description"]');

        if (descriptionElement) descriptionElement.setAttribute('content', description);
        if (openGraphTitle) openGraphTitle.setAttribute('content', title);
        if (openGraphDescription) openGraphDescription.setAttribute('content', description);
    }, [description, title]);
};

export default usePageMetadata;
