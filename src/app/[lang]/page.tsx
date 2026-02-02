import {notFound} from 'next/navigation';
import {hasLocale} from './dictionaries';
import {HomeIntro} from "@/components/home/HomeIntro";
import {HomeAtmosphere} from "@/components/home/HomeAtmosphere";
import {HomeMenuPreview} from "@/components/home/HomeMenuPreview";
import {HomeContacts} from "@/components/home/HomeContacts";
import {PageProps} from "@/types/page";
import {HomeHappenings} from "@/components/home/HomeHappenings";
import {MainPageWrapper} from "@/components/common/MainPageWrapper";

export default async function Home({params}: PageProps) {
    const {lang} = await params;

    if (!hasLocale(lang)) notFound();

    return (
        <MainPageWrapper className='max-w-7xl'>
            <HomeIntro/>
            <HomeHappenings/>
            <HomeAtmosphere/>
            <HomeMenuPreview/>
            <HomeContacts/>
        </MainPageWrapper>
    );
}
