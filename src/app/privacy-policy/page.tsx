import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ProspectOutreach",
  description:
    "Read the ProspectOutreach Privacy Policy to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pb-16 pt-10 sm:pb-24">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-fuchsia-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl" />

      <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-soft sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Privacy Matters
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information. Please read it carefully.
          </p>

          <div className="mt-10 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Who is ProspectOutreach Pvt. Ltd.?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Backed by 9 years of deep B2B expertise, ProspectOutreach empowers Marketing and Sales teams to outpace the competition and maximize ROI.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We move beyond basic demographics with our Triple-Layer Intent Strategy. By analyzing search specialties, activity duration, and real-time digital signals, we verify genuine interest to ensure your campaign connects with buyers, not just leads.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground">
                What information about me do you collect?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                At ProspectOutreach, data integrity is our priority. We collect only the essential professional information needed to power your demand generation engine:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 leading-relaxed text-muted-foreground">
                <li><span className="font-semibold text-foreground">Identification:</span> Name, job title, and business contact details.</li>
                <li><span className="font-semibold text-foreground">Validation:</span> Temporary IP and user agent data to verify engagement (deleted immediately after validation).</li>
                <li><span className="font-semibold text-foreground">Account Management:</span> Billing details and service history to personalize your experience.</li>
              </ul>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We bridge the gap between audience intelligence and privacy by ensuring every data point we collect serves a direct purpose in driving your sustainable growth.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground">
                How do you collect information about me?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                At ProspectOutreach, we prioritize data integrity. Most of the information we collect is provided directly by you - for instance, when you share professional or billing details to initiate our services.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To optimize your experience and our &quot;Demand. Connect. Convert.&quot; workflow, we also automatically collect engagement data through industry-standard third-party cookies, including Google Analytics and specialized marketing automation tools. These cookies help us analyze visitor behavior and refine our global outreach strategies. Additionally, we may occasionally receive professional insights from verified third-party sources, such as data brokers or industry partners, only when we have confirmed they have your explicit consent or a legal right to share that information with us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground">
                What methods do you use to contact me?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                At ProspectOutreach, we value seamless communication. We may reach out via phone, email, or professional social media channels to discuss your growth strategy. If you have a preferred method of contact, please let us know using the details below - we are committed to connecting with you on your terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground">
                For how long do you store my information?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                At ProspectOutreach, we adhere to a strict data minimization policy. We do not retain personal data longer than is necessary to fulfill the specific purposes for which it was collected. However, we may retain certain information where necessary to comply with legal obligations, protect vital interests, or meet essential auditing and internal security requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground">
                Is my personal data secure?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Data security is foundational to our partnership. At ProspectOutreach, access to your personal information is strictly limited to authorized personnel who require it to drive your growth. We maintain an industry-leading standard of care in data storage and ensure full compliance with all global and regional data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground">
                With whom do you share my personal information?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We may share your personal data with our affiliated group companies for internal administrative, operational, and legitimate business purposes.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                In the course of business development, we may engage in transactions such as mergers, acquisitions, asset sales, or restructurings. In such circumstances, your personal data may be disclosed to, or transferred as a business asset to, the relevant third party. In the event of insolvency, bankruptcy, or reorganization, personal data may also form part of the assets transferred.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Where you have indicated an interest in specific products or services, we may share your personal data with our clients. Such interest may be demonstrated through actions including, but not limited to, submitting your details to access gated content (such as whitepapers or eBooks), engaging with our marketing communications, or interacting with advertisements managed by us. We recommend that you review the relevant third party&apos;s privacy policy prior to providing your information. You retain the right to object to the processing of your personal data by both our clients and us.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We may also disclose your personal data where necessary to comply with applicable legal or regulatory obligations, or where we have a legitimate interest in doing so. This includes responding to lawful requests from public authorities, enforcing our terms and policies, preventing fraud, addressing security or technical issues, and protecting the rights, property, or safety of our business, users, or others.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground">
                What are the implications if I do not provide my personal data or withdraw consent for marketing communications?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To deliver our high-impact products and demand generation services, ProspectOutreach requires specific professional data. Please note that if you choose not to provide these details, we will be unable to fulfill our service commitments to you. Furthermore, should you opt-out of data processing for marketing purposes, you will no longer receive our curated industry insights, educational content, or high-value professional offers designed to scale your business.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground">
                How can you get in contact with our team?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                EON Free Zone, Kharadi, Pune, Maharashtra 411014<br />
                9959953818
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wide">Disclaimer</p>
              <p className="mt-2 text-sm text-muted-foreground">
                This policy may be updated from time to time. We encourage you to review it periodically to stay informed of any significant changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

