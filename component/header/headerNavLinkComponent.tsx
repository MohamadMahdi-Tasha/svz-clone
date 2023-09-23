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
                        <div className={'flex gap-[10px] peer'}>
                            <Link className={'py-[20px] block text-[1.25rem] font-serif text-white'} href={link}>{title}</Link>
                            <button className={'px-[10px] py-[20px] font-serif text-white flex items-center justify-center'}>
                                <span className={'transition-all duration-500 data-[opened="true"]:rotate-180'}><IconComponent size={15} name={'chevron-down'} /></span>
                            </button>
                        </div>
                    ) : (
                        <Link className={'text-[1.25rem] py-[20px] font-serif flex justify-center items-center h-full text-white whitespace-nowrap'} href={link}>{title}</Link>
                    )
            }

            {
                (children !== undefined)
                    ? (
                        <div className={'absolute border-y border-y-white/20 top-[90px] left-0 w-full py-[20px] transition-all duration-500 invisible opacity-0 peer-hover:visible peer-hover:opacity-100 hover:visible hover:opacity-100'}>
                            <div className={'container'}>
                                <ul className={'grid grid-cols-4'}>{children}</ul>
                            </div>
                        </div>
                    ) : false
            }
        </li>
    );
}