// Codes By Mahdi Tasha
// Importing Part
import Link from 'next/link';
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining Type Of Props
interface propsType {
    title: string;
    link: string;
    children?: ReactNode;
}

// Creating And Exporting Header Nav Link Component As Default
export default function HeaderNavLinkComponent({title,link,children}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            {
                (children !== undefined)
                    ? (
                        <div>
                            <Link href={link}>{title}</Link>
                            <button><IconComponent size={20} name={'chevron-down'} /></button>
                        </div>
                    ) : (
                        <Link href={link}>{title}</Link>
                    )
            }

            {
                (children !== undefined)
                    ? (
                        <div>
                            <ul>{children}</ul>
                        </div>
                    ) : false
            }
        </li>
    );
}