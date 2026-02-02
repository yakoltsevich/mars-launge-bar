import events from '@/content/events.json';
import specials from '@/content/specials.json';

export type EventData = {
    id: string;
    date: string;
    timePeriod: string | null;
};

export type SpecialsData = {
    id: string;
    day: string;
};

export const getEvents = (): EventData[] => {
    return events;
};

export const getSpecials = (): SpecialsData[] => {
    return specials;
};
