// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Codes By Mahdi Tasha
// Importing Part
import Link from 'next/link';
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import {useState} from "react";

// Defining Type Of Props
interface propsType {
    title: string;
    link: string;
    children?: ReactNode;
}

// Creating And Exporting Header Nav Link Component As Default
export default function HeaderNavLinkComponent({title,link,children}:propsType):ReactNode {
    // Defining States Of Component
    const [isMenuOpened, setMenuOpened] = useState(false);

    // Returning JSX
    return (
        <li>
            {
                (children !== undefined)
                    ? (
                        <div className={'flex gap-[10px]'}>
                            <Link className={'py-[10px] text-[1.25rem] font-serif text-white'} href={link}>{title}</Link>
                            <button data-opened={isMenuOpened} onClick={() => setMenuOpened(prevState => !prevState)} className={'p-[10px] font-serif text-white flex items-center justify-center [&>span]:data-[opened="true"]:rotate-180'}>
                                <span className={'transition-all duration-500'}><IconComponent size={15} name={'chevron-down'} /></span>
                            </button>
                        </div>
                    ) : (
                        <Link className={'text-[1.25rem] font-serif text-white whitespace-nowrap'} href={link}>{title}</Link>
                    )
            }

            {
                (children !== undefined)
                    ? (
                        <div data-opened={isMenuOpened} className={'absolute border-y border-y-white/20 top-[90px] left-0 w-full py-[20px] transition-all duration-500 data-[opened="false"]:opacity-0 data-[opened="false"]:invisible'}>
                            <div className={'container'}>
                                <ul className={'grid grid-cols-4'}>{children}</ul>
                            </div>
                        </div>
                    ) : false
            }
        </li>
    );
}