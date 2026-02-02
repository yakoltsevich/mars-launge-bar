'use client'
import {useDict} from "@/components/i18n/I18nProvider";
import {HomeMenuPreview} from "@/components/home/HomeMenuPreview";
import {HomeContacts} from "@/components/home/HomeContacts";
import {tByKey} from "@/shared/helpers/tByKey";
import {BigCardWrapper} from "@/components/common/BigCardWrapper";
import {AtmosphereSlider} from "@/components/common/AtmosphereSlider";

export const HomeAtmosphere = () => {
    const dict = useDict();

    return (
        <BigCardWrapper>
            <div className="flex flex-col gap-4 sm:flex-row w-full px-0 sm:py-10 sm:px-12">
                <div className="w-full sm:w-1/2 sm:px-4 flex-col my-auto p-4">
                    <h2 className="text-[24px] tracking-[0.22em] uppercase text-white/85 text-center">
                        {tByKey(dict, 'home.atmosphere.title')}
                    </h2>

                    <p className="mt-5 text-[14px] leading-6 text-white/60 text-center">{tByKey(dict, 'home.atmosphere.text')}</p>
                </div>
                <AtmosphereSlider
                    slides={[
                        {src: '/images/common/bar.jpg', alt: 'Mars lounge interior 1'},
                        {src: '/images/common/bar2.jpg', alt: 'Mars lounge interior 2'},
                        {src: '/images/common/outside.jpg', alt: 'Mars lounge interior 3'},
                        {src: '/images/common/shisha.jpg', alt: 'Mars lounge interior 3'},
                        {src: '/images/common/vip-room.jpg', alt: 'Mars lounge interior 3'},
                    ]}
                    className=" w-full max-w-full sm:w-1/2 sm:max-w-1/2"
                />
            </div>
        </BigCardWrapper>

    );
};
