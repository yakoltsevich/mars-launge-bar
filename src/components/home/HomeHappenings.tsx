'use client'
import {DirectionalLink} from "@/components/common/DirectionalLink";
import {useDict} from "@/components/i18n/I18nProvider";
import {tByKey} from "@/shared/helpers/tByKey";
import React from "react";
import {HappeningsCenter} from "@/components/happenings/Happenings";
import {HomeIntro} from "@/components/home/HomeIntro";
import {getEvents, getSpecials} from "@/lib/happenings";
import {getNearestUpcomingOrLast} from "@/shared/helpers/getNearestUpcomingOrLast";
import {getNearestDay} from "@/shared/helpers/getNearestDay";

export const HOME_HAPPENINGS_DATA = {
    viewAll: {labelKey: "happenings.seeAll", href: "/happenings"},
};

export const HomeHappenings = () => {
    const {viewAll} = HOME_HAPPENINGS_DATA;
    const dict = useDict();

    const events = [getNearestUpcomingOrLast(getEvents())]
    const specials = [getNearestDay(getSpecials())]

    return (
        <section className="py-7 sm:py-14">
                <HappeningsCenter events={events} specials={specials}/>

                <div className="mt-2 sm:mt-4 flex justify-center">
                    <DirectionalLink href={viewAll.href} title={tByKey(dict, viewAll.labelKey) + ' →'}/>
                </div>
        </section>
    );
};
