export const metadata = {
    title: 'Terms & Conditions | Bethesda Childcare',
    description: 'Terms and Conditions for using the Bethesda Child Care Centre website.',
};

export default function TermsPage() {
    const effectiveDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="py-16 md:py-24">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Terms and Conditions</h1>
                    <p className="mt-4 text-muted-foreground">Effective Date: {effectiveDate}</p>
                </div>
                
                <div className="prose dark:prose-invert max-w-none mx-auto space-y-6">
                    <p>By accessing and using the Bethesda Child Care Centre website, you agree to comply with the following terms and conditions:</p>

                    <h2>2.1 Use of Website</h2>
                    <p>You agree to use our website only for lawful purposes and in accordance with these Terms and Conditions. You must not use the site to:</p>
                    <ul>
                        <li>Violate any applicable laws or regulations.</li>
                        <li>Harass, harm, or disrupt the website or its users.</li>
                        <li>Engage in unauthorized use of the website, such as attempting to bypass security measures.</li>
                    </ul>

                    <h2>2.2 Donations</h2>
                    <p>If you choose to donate to Bethesda Child Care Centre, please note that donations are processed through secure third-party platforms (e.g., PayPal or Stripe). We do not collect or store sensitive financial details on this site.</p>
                    <p>Donations made through these third-party platforms are subject to their respective terms and privacy policies. We encourage you to read their policies before making any payments.</p>

                    <h2>2.3 Volunteering and Communications</h2>
                    <p>By providing your contact information through our website (e.g., signing up for newsletters or volunteering), you agree that we may use your details to send you communications related to Bethesda Child Care Centre's activities, such as news, updates, and event invitations.</p>
                    <p>You may opt-out of these communications at any time by following the unsubscribe instructions in any email or contacting us directly.</p>

                    <h2>2.4 Intellectual Property</h2>
                    <p>All content, including text, images, and graphics, on this website is owned by Bethesda Child Care Centre, unless otherwise stated. You may not copy, reproduce, or distribute any content from the website without our explicit permission.</p>

                    <h2>2.5 Third-Party Links</h2>
                    <p>Our website may contain links to third-party websites. We do not control the content or privacy practices of these external websites, and you visit them at your own risk. We are not responsible for any content, advertisements, or practices on third-party sites.</p>

                    <h2>2.6 Limitation of Liability</h2>
                    <p>Bethesda Child Care Centre is not responsible for any loss or damage arising from your use of the website or reliance on information provided on the site. We make no warranties regarding the accuracy or completeness of any content.</p>

                    <h2>2.7 Governing Law</h2>
                    <p>These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising under or in connection with these Terms will be resolved by the competent courts in Kenya.</p>

                    <h2>2.8 Modifications to Website</h2>
                    <p>Bethesda Child Care Centre reserves the right to modify, suspend, or discontinue any part of the website at any time, without prior notice. We also reserve the right to update or change these Terms and Conditions as needed.</p>

                    <h2>2.9 Contact Us</h2>
                    <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                    <address className="not-italic border-l-4 border-primary pl-4">
                        Bethesda Child Care Centre<br />
                        Address: Ndunduri, Nakuru, Kenya<br />
                        Email: bethesdachildcarekenya@gmail.com<br />
                        Contact: +254 720 224 464<br />
                        Contact: +254 721 201 092
                    </address>

                    <div className="border-t pt-6 mt-12">
                        <h2 className="font-headline text-2xl font-bold">Legal Disclaimer</h2>
                        <p>The information provided on this website is for general informational purposes only. While we strive to ensure that all information is accurate and up-to-date, we cannot guarantee the accuracy, completeness, or timeliness of the content.</p>
                        <p>The content on this website is not intended as professional advice, and we make no representations or warranties regarding its accuracy. Visitors should seek professional advice before making any decisions based on the information provided.</p>
                        <p>Bethesda Child Care Centre is not responsible for any actions or damages arising from the use of this website, including any reliance on information contained on this site.</p>
                        <p>We are not liable for any third-party content or links that may appear on our website. Links to external websites are provided for convenience and do not imply endorsement of their content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
