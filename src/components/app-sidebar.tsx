import { Heart } from 'lucide-react';

// Existing imports
import { ROUTES } from '../routes/paths';  // Ensure ROUTES is imported if not already

function getNavMainData() {
    const navData = [
        // Existing navigation items
        {
            title: t('pages.fertility'),
            url: ROUTES.FERTILITY,
            icon: Heart,
            items: [
                { url: ROUTES.FERTILITY_TRACKING, title: t('fertility.tracking.title') },
                { url: ROUTES.FERTILITY_CALENDAR, title: t('fertility.calendar.title') },
                { url: ROUTES.FERTILITY_EDUCATION, title: t('fertility.education.title') },
                { url: ROUTES.FERTILITY_CONSULTATION, title: t('fertility.consultation.title') },
            ],
        },
        // Other existing items
    ];
    return navData;
}