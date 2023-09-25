// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import CompanysImage from '@/public/assets/img/img-companys.webp';
import AnimatedSVGComponent from "@/chunk/animatedSVGComponent";

// Creating And Exporting First Section Component As Default
export default function FirstSectionComponent(): ReactNode {
    // Returning JSX
    return (
        <section>
            <main className={'min-h-[150vh] relative -z-[10]'}>
                <div>
                    <div className={'container'}>
                        <div className={'lg:ml-[200px] lg:mt-[20px] mt-[100px]'}>
                            <h1 className={'text-white font-normal text-[2rem] mb-[30px] z-[10]'}>
                                Offering a suite of Enterprise grade <br/>
                                services to B2B Saas, VC's, Start-up's, <br/>
                                and E-commerce
                            </h1>
                            <h3 className={'text-white/80 font-light text-[.75rem] z-[10]'}>YOUR TRUSTED PARTNER FOR STRATEGY, BRAND, DESIGN, & DEV</h3>
                        </div>
                    </div>
                    <AnimatedSVGComponent />
                </div> 
            </main>
            <footer>
                <img src={CompanysImage.src} className={'w-[80%] mx-auto'} alt="Companys Logo"/>
            </footer>
        </section>
    );
}