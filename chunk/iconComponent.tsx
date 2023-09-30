// Cods By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Defining Type Of Props
interface propsType {
    name: string;
    size: number;
}

// Creating And Exporting Icon Component As Default
export default function IconComponent({name,size}:propsType):ReactNode {
    // Conditional Rendering
    if (name === 'bag') {
        return (
            <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5951 21C4.0451 21 3.57426 20.8042 3.1826 20.4125C2.79093 20.0208 2.5951 19.55 2.5951 19V8C2.5951 7.45 2.79093 6.97917 3.1826 6.5875C3.57426 6.19583 4.0451 6 4.5951 6H8.5951V4C8.5951 3.45 8.79093 2.97917 9.1826 2.5875C9.57426 2.19583 10.0451 2 10.5951 2H14.5951C15.1451 2 15.6159 2.19583 16.0076 2.5875C16.3993 2.97917 16.5951 3.45 16.5951 4V6H20.5951C21.1451 6 21.6159 6.19583 22.0076 6.5875C22.3993 6.97917 22.5951 7.45 22.5951 8V19C22.5951 19.55 22.3993 20.0208 22.0076 20.4125C21.6159 20.8042 21.1451 21 20.5951 21H4.5951ZM4.5951 19H20.5951V8H4.5951V19ZM10.5951 6H14.5951V4H10.5951V6Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'scale') {
        return (
            <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5951 21V13H5.5951V17.6L18.1951 5H13.5951V3H21.5951V11H19.5951V6.4L6.9951 19H11.5951V21H3.5951Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'infinity') {
        return (
            <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.0951 17.5C4.56176 17.5 3.26176 16.9667 2.1951 15.9C1.12843 14.8333 0.595097 13.5333 0.595097 12C0.595097 10.4667 1.12843 9.16667 2.1951 8.1C3.26176 7.03333 4.56176 6.5 6.0951 6.5C6.71176 6.5 7.30343 6.60833 7.8701 6.825C8.43676 7.04167 8.9451 7.35 9.3951 7.75L11.0951 9.3L9.5951 10.65L8.0451 9.25C7.77843 9.01667 7.47843 8.83333 7.1451 8.7C6.81176 8.56667 6.46176 8.5 6.0951 8.5C5.12843 8.5 4.30343 8.84167 3.6201 9.525C2.93676 10.2083 2.5951 11.0333 2.5951 12C2.5951 12.9667 2.93676 13.7917 3.6201 14.475C4.30343 15.1583 5.12843 15.5 6.0951 15.5C6.46176 15.5 6.81176 15.4333 7.1451 15.3C7.47843 15.1667 7.77843 14.9833 8.0451 14.75L15.7951 7.75C16.2451 7.35 16.7534 7.04167 17.3201 6.825C17.8868 6.60833 18.4784 6.5 19.0951 6.5C20.6284 6.5 21.9284 7.03333 22.9951 8.1C24.0618 9.16667 24.5951 10.4667 24.5951 12C24.5951 13.5333 24.0618 14.8333 22.9951 15.9C21.9284 16.9667 20.6284 17.5 19.0951 17.5C18.4784 17.5 17.8868 17.3917 17.3201 17.175C16.7534 16.9583 16.2451 16.65 15.7951 16.25L14.0951 14.7L15.5951 13.35L17.1451 14.75C17.4118 14.9833 17.7118 15.1667 18.0451 15.3C18.3784 15.4333 18.7284 15.5 19.0951 15.5C20.0618 15.5 20.8868 15.1583 21.5701 14.475C22.2534 13.7917 22.5951 12.9667 22.5951 12C22.5951 11.0333 22.2534 10.2083 21.5701 9.525C20.8868 8.84167 20.0618 8.5 19.0951 8.5C18.7284 8.5 18.3784 8.56667 18.0451 8.7C17.7118 8.83333 17.4118 9.01667 17.1451 9.25L9.3951 16.25C8.9451 16.65 8.43676 16.9583 7.8701 17.175C7.30343 17.3917 6.71176 17.5 6.0951 17.5Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'two-circle') {
        return (
            <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.16653" cy="12" r="6.0382" stroke="currentColor" strokeWidth="1.63789"/>
                <circle cx="16.0237" cy="12" r="6.85714" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'chevron-down') {
        return (
            <svg width={size} height={size} viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.42168 12L-0.000389188 2.02369L2.14234 -7.30042e-07L9.42168 7.70754L16.701 5.42718e-07L18.8437 2.02369L9.42168 12Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'chevron-right') {
        return (
            <svg width={size} height={size} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.53975 5.99996L1.27151 11.92L0 10.5737L4.84274 5.99996L3.99845e-07 1.42626L1.27151 0.0799561L7.53975 5.99996Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'chevron-left') {
        return (
            <svg width={size} height={size} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.53975 5.99996L1.27151 11.92L0 10.5737L4.84274 5.99996L3.99845e-07 1.42626L1.27151 0.0799561L7.53975 5.99996Z" fill="currentColor"/>
            </svg>
        );
    }
}