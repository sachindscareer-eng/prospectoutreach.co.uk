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
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information. Please read it carefully.
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Who is ProspectOutreach Pvt. Ltd.?
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Backed by 9 years of deep B2B expertise, ProspectOutreach
                empowers Marketing and Sales teams to outpace the competition
                and maximize ROI.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                For how long do you store my information?
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                At ProspectOutreach, we adhere to a strict data minimization
                policy. We do not retain personal data longer than is necessary
                to fulfill the specific purposes for which it was collected.
                However, we may retain certain information where necessary to
                comply with legal obligations, protect vital interests, or meet
                essential auditing and internal security requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Is my personal data secure?
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Data security is foundational to our partnership. At
                ProspectOutreach, access to your personal information is
                strictly limited to authorized personnel who require it to drive
                your growth. We maintain an industry-leading standard of care in
                data storage and ensure full compliance with all global and
                regional data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                With whom do you share my personal information?
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We may share your personal data with our affiliated group
                companies for internal administrative, operational, and
                legitimate business purposes.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                In the course of business development, we may engage in
                transactions such as mergers, acquisitions, asset sales, or
                restructurings. In such circumstances, your personal data may be
                disclosed to, or transferred as a business asset to, the
                relevant third party. In the event of insolvency, bankruptcy, or
                reorganization, personal data may also form part of the assets
                transferred.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Where you have indicated an interest in specific products or
                services, we may share your personal data with our clients. Such
                interest may be demonstrated through actions including, but not
                limited to, submitting your details to access gated content
                (such as whitepapers or eBooks), engaging with our marketing
                communications, or interacting with advertisements managed by us.
                We recommend that you review the relevant third party&apos;s
                privacy policy prior to providing your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
