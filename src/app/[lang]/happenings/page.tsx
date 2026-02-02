import {getMenuCategories} from "@/lib/menu";
import {MenuCategory} from "@/types/menu";
import {getDictionary} from "@/app/[lang]/dictionaries";
import {PageProps} from "@/types/page";
import React from "react";
import {HappeningsCenter} from "@/components/happenings/Happenings";
import {getEvents, getSpecials} from "@/lib/happenings";
import {MainPageWrapper} from "@/components/common/MainPageWrapper";

export default async function HappeningsPage({params}: PageProps) {
    const categories: MenuCategory[] = getMenuCategories();
    const {lang} = await params;
    const dict = await getDictionary(lang);
    const events = getEvents()
    const specials = getSpecials()
    return (
        <MainPageWrapper>
            <HappeningsCenter events={events} specials={specials}/>
        </MainPageWrapper>
    );
}
