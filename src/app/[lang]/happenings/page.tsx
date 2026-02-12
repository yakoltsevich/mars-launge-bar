import {PageProps} from "@/types/page";
import React from "react";
import {HappeningsCenter} from "@/components/happenings/Happenings";
import {getSpecials} from "@/lib/happenings";
import {MainPageWrapper} from "@/components/common/MainPageWrapper";
import {getEvents} from "@/lib/strapi/events";

export default async function HappeningsPage({params}: PageProps) {
    const {lang} = await params
    const events = await getEvents(lang)
    const specials = getSpecials()

    return (
        <MainPageWrapper>
            <HappeningsCenter events={events} specials={specials}/>
        </MainPageWrapper>
    );
}
