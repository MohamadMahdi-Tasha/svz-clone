// Codes By Mahdi Tasha
// Importing Part
import {Metadata} from "next";
import {ReactNode} from "react";
import '@/app/index.css';
import HeaderComponent from "@/component/header/headerComponent";
import { Nunito } from "next/font/google";
import FooterComponent from "@/component/footerComponent";

// Defining Nunito Font To Use
const NunitoFont = Nunito({ subsets: ['latin'] })

// Creating And Exporting Meta Data Of Page
export const metadata:Metadata = {
    title: 'SVZ Design | Clone',
    keywords: 'Design,SVZ,clone,resume,github,nextjs,tailwind,react,webflow',
    themeColor: '#00000',
    viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    manifest: '/manifest.json',
    robots: '/robots.txt',
    openGraph: {
        title: 'SVZ Design | Clone',
        description: 'Clone Of SVZ Design Page By Webflow',
        type: 'website'
    },
    twitter: {
        title: 'SVZ Design | Clone',
        description: 'Clone Of SVZ Design Page By Webflow',
        card: 'summary_large_image'
    }
}

// Defining Type Of Props
interface propsType {
    children: ReactNode;
}

// Creating And Exporting Layout Of Pages As Default
export default function LayoutComponent({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <html>
            <body className={`bg-black ${NunitoFont.className} overflow-x-hidden`}>
                <HeaderComponent />
                {children}
                <FooterComponent />
            </body>
        </html>
    );
}