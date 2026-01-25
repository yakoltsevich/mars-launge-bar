import { CONTACT_DATA } from "@/components/contact/contactData";
import { ContactHeroCard } from "@/components/contact/ContactHeroCard";
import { ContactInfoRow } from "@/components/contact/ContactInfoRow";
import { GoogleMapEmbed } from "@/components/contact/GoogleMapEmbed";

export default function ContactPage() {
    return (
        <main>
            <ContactHeroCard
                title={CONTACT_DATA.title}
                placeCode={CONTACT_DATA.placeCode}
                address={CONTACT_DATA.address}
                phone={CONTACT_DATA.phone}
                email={CONTACT_DATA.email}
                socials={CONTACT_DATA.socials}
                heroImageUrl={CONTACT_DATA.heroImageUrl}
            />

            <ContactInfoRow address={CONTACT_DATA.address} workTime={CONTACT_DATA.workTime} />

            <GoogleMapEmbed query={CONTACT_DATA.mapQuery} />
        </main>
    );
}
