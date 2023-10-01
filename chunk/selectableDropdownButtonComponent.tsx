// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Defining Type Of Props
interface propsType {
    children: ReactNode;
}

// Creating And Exporting Selectable Dropdown Button Component As Default
export default function SelectableDropdownButtonComponent({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <button type={'button'} className={'p-[10px] text-[16px] text-black truncate transition-all duration-500 hover:bg-gray-300 w-full text-start'}>
            {children}
        </button>
    );
}