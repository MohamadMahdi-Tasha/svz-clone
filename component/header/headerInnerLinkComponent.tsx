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
        <li className={'bg-black hover:bg-white/20 rounded-[5px] transition-all duration-500'}>
            <Link href={link} className={'flex items-start gap-[20px] px-[10px] py-[20px]'}>
                <span className={'text-white mt-[10px]'}><IconComponent name={icon} size={20} /></span>
                <div className={'w-[80%]'}>
                    <h6 className={'text-white mb-[10px] font-serif text-[1.25rem] truncate w-full'}>{title}</h6>
                    <p className={'text-white/80 font-sans text-[.8rem] line-clamp-2'}>{children}</p>
                </div>
            </Link>
        </li>
    );
}