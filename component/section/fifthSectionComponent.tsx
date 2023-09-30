// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import AnimatableComponent from "@/chunk/animatableComponent";
import IconComponent from "@/chunk/iconComponent";
import WebflowImage from '@/public/assets/img/resources/img-webflow-logo.svg';
import MobileImage from '@/public/assets/img/resources/img-mobile.png';
import SectionLinkComponent from "@/chunk/sectionLinkComponent";

// Creating And Exporting Fifth Section Component As Default
export default function FifthSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'mb-[200px]'}>
            <main>
                <AnimatableComponent variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1}
                }}>
                    <div className={'flex gap-[20px] mb-[30px]'}>
                        <div className={'section-title-holder'}><h6 className={'section-title'}>RESOURCES</h6></div>
                        <div className={'sm:w-[80%] w-[90%] grid lg:grid-cols-3 grid-cols-1 lg:gap-[100px] gap-[50px]'}>
                            <div>
                                <a className={'bg-[#288eff] block group relative lg:w-auto w-full'} href="#">
                                    <div className={'dust-texture absolute top-0 left-0 opacity-50 w-full h-full'} />
                                    <div className={'p-[20px]'}>
                                        <img className={'w-full mb-[30px]'} src={WebflowImage.src} alt="Webflow Expoerts"/>
                                        <span className={'text-white text-center text-[20px] font-normal block mb-[30px]'}>We’re a Webflow Enterprise Partner Agency</span>
                                    </div>
                                    <img src={MobileImage.src} alt="Image Of A Phone" className={'w-full mb-[50px]'}/>
                                    <div className={'py-[20px] px-[30px] flex justify-center items-center'}>
                                        <button tabIndex={-1} className={'flex border border-white items-center gap-[10px] w-[80%] group-hover:scale-110 transition duration-500 p-[10px]'}>
                                            <span className={'shrink-0 text-white'}><IconComponent name={'chevron-right'} size={16} /></span>
                                            <span className={'text-white text-[16px] truncate'}>Why Webflow?</span>
                                        </button>
                                    </div>
                                </a>
                            </div>
                            <div className={'lg:col-span-2 relative'}>
                                <div className={'lg:bg-green-500 lg:aspect-square w-full rounded-full flex justify-center items-center lg:p-[100px] p-0'}>
                                    <div className={'lg:aspect-square w-full rounded-full bg-black flex flex-col gap-[10px] justify-center lg:p-[50px] p-0'}>
                                        <span className={'block lg:text-[34px] text-[20px] text-white'}>FAQs</span>
                                        <span className={'block text-white text-[18px] font-serif lg:truncate'}>Questions about working with SVZ? We have you covered.</span>
                                        <SectionLinkComponent link={'#'}>Get Answers</SectionLinkComponent>
                                    </div>
                                </div>
                                <div className={'aspect-square w-[150px] bg-pink-500 rounded-full mx-auto lg:block hidden'} />
                                <div className={'dust-texture absolute top-0 left-0 opacity-50 w-full h-full pointer-events-none'} />
                            </div>
                        </div>
                    </div>
                </AnimatableComponent>
            </main>
        </section>
    );
}