// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import SectionLinkComponent from "@/chunk/sectionLinkComponent";

// Creating And Exporting Second Section Component As Default
export default function SecondSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <h3>PRODUCTS</h3>
                <div>
                    <div>
                        <h5>Suite</h5>
                        <p>Whether you need a full scope project or just ad-hoc work, SVZ has you covered. Our end-to-end suite of agency services can be customized to fit your Enterprise needs, covering strategy, branding, design, Webflow development, and CMS training.</p>
                        <div />
                    </div>
                    <div>
                        <h5>Growth</h5>
                        <p>We find new demand, measure the competition, and put together a scope for you to take action on. Then we grow results by piloting the new campaign in market, tracking it, and always optimizing.</p>
                        <div />
                    </div>
                    <div>
                        <h5>Unlimited</h5>
                        <p>Experience an all-inclusive, unlimited subscription service for top-tier design and Webflow development with our US Based Team. Our enterprise-grade quality is unmatched, with no room for gimmicks or subpar work.</p>
                        <div />
                    </div>
                    <div>
                        <h5>Figma to Webflow</h5>
                        <p>Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.</p>
                        <div />
                    </div>
                </div>
                <SectionLinkComponent link={'#'}>
                    Read More
                </SectionLinkComponent>
            </main>
        </section>
    );
}

