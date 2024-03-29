// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import SectionLinkComponent from "@/chunk/sectionLinkComponent";
import AnimatableComponent from "@/chunk/animatableComponent";
import CompanysImage from "@/public/assets/img/img-companys.webp";
import ProductComponent from "@/component/productComponent";

// Creating And Exporting Second Section Component As Default
export default function SecondSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'mb-[200px]'}>
            <main>
                <AnimatableComponent variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1}
                }}>
                    <div className={'relative mx-auto mb-[50px]'}>
                        <div className={'absolute w-[200px] h-full left-0 top-0 z-10 bg-gradient-to-l from-transparent to-black'} />
                        <img src={CompanysImage.src} className={'w-full mx-auto z-0 opacity-50'} alt="Companys Logo"/>
                        <div className={'absolute w-[200px] h-full right-0 top-0 z-10 bg-gradient-to-r from-transparent to-black'} />
                    </div>
                    <div className={'flex gap-[20px] mb-[30px]'}>
                        <div className={'section-title-holder'}><h6 className={'section-title'}>PRODUCTS</h6></div>
                        <div className={'grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:w-[80%] w-[90%] border border-white/30'}>
                            <ProductComponent title={'Suite'} icon={'circle'} iconColor={'bg-blue-500'}>Whether you need a full scope project or just ad-hoc work, SVZ has you covered. Our end-to-end suite of agency services can be customized to fit your Enterprise needs, covering strategy, branding, design, Webflow development, and CMS training.</ProductComponent>
                            <ProductComponent title={'Growth'} icon={'square'} iconColor={'bg-pink-500'}>We find new demand, measure the competition, and put together a scope for you to take action on. Then we grow results by piloting the new campaign in market, tracking it, and always optimizing.</ProductComponent>
                            <ProductComponent title={'Unlimited'} icon={'circle'} iconColor={'bg-green-500'}>Experience an all-inclusive, unlimited subscription service for top-tier design and Webflow development with our US Based Team. Our enterprise-grade quality is unmatched, with no room for gimmicks or subpar work.</ProductComponent>
                            <ProductComponent title={'Figma to Webflow'} willScale icon={'square'} iconColor={'bg-blue-500'}>Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.</ProductComponent>
                        </div>
                    </div>
                    <div className={'flex justify-end'}>
                        <div className={'sm:w-[calc(80%-16px)] w-[calc(90%-16px)] flex justify-start'}>
                            <SectionLinkComponent link={'#'}>Read More</SectionLinkComponent>
                        </div>
                    </div>
                </AnimatableComponent>
            </main>
        </section>
    );
}

