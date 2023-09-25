// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import CompanysImage from '@/public/assets/img/img-companys.webp';
import AnimatedSVGComponent from "@/chunk/animatedSVGComponent";
import {motion} from 'framer-motion';

// Creating And Exporting First Section Component As Default
export default function FirstSectionComponent(): ReactNode {
    // Returning JSX
    return (
        <section>
            <main className={'lg:min-h-[150vh] min-h-[65vh] relative -z-[10] lg:mb-0 mb-[20px]'}>
                <div>
                    <motion.div
                        variants={{
                            hidden: {opacity: 0, x: 75},
                            visible: {opacity: 100, x: 0},
                        }}
                        transition={{duration: 2, delay: 1}}
                        initial={'hidden'}
                        animate={'visible'} className={'container'}>
                        <div className={'lg:ml-[200px] lg:mt-[20px] mt-[100px]'}>
                            <h1 className={'text-white font-normal lg:text-[2rem] text-[1.5rem] mb-[30px] z-[10]'}>
                                Offering a suite of Enterprise grade <br/>
                                services to B2B Saas, VC's, Start-up's, <br/>
                                and E-commerce
                            </h1>
                            <h3 className={'text-white/80 font-light text-[.75rem] z-[10]'}>YOUR TRUSTED PARTNER FOR STRATEGY, BRAND, DESIGN, & DEV</h3>
                        </div>
                    </motion.div>
                    <AnimatedSVGComponent />
                </div>
            </main>
            <motion.div variants={{
                hidden: {opacity: 0},
                visible: {opacity: 100},
            }}
                        transition={{duration: 1}}
                        initial={'hidden'}
                        animate={'visible'}>
                <img src={CompanysImage.src} className={'w-[80%] mx-auto'} alt="Companys Logo"/>
            </motion.div>
        </section>
    );
}