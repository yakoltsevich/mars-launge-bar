import {notFound} from 'next/navigation';
import {hasLocale} from './dictionaries';
import {HomeIntro} from "@/components/home/HomeIntro";
import {HomeAtmosphere} from "@/components/home/HomeAtmosphere";
import {HomeMenuPreview} from "@/components/home/HomeMenuPreview";
import {Contacts} from "@/components/contact/Contacts";
import {PageProps} from "@/types/page";
import {HomeHappenings} from "@/components/home/HomeHappenings";
import {MainPageWrapper} from "@/components/common/MainPageWrapper";
import {getEvents} from "@/lib/strapi/events";

export default async function Home({params}: PageProps) {
    const {lang} = await params;
    const events = await getEvents(lang)
    if (!hasLocale(lang)) notFound();

    return (
        <MainPageWrapper className='max-w-7xl'>
            <HomeIntro/>
            <HomeHappenings events={events}/>
            <HomeAtmosphere/>
            <HomeMenuPreview/>
            <Contacts/>
        </MainPageWrapper>
    );
}
