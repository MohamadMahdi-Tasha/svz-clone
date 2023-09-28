// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode, RefObject, useEffect, useRef} from "react";
import {motion, useInView, useAnimation, AnimationControls} from 'framer-motion';

// Defining Type Of Props
interface propsType {
    children: ReactNode;
    variants: { hidden:Object, visible: Object };
    transition?: Object;
    className?: string;
    noScroll?: boolean;
}

// Creating And Exporting Animatable Component as Default
export default function AnimatableComponent({children, variants, className, transition, noScroll = false}:propsType):ReactNode {
    // Simple Condition To See If Element Needs To Show When Showing
    if (!noScroll) {
        // Defining Things To Accsess Animation
        const ref:RefObject<any> = useRef();
        const isInView:boolean = useInView(ref, { once: true });
        const mainControls:AnimationControls = useAnimation();

        // Using useEffect Hook To Start Animation When Element Is Visible
        useEffect(() => {
            if (isInView) {mainControls.start('visible');}
        }, [isInView])

        // Returning JSX
        return (
            <motion.div
                variants={variants}
                transition={(transition !== null) ? transition : {duration: 1}}
                initial={'hidden'}
                animate={mainControls}
                ref={ref}
                className={(className !== null) ? className : ''}
            >
                {children}
            </motion.div>
        );
    } else {
        // Returning JSX
        return (
            <motion.div
                variants={variants}
                transition={(transition !== null) ? transition : {duration: 1}}
                initial={'hidden'}
                animate={'visible'}
                className={(className !== null) ? className : ''}
            >
                {children}
            </motion.div>
        );
    }
}