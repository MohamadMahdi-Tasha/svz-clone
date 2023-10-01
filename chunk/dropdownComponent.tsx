// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";

interface propsType {
    isOpened: boolean;
    title: string;
    children: ReactNode;
}

// Creating And Exporting Dropdown Component As Default
export default function DropdownComponent({isOpened,children,title}:propsType):ReactNode {
    // Defining States Of Component
    const [isOpenedState, setOpenedState] = useState(isOpened);

    // Returning JSX
    return (
        <div className={'relative'}>
            <button type={'button'} className={'flex w-full gap-[10px] text-start justify-between items-center p-[10px] border border-white'} onClick={() => setOpenedState(prevState => !prevState)}>
                <span className={'text-[16px] text-white'}>{title}</span>
                <span className={'text-white'}><IconComponent name={'chevron-down'} size={16} /></span>
            </button>
            <div className={'absolute top-full left-0 bg-white h-[200px] lg:w-[150px] w-full overflow-auto transition-all duration-500 py-[20px] origin-top-left data-[opened="false"]:invisible data-[opened="false"]:opacity-0 data-[opened="false"]:scale-0 data-[opened="true"]:visible data-[opened="true"]:opacity-100 data-[opened="true"]:scale-100'} data-opened={isOpenedState}>{children}</div>
        </div>
    );
}