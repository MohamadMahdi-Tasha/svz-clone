// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import Link from 'next/link';

// Defining Types Of Props
interface propsType {
    children: ReactNode;
    link: string;
}

// Creating And Exporting Section Title Component As Default
export default function SectionLinkComponent({children, link}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link}>
            <span>{children}</span>
            <span>{children}</span>
        </Link>
    );
}