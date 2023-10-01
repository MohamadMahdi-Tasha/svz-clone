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
                        <div className={'grid lg:grid-cols-3 grid-cols-1 border border-white/30'}>
                            <a href={'#'}>
                                <Image src={ScottImage.src} alt={'Scott Van Zandt'} width={300} height={300} />
                                <span>Free - 15min Consultation</span>
                                <p>Have a new project in mind? Schedule a 30 minute discovery call and I will at the very least give you some great advice.</p>
                                <SectionLinkComponent link={'#'}>Schedule a discovery call</SectionLinkComponent>
                            </a>
                            <div>
                                <form action="#">
                                    <span>Schedule a discovery call</span>
                                    <div>
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
                                        <input type="file" placeholder={'Upload a Request For Proposal (Optional)'} className={'input'} />
                                        <div>
                                            <a href={'#'} className={'bottom-bar-anchor'}>What is an RFP?</a>
                                            <button>
                                                Submit
                                                <IconComponent name={'chevron-right'} size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div>
                                    <IconComponent name={'calender'} size={50} />
                                    <a href={'mailto:hello@svz.io'} className={'bottom-bar-anchor'}>hello@svz.io</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <ul>
                                    <li><a href="#">HOME /</a></li>
                                    <li><a href="#">PROCESS /</a></li>
                                    <li><a href="#">WORK /</a></li>
                                    <li><a href="#">FAQS /</a></li>
                                    <li><a href="#">WEBFLOW</a></li>
                                </ul>
                                <span>© 2023 SVZ Design, All Rights Reserved</span>
                                <span>San Francisco - Los Angeles - Seattle</span>
                            </div>
                            <a href="#">
                                <button tabIndex={-1}>
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