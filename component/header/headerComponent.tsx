// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import Image from "next/image";
import Link from 'next/link';
import LogoTypo from '@/public/assets/img/img-logo-typo.svg';
import HeaderNavLinkComponent from "@/component/header/headerNavLinkComponent";
import HeaderInnerLinkComponent from "@/component/header/headerInnerLinkComponent";
import AnimatableComponent from "@/chunk/animatableComponent";

// Creating And Exporting Header Component As Default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <AnimatableComponent
            noScroll
            variants={{
                hidden: {opacity: 0},
                visible: {opacity: 100},
            }}
            transition={{duration: 1}}
            className={'lg:border-b-0 border-b border-b-white/20 bg-black/20 z-[30] lg:static fixed lg:backdrop-blur-0 backdrop-blur top-0 left-0 w-full lg:mt-[50px]'}
        >
            <div className={'container lg:py-0 py-[20px] flex items-center lg:justify-between justify-center gap-[20px]'}>
                <Link href={'/'}>
                    <Image src={LogoTypo.src} alt={'SVZ Logo Typo'} width={81} height={38} />
                </Link>
                <nav>
                    <ul className={'lg:flex hidden gap-[20px] z-[20]'}>
                        <HeaderNavLinkComponent link={'#'} title={'Services'}>
                            <HeaderInnerLinkComponent link={'#'} title={'SVZ | Suite'} icon={'bag'}>Our end-to-end suite of agency services</HeaderInnerLinkComponent>
                            <HeaderInnerLinkComponent link={'#'} title={'SVZ | Growth'} icon={'scale'}>Strategy, media buying, PPC, and SMM team</HeaderInnerLinkComponent>
                            <HeaderInnerLinkComponent link={'#'} title={'SVZ | Unlimited'} icon={'infinity'}>Retainer based design and development</HeaderInnerLinkComponent>
                            <HeaderInnerLinkComponent link={'#'} title={'SVZ | Figma To Webflow'} icon={'two-circle'}>Convert your design to beautiful webflow sites</HeaderInnerLinkComponent>
                        </HeaderNavLinkComponent>
                        <HeaderNavLinkComponent link={'#'} title={'Work'} />
                        <HeaderNavLinkComponent link={'#'} title={'FAQs'} />
                        <HeaderNavLinkComponent link={'#'} title={'Webflow'} />
                        <HeaderNavLinkComponent link={'#'} title={'Testimonials'} />
                        <HeaderNavLinkComponent link={'#'} title={'Blog'} />
                        <HeaderNavLinkComponent link={'#'} title={'New Project'} />
                    </ul>
                </nav>
            </div>
        </AnimatableComponent>
    );
}