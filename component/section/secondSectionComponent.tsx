// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import SectionLinkComponent from "@/chunk/sectionLinkComponent";
import AnimatableComponent from "@/chunk/animatableComponent";

// Creating And Exporting Second Section Component As Default
export default function SecondSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <AnimatableComponent variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1}
                }} className={'flex gap-[20px] mb-[30px]'}>
                    <div className={'sm:w-[30%] w-[10%] h-[100px] lg:top-[90px] top-[120px] sticky'}>
                        <h6 className={'block -rotate-90 absolute top-[50%] left-[50%] translate-x-[-50%] -translate-y-[50%] text-white font-bold text-[26px]'}>PRODUCTS</h6>
                    </div>
                    <div className={'grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:w-[70%] w-[90%] border border-white/30'}>
                        <div className={'border border-white/30 p-[30px]'}>
                            <div className={'mb-[200px]'}>
                                <h5 className={'text-white text-[32px] text-bold mb-[20px] truncate w-full'}>Suite</h5>
                                <p className={'text-white/80 text-[16px] text-light line-clamp-5'}>Whether you need a full scope project or just ad-hoc work, SVZ has you covered. Our end-to-end suite of agency services can be customized to fit your Enterprise needs, covering strategy, branding, design, Webflow development, and CMS training.</p>
                            </div>
                            <div className={'bg-blue-500 max-w-[100px] aspect-square rounded-full'} />
                        </div>
                        <div className={'border border-white/30 p-[30px]'}>
                            <div className={'mb-[200px]'}>
                                <h5 className={'text-white text-[32px] text-bold mb-[20px] truncate w-full'}>Growth</h5>
                                <p className={'text-white/80 text-[16px] text-light line-clamp-5'}>We find new demand, measure the competition, and put together a scope for you to take action on. Then we grow results by piloting the new campaign in market, tracking it, and always optimizing.</p>
                            </div>
                            <div className={'bg-pink-500 max-w-[100px] aspect-square'} />
                        </div>
                        <div className={'border border-white/30 p-[30px]'}>
                            <div className={'mb-[200px]'}>
                                <h5 className={'text-white text-[32px] text-bold mb-[20px] truncate w-full'}>Unlimited</h5>
                                <p className={'text-white/80 text-[16px] text-light line-clamp-5'}>Experience an all-inclusive, unlimited subscription service for top-tier design and Webflow development with our US Based Team. Our enterprise-grade quality is unmatched, with no room for gimmicks or subpar work.</p>
                            </div>
                            <div className={'bg-green-500 max-w-[100px] aspect-square rounded-full'} />
                        </div>
                        <div className={'border border-white/30 p-[30px] xl:col-span-1 lg:col-span-3 cols-span-1'}>
                            <div className={'mb-[200px]'}>
                                <h5 className={'text-white text-[32px] text-bold mb-[20px] truncate w-full'}>Figma to Webflow</h5>
                                <p className={'text-white/80 text-[16px] text-light line-clamp-5'}>Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.</p>
                            </div>
                            <div className={'bg-blue-500 max-w-[100px] aspect-square'} />
                        </div>
                    </div>
                </AnimatableComponent>
                <SectionLinkComponent link={'#'}>
                    Read More
                </SectionLinkComponent>
            </main>
        </section>
    );
}

