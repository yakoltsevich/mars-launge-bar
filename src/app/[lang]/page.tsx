import {notFound} from 'next/navigation';
import {getDictionary, hasLocale} from './dictionaries';
import {HomeIntro} from "@/components/home/HomeIntro";
import {HomeAtmosphere} from "@/components/home/HomeAtmosphere";
import {HomeMenuPreview} from "@/components/home/HomeMenuPreview";
import {HomeContacts} from "@/components/home/HomeContacts";
import {PageProps} from "@/types/page";
import {AtmosphereSlider} from "@/components/common/AtmosphereSlider";

export default async function Home({params}: PageProps) {
    const {lang} = await params;

    if (!hasLocale(lang)) notFound();

    const dict = await getDictionary(lang);

    return (
        <main>
            <HomeIntro/>
            <HomeAtmosphere/>

            <HomeMenuPreview/>
            <HomeContacts/>
        </main>
    );
}
