// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import Image from "next/image";
import Link from 'next/link';
import LogoTypo from '@/public/assets/img/img-logo-typo.svg';
import HeaderNavLinkComponent from "@/component/header/headerNavLinkComponent";
import HeaderInnerLinkComponent from "@/component/header/headerInnerLinkComponent";

// Creating And Exporting Header Component As Default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header>
            <div>
                <Link href={'/'}>
                    <Image src={LogoTypo.src} alt={'SVZ Logo Typo'} width={200} height={100} />
                </Link>
                <nav>
                    <ul>
                        <HeaderNavLinkComponent link={'#'} title={'Services'}>
                            <HeaderInnerLinkComponent link={'#'} title={'SVZ | Suite'} icon={'bag'}>Our end-to-end suite of agency services</HeaderInnerLinkComponent>
                            <HeaderInnerLinkComponent link={'#'} title={'SVZ | Growth'} icon={'scale'}>Strategy, media buying, PPC, and SMM team</HeaderInnerLinkComponent>
                            <HeaderInnerLinkComponent link={'#'} title={'SVZ | Unlimited'} icon={'infinity'}>Retainer based design and development</HeaderInnerLinkComponent>
                            <HeaderInnerLinkComponent link={'#'} title={'SVZ | Figma To Webflow'} icon={'two-circles'}>Convert your design to beautiful webflow sites</HeaderInnerLinkComponent>
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
        </header>
    );
}