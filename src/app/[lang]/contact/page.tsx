import {CONTACT_DATA} from "@/components/contact/contactData";
import {GoogleMapEmbed} from "@/components/contact/GoogleMapEmbed";
import {PageProps} from "@/types/page";
import {Contacts} from "@/components/contact/Contacts";
import {MainPageWrapper} from "@/components/common/MainPageWrapper";

export default function ContactPage({params}: PageProps) {
    return (
        <MainPageWrapper>
            <Contacts/>
            <GoogleMapEmbed query={CONTACT_DATA.mapQuery}/>
        </MainPageWrapper>
    );
}
