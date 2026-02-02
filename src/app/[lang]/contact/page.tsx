import {CONTACT_DATA} from "@/components/contact/contactData";
import {ContactHeroCard} from "@/components/contact/ContactHeroCard";
import {ContactInfoRow} from "@/components/contact/ContactInfoRow";
import {GoogleMapEmbed} from "@/components/contact/GoogleMapEmbed";
import {PageProps} from "@/types/page";
import {HomeContacts} from "@/components/home/HomeContacts";
import {MainPageWrapper} from "@/components/common/MainPageWrapper";

export default function ContactPage({params}: PageProps) {
    return (
        <MainPageWrapper>
            <HomeContacts/>
            <GoogleMapEmbed query={CONTACT_DATA.mapQuery}/>
        </MainPageWrapper>
    );
}
