// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import Link from 'next/link';
import IconComponent from "@/chunk/iconComponent";

// Defining Type Of Props
interface propsType {
    icon: string;
    title: string;
    children: string;
    link: string;
}

// Creating And Exporting Header Inner Link Component As Default
export default function HeaderInnerLinkComponent({children,icon,title,link}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link}>
            <IconComponent name={icon} size={20} />
            <div>
                <h6>{title}</h6>
                <p>{children}</p>
            </div>
        </Link>
    );
}