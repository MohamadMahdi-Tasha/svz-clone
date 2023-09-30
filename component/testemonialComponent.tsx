// Codes BY Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import Image from 'next/image';
import AnimatableComponent from "@/chunk/animatableComponent";

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
            <AnimatableComponent variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 100, y: 0},
            }} noScroll transition={{duration: 1}}>
                <p className={'text-white/80 text-[16px] text-light font-serif mb-[100px] line-clamp-5'}>{children}</p>
                <div className={'flex gap-[20px] items-center'}>
                    <Image className={'rounded-full object-cover'} src={img} width={75} height={75} alt={`Image Of ${name}`}/>
                    <div className={'flex flex-col gap-[10px] w-full'}>
                        <span className={'text-white block text-[22px] truncate'}>{name}</span>
                        <span className={'text-white/80 block text-[16px] text-light truncate'}>{role}</span>
                    </div>
                </div>
            </AnimatableComponent>
        );
    }
}