// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import AnimatableComponent from "@/chunk/animatableComponent";

// Defining Types Of Props
interface propsType {
    img: string;
    title: string;
    children: ReactNode;
}

// Creating And Exporting Work Component As Default
export default function WorkComponent({img,title,children}:propsType):ReactNode {
    // Returning JSX
    return (
        <AnimatableComponent variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 100, y: 0},
        }}>
            <a href={'#'}>
                <img className={'w-full h-[700px] object-cover mb-[20px]'} src={img} alt={`Image of ${title}`}/>
                <span className={'text-white text-[32px] text-bold mb-[20px] truncate w-full'}>{title}</span>
                <p className={'text-white/80 text-[16px] text-light line-clamp-5'}>{children}</p>
            </a>
        </AnimatableComponent>
    );
}