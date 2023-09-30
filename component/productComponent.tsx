// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Defining Type Of Props
interface propsType {
    title: string;
    children: ReactNode;
    icon: 'circle' | 'square';
    iconColor: string;
    willScale?: boolean;
}

// Creating And Exporting Product Component As Default
export default function ProductComponent({iconColor,icon,children,title,willScale = false}:propsType):ReactNode {
    // Returning JSX
    return (
        <a href={'#'} className={`border border-white/30 p-[30px] ${(willScale) ? ' xl:col-span-1 lg:col-span-3 cols-span-1' : ''}`}>
            <div className={'mb-[200px]'}>
                <span className={'text-white text-[32px] text-bold mb-[20px] truncate w-full'}>{title}</span>
                <p className={'text-white/80 text-[16px] text-light line-clamp-5'}>{children}</p>
            </div>
            <div className={`${iconColor} max-w-[100px] aspect-square${(icon === 'circle') ? ' rounded-full' : ''}`} />
        </a>
    );
}