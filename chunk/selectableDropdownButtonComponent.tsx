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
        <button>
            {children}
        </button>
    );
}