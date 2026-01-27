import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from './dictionaries';
import {HomeIntro} from "@/components/home/HomeIntro";
import {HomeAtmosphere} from "@/components/home/HomeAtmosphere";
import {HomeMenuPreview} from "@/components/home/HomeMenuPreview";
import {HomeContacts} from "@/components/home/HomeContacts";

export default async function Home({ params }: PageProps<'/[lang]'>) {
    const { lang } = await params;

    if (!hasLocale(lang)) notFound();

    const dict = await getDictionary(lang);

    return (
        <main>
            <HomeIntro/>
            <HomeAtmosphere/>
            <HomeMenuPreview />
            <HomeContacts />
        </main>
    );
}
