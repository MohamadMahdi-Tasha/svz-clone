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
                        <div className={'sm:w-[80%] w-[90%] flex gap-[100px]'}>
                            <a className={'bg-[#288eff]'} href="#">
                                <img src={WebflowImage.src} alt="Webflow Expoerts"/>
                                <span>We’re a Webflow Enterprise Partner Agency</span>
                                <img src={MobileImage.src} alt="Image Of A Phone"/>
                                <button>
                                    <IconComponent name={'chevron-right'} size={16} />
                                    <span>Why Webflow?</span>
                                </button>
                            </a>
                            <div>
                                <div>
                                    <div>
                                        <span>FAQs</span>
                                        <span>Questions about working with SVZ? We have you covered.</span>
                                        <SectionLinkComponent link={'#'}>Get Answers</SectionLinkComponent>
                                    </div>
                                </div>
                                <div />
                            </div>
                        </div>
                    </div>
                </AnimatableComponent>
            </main>
        </section>
    );
}