// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/section/firstSectionComponent";
import SecondSectionComponent from "@/component/section/secondSectionComponent";
import ThirdSectionComponent from "@/component/section/thirdSectionComponent";
import FourthSectionComponent from "@/component/section/fourthSectionComponent";

// Creating And Exporting Home Page As Default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
        </>
    );
}