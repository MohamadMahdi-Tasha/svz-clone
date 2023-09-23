// Codes By Mahdi Tasha
// Importing Part
import {Metadata} from "next";
import {ReactNode} from "react";

// Creating And Exporting Meta Data Of Page
export const metadata:Metadata = {
    title: 'SVZ Design Clone',
    keywords: 'Design,SVZ,clone,resume,github,nextjs,tailwind,react,webflow',
    themeColor: '#00000',
    viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    manifest: '/manifest.json',
    robots: '/robots.txt'
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
            <body>
                {children}
            </body>
        </html>
    );
}