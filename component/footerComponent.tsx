// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import AnimatableComponent from "@/chunk/animatableComponent";
import Image from 'next/image';
import ScottImage from '@/public/assets/img/img-scott.jpg';
import SectionLinkComponent from "@/chunk/sectionLinkComponent";
import DropdownComponent from "@/chunk/dropdownComponent";
import SelectableDropdownButtonComponent from '@/chunk/selectableDropdownButtonComponent';
import UploadFileComponent from "@/chunk/uploadFileComponent";

// Creating And Exporting Footer Component As Default
export default function FooterComponent():ReactNode {
    // Returning JSX
    return (
        <footer>
            <AnimatableComponent variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1}
            }}>
                <div className={'flex gap-[20px] mb-[30px]'}>
                    <div className={'section-title-holder'}><h6 className={'section-title'}>START A PROJECT</h6></div>
                    <div className={'sm:w-[80%] w-[90%]'}>
                        <div className={'grid lg:grid-cols-3 grid-cols-1 border border-white/30 mb-[50px]'}>
                            <div className={'block border-b border-b-white/30 lg:border-r lg:border-r-white/30 lg:p-[30px]'}>
                                <Image className={'lg:rounded-full mb-[50px] lg:w-[200px] w-full object-cover'} src={ScottImage.src} alt={'Scott Van Zandt'} width={200} height={200} />
                                <div className={'lg:p-0 p-[30px]'}>
                                    <span className={'block mb-[30px] text-white font-normal text-[32px]'}>Free - 15min Consultation</span>
                                    <p className={'text-white/80 font-serif mb-[30px] text-[18px]'}>Have a new project in mind? Schedule a 30 minute discovery call and I will at the very least give you some great advice.</p>
                                    <SectionLinkComponent link={'#'}>Schedule a discovery call</SectionLinkComponent>
                                </div>
                            </div>
                            <div className={'col-span-2 flex flex-col'}>
                                <form action="#" className={'p-[30px] lg:h-[75%] border-b border-b-white/30'}>
                                    <span className={'block mb-[30px] text-white font-normal text-[32px]'}>Schedule a discovery call</span>
                                    <div className={'grid lg:grid-cols-2 grid-cols-1 gap-[20px]'}>
                                        <input type="text" placeholder={'Name'} required className={'input'}/>
                                        <input type="tel" placeholder={'Contact number'} required className={'input'}/>
                                        <input type="email" placeholder={'Email'} required className={'input'}/>
                                        <DropdownComponent title={'Estimated budget'} isOpened={false}>
                                            <SelectableDropdownButtonComponent>Under $20k</SelectableDropdownButtonComponent>
                                            <SelectableDropdownButtonComponent>$20k - $30k</SelectableDropdownButtonComponent>
                                            <SelectableDropdownButtonComponent>$30k - $50k</SelectableDropdownButtonComponent>
                                            <SelectableDropdownButtonComponent>$50k - $100k</SelectableDropdownButtonComponent>
                                            <SelectableDropdownButtonComponent>$100k - $300k</SelectableDropdownButtonComponent>
                                            <SelectableDropdownButtonComponent>Above $300k</SelectableDropdownButtonComponent>
                                        </DropdownComponent>
                                        <UploadFileComponent>Upload a Request For Proposal (Optional)</UploadFileComponent>
                                        <div className={'flex flex-wrap items-center justify-between gap-[10px]'}>
                                            <a href={'#'} className={'bottom-bar-anchor text-[16px] text-white'}>What is an RFP?</a>
                                            <button className={'flex items-center justify-between bg-white gap-[10px] shrink-0 px-[20px] py-[10px] text-black text-[16px]'}>
                                                Submit
                                                <IconComponent name={'chevron-right'} size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className={'flex lg:h-[25%] items-center justify-between p-[30px] flex-wrap'}>
                                    <a href={'#'} className={'bottom-bar-anchor pb-[5px]'}>
                                        <span className={'flex items-center gap-[10px] text-[16px] text-white'}>
                                            <IconComponent name={'calender'} size={24} />
                                            Schedule a Call
                                        </span>
                                    </a>
                                    <a href={'mailto:hello@svz.io'} className={'bottom-bar-anchor text-[34px] text-white font-serif'}>hello@svz.io</a>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-wrap items-center justify-between gap-[20px] pr-[30px]'}>
                            <div>
                                <ul className={'flex flex-wrap gap-[20px] mb-[30px]'}>
                                    <li><a className={'text-white text-[16px] bottom-bar-anchor'} href="#">HOME</a></li>
                                    <li className={'text-white text-[16px] pointer-events-none'}>/</li>
                                    <li><a className={'text-white text-[16px] bottom-bar-anchor'} href="#">PROCESS</a></li>
                                    <li className={'text-white text-[16px] pointer-events-none'}>/</li>
                                    <li><a className={'text-white text-[16px] bottom-bar-anchor'} href="#">WORK</a></li>
                                    <li className={'text-white text-[16px] pointer-events-none'}>/</li>
                                    <li><a className={'text-white text-[16px] bottom-bar-anchor'} href="#">FAQS</a></li>
                                    <li className={'text-white text-[16px] pointer-events-none'}>/</li>
                                    <li><a className={'text-white text-[16px] bottom-bar-anchor'} href="#">WEBFLOW</a></li>
                                </ul>
                                <span className={'text-white block text-[16px]'}>© 2023 SVZ Design, All Rights Reserved</span>
                                <span className={'text-white block text-[16px]'}>San Francisco - Los Angeles - Seattle</span>
                            </div>
                            <a href="#">
                                <button className={'w-[70px] h-[70px] bg-black hover:bg-white/20 transition-all flex items-center justify-center rounded-full duration-500 text-white hover:scale-90'} tabIndex={-1}>
                                    <IconComponent name={'linkedin'} size={30} />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </AnimatableComponent>
        </footer>
    );
}