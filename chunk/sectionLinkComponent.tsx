// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining Types Of Props
interface propsType {
    children: ReactNode;
    link: string;
}

// Creating And Exporting Section Title Component As Default
export default function SectionLinkComponent({children, link}:propsType):ReactNode {
    // Returning JSX
    return (
        <a href={link} className={'flex items-center gap-[5px] group'}>
            <span className={'text-white'}><IconComponent name={'chevron-right'} size={16} /></span>
            <div className={'h-[23px] overflow-hidden'}>
                <div className={'flex flex-col gap-[10px] group-hover:translate-y-[-35px] transition-all duration-500'}>
                    <span className={'text-white font-normal text-[16px] group-hover:text-green-500 transition-all duration-500'}>{children}</span>
                    <span className={'text-white font-normal text-[16px] group-hover:text-green-500 transition-all duration-500'}>{children}</span>
                </div>
            </div>
        </a>
    );
}