import {HomeIntro} from "@/components/home/HomeIntro";
import {HomeAtmosphere} from "@/components/home/HomeAtmosphere";
import {HomeMenuPreview} from "@/components/home/HomeMenuPreview";
import {HomeContacts} from "@/components/home/HomeContacts";

export default function Home() {
    return (
        <main>
            <HomeIntro/>
            <HomeAtmosphere/>
            <HomeMenuPreview />
            <HomeContacts />
        </main>
    );
}
