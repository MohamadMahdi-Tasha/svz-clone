// Codes BY Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import Image from 'next/image';

// Defining Type Of Props
interface propsType {
    children: ReactNode;
    img: string;
    name: string;
    role: string;
    isOpened: boolean;
}

// Creating And Exporting Testimonial Component As Default
export default function TestemonialComponent({children,role,img,name,isOpened}:propsType):ReactNode {
    // Conditional Rendering
    if (isOpened) {
        return (
            <div>
                <p className={'text-white/80 text-[16px] text-light font-serif'}>{children}</p>
                <div>
                    <Image src={img} width={50} height={50} alt={`Image Of ${name}`}/>
                    <div>
                        <span className={'text-white text-[22px]'}>{name}</span>
                        <span className={'text-white/80 text-[16px] text-light'}>{role}</span>
                    </div>
                </div>
            </div>
        );
    }
}