// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import AnimatableComponent from "@/chunk/animatableComponent";
import IconComponent from "@/chunk/iconComponent";
import TestemonialComponent from "@/component/testemonialComponent";
import MariaImage from '@/public/assets/img/profiles/img-maria.png';
import TravisImage from '@/public/assets/img/profiles/img-travis.png';
import VincentImage from '@/public/assets/img/profiles/img-vincent.png';

// Creating And Exporting Third Section Component As Default
export default function FourthSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'mb-[200px]'}>
            <main>
                <AnimatableComponent variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1}
                }}>
                    <div className={'flex gap-[20px] mb-[30px]'}>
                        <div className={'section-title-holder'}><h6 className={'section-title'}>TESTIMONIALS</h6></div>
                        <div className={'sm:w-[80%] w-[90%] border border-white/30 px-[50px] py-[20px] flex items-start gap-[20px]'}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237 309" width="237" height="309" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_50"><rect width="237" height="309" x="0" y="0"></rect></clipPath></defs><g clipPath="url(#__lottie_element_50)"><g transform="matrix(-1,-0.00022203923435881734,0.00022203923435881734,-1,110.20185089111328,284.568603515625)" opacity="1" className={'block'}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(97,253,244)" fillOpacity="1" d=" M28.781600952148438,51.62379837036133 C28.781600952148438,51.62379837036133 0.5506290197372437,51.931400299072266 0.5506290197372437,51.931400299072266 C0.5506290197372437,51.931400299072266 0,0.560791015625 0,0.560791015625 C0,0.560791015625 51.370399475097656,0 51.370399475097656,0 C51.370399475097656,0 51.92070007324219,51.32809829711914 51.92070007324219,51.32809829711914 C51.92070007324219,51.32809829711914 51.92559814453125,51.32809829711914 51.92559814453125,51.32809829711914 C52.23210144042969,79.65989685058594 29.49090003967285,102.88400268554688 1.1059000492095947,103.26000213623047 C1.1059000492095947,103.26000213623047 0.8561099767684937,80.1720962524414 0.8561099767684937,80.1720962524414 C16.443599700927734,79.93509674072266 28.925500869750977,67.18409729003906 28.781600952148438,51.62379837036133z"></path><path strokeLinecap="square" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="1" stroke="rgb(0,0,0)" strokeOpacity="0" strokeWidth="0" d=" M28.781600952148438,51.62379837036133 C28.781600952148438,51.62379837036133 0.5506290197372437,51.931400299072266 0.5506290197372437,51.931400299072266 C0.5506290197372437,51.931400299072266 0,0.560791015625 0,0.560791015625 C0,0.560791015625 51.370399475097656,0 51.370399475097656,0 C51.370399475097656,0 51.92070007324219,51.32809829711914 51.92070007324219,51.32809829711914 C51.92070007324219,51.32809829711914 51.92559814453125,51.32809829711914 51.92559814453125,51.32809829711914 C52.23210144042969,79.65989685058594 29.49090003967285,102.88400268554688 1.1059000492095947,103.26000213623047 C1.1059000492095947,103.26000213623047 0.8561099767684937,80.1720962524414 0.8561099767684937,80.1720962524414 C16.443599700927734,79.93509674072266 28.925500869750977,67.18409729003906 28.781600952148438,51.62379837036133z"></path></g></g><g transform="matrix(-0.9999997615814209,0.000653863069601357,-0.000653863069601357,-0.9999997615814209,173.19033813476562,283.9024658203125)" opacity="1" className={'block'}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,213,38)" fillOpacity="1" d=" M51.37919998168945,51.331298828125 C51.37919998168945,79.66470336914062 28.38800048828125,102.64099884033203 0.0006453570094890893,102.70999908447266 C0.0006453570094890893,102.70999908447266 0.0006433380185626447,79.62100219726562 0.0006433380185626447,79.62100219726562 C15.589900016784668,79.55280303955078 28.2091007232666,66.9375 28.233400344848633,51.37630081176758 C28.233400344848633,51.37630081176758 0.0004882809880655259,51.378299713134766 0.0004882809880655259,51.378299713134766 C0.0004882809880655259,51.378299713134766 0.0056412601843476295,0.004788119811564684 0.0056412601843476295,0.004788119811564684 C0.0056412601843476295,0.004788119811564684 51.37910079956055,-0.00024414100334979594 51.37910079956055,-0.00024414100334979594 C51.37910079956055,-0.00024414100334979594 51.374000549316406,51.331298828125 51.374000549316406,51.331298828125 C51.374000549316406,51.331298828125 51.37919998168945,51.331298828125 51.37919998168945,51.331298828125z"></path><path strokeLinecap="square" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="1" stroke="rgb(0,0,0)" strokeOpacity="0" strokeWidth="0" d=" M51.37919998168945,51.331298828125 C51.37919998168945,79.66470336914062 28.38800048828125,102.64099884033203 0.0006453570094890893,102.70999908447266 C0.0006453570094890893,102.70999908447266 0.0006433380185626447,79.62100219726562 0.0006433380185626447,79.62100219726562 C15.589900016784668,79.55280303955078 28.2091007232666,66.9375 28.233400344848633,51.37630081176758 C28.233400344848633,51.37630081176758 0.0004882809880655259,51.378299713134766 0.0004882809880655259,51.378299713134766 C0.0004882809880655259,51.378299713134766 0.0056412601843476295,0.004788119811564684 0.0056412601843476295,0.004788119811564684 C0.0056412601843476295,0.004788119811564684 51.37910079956055,-0.00024414100334979594 51.37910079956055,-0.00024414100334979594 C51.37910079956055,-0.00024414100334979594 51.374000549316406,51.331298828125 51.374000549316406,51.331298828125 C51.374000549316406,51.331298828125 51.37919998168945,51.331298828125 51.37919998168945,51.331298828125z"></path></g></g></g></svg>
                                <div />
                            </div>
                            <div>
                                <button><IconComponent size={20} name={'chevron-left'} /></button>
                                <button><IconComponent size={20} name={'chevron-right'} /></button>
                                <div>
                                    <TestemonialComponent img={MariaImage.src} name={'Mariana Racasan'} isOpened={true} role={'MARKETING DIRECTOR AT ZENHUB'}>SVZ was very responsive to the needs of our brand and worked in partnership with us to create a visual identity that feels authentic to our diverse team, users, and community. They not only delivered great results but were super responsive and excellent to work with.</TestemonialComponent>
                                    <TestemonialComponent img={VincentImage.src} name={'Vincent Huber'} isOpened={false} role={'Founder'}>We’ve had the pleasure to work with the SVZ team on a complete re-design of our website. We were highly impressed by their structured approach and organization, as well as their customer-centric approach to web design. We’re very happy with the final outcome and results!</TestemonialComponent>
                                    <TestemonialComponent img={TravisImage.src} name={'Travis Wingate'} isOpened={false} role={'VP @ SUPERMOVE.CO'}>“Working with the team at SVZ was nothing short of amazing. When I decided to revamp the Supermove Visual ID and website, I knew we would need support from an agency. After a long search, SVZ rose to the top of the list. Not only does their portfolio speak for itself, they are THE one-stop shop for branding, design and development"</TestemonialComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatableComponent>
            </main>
        </section>
    );
}