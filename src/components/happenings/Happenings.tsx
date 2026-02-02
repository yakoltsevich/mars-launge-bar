'use client'
import {DirectionalLink} from "@/components/common/DirectionalLink";
import {tByKey} from "@/shared/helpers/tByKey";
import React from "react";
import {isToday} from "@/shared/helpers/isToday";
import {HappeningsCard} from "@/components/happenings/HappeningsCard";
import {HappeningsCardContent} from "@/components/happenings/HappeningsCardContent";
import {EventData, SpecialsData} from "@/lib/happenings";
import {useDict} from "@/components/i18n/I18nProvider";


type Props = {
    events: EventData[];
    specials: SpecialsData[];
};

export const HappeningsCenter = ({events, specials}: Props) => {
    const dict = useDict();

    return (
        <div className="flex flex-col sm:flex-row justify-center w-full gap-6">
            <div className='w-full'>
                <h2 className="text-center text-[24px] tracking-[0.22em] uppercase text-white/85 mb-2 sm:mb-8">
                    {tByKey(dict, 'happenings.titleEvents')}
                </h2>

                <HappeningsCard>
                    {
                        events.map((event) => (
                            <HappeningsCardContent
                                key={event.id}
                                titleKey={`happenings.events.${event.id}.title`}
                                date={event.date}
                                meta={event.timePeriod}
                                descriptionKey={`happenings.events.${event.id}.description`}
                            />
                        ))
                    }
                </HappeningsCard>
            </div>
            <div className='w-full'>
                <h2 className="text-center text-[24px] tracking-[0.22em] uppercase text-white/85 mb-2 sm:mb-8">
                    {tByKey(dict, 'happenings.titleSpecials')}
                </h2>
                <HappeningsCard>
                    {
                        specials.map((special) => (
                            <HappeningsCardContent
                                key={special.id}
                                titleKey={`happenings.specials.${special.id}.title`}
                                dayKey={`happenings.specials.days.${special.day}`}
                                isToday={isToday(special.id)}
                                descriptionKey={`happenings.specials.${special.id}.description`}
                            />
                        ))
                    }
                </HappeningsCard>
            </div>


        </div>
    );
};

