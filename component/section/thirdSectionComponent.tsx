// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import AnimatableComponent from "@/chunk/animatableComponent";
import SectionLinkComponent from "@/chunk/sectionLinkComponent";
import WorkComponent from "@/component/workComponent";
import SupremeImage from '@/public/assets/img/works/img-supreme.webp';
import ZenhubImage from '@/public/assets/img/works/img-zenhub.jpg';
import JrnyImage from '@/public/assets/img/works/img-jrny.webp';
import SearchIoImage from '@/public/assets/img/works/img-search-io.jpg';

// Creating And Exporting Third Section Component As Default
export default function ThirdSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'mb-[200px]'}>
            <main>
                <AnimatableComponent variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1}
                }}>
                    <div className={'flex gap-[20px] mb-[30px]'}>
                        <div className={'section-title-holder'}><h6 className={'section-title'}>WORK</h6></div>
                        <div className={'sm:w-[80%] w-[90%] grid lg:grid-cols-2 grid-cols-1 lg:gap-[100px] gap-[20px]'}>
                            <WorkComponent img={SupremeImage.src} title={'Supermove'}>Supermove underwent a complete overhaul of their brand and website strategy. Resulting in a sleek and accessible website.</WorkComponent>
                            <WorkComponent img={ZenhubImage.src} title={'Zenhub'}>Zenhub wanted a website that was more impactful. We did a redesign and tied it together with bold design, custom iconography and cohesive color.</WorkComponent>
                            <WorkComponent img={JrnyImage.src} title={'Jrny'}>Jrny wanted to ensure their new brand stood out from the competitors and offered users an experience that was tailored to their needs and designed to visually appeal to them.</WorkComponent>
                            <WorkComponent img={SearchIoImage.src} title={'Search.io'}>Looking for a complete design overhaul, renaming, search engine solutions company Search.io turned to SVZ Arrow leading you to our Webflow website portfolio pageOther recent work</WorkComponent>
                        </div>
                    </div>
                    <div className={'flex justify-end'}>
                        <div className={'sm:w-[calc(80%-16px)] w-[calc(90%-16px)] flex justify-start'}>
                            <SectionLinkComponent link={'#'}>Other recent work</SectionLinkComponent>
                        </div>
                    </div>
                </AnimatableComponent>
            </main>
        </section>
    );
}