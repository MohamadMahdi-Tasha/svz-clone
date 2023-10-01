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
        <div>
            <button onClick={() => setOpenedState(prevState => !prevState)}>
                <span>{title}</span>
                <IconComponent name={'chevron-down'} size={20} />
            </button>
            <div data-opened={isOpenedState}>{children}</div>
        </div>
    );
}