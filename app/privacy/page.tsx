import Link from "next/link";

export const metadata = {
  title: "Akatsuki • Privacy Policy",
  description: "Learn how the Akatsuki landing page handles (or rather avoids) personal data.",
};

const sections = [
  {
    heading: "Introduction",
    body: [
      'Akatsuki is a simple marketing site for the forthcoming Akatsuki iOS app. This Privacy Policy describes the information practices for visitors to https://akatsuki.app (the "Site").',
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "The Site is a static landing page. We do not embed analytics, advertising pixels, social widgets, or login functionality. As a result, we do not collect, store, or process personal data from visitors.",
      'If you choose to contact us by email (for example, via the "Contact" link), your message is delivered directly to the Akatsuki team. Your email address and message are used solely to respond to your enquiry and are not stored for marketing purposes.',
    ],
  },
  {
    heading: "Cookies and Tracking",
    body: ["The Site does not set cookies, use local storage, or perform any kind of traffic profiling."],
  },
  {
    heading: "Data Sharing",
    body: [
      "We do not sell, rent, or share visitor information with third parties. Email correspondence you initiate will never be disclosed unless required by law.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "Email correspondence is handled through standard email providers. While we take reasonable steps to secure communications, email is not an inherently secure medium. Please avoid sending sensitive information.",
    ],
  },
  {
    heading: "Children’s Privacy",
    body: [
      "The Site is not directed to children under the age of 13, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      'We may update this Privacy Policy from time to time. The "Last Updated" date at the top of the page reflects the most recent revision. Material changes will be posted on the Site.',
    ],
  },
  {
    heading: "Contact",
    body: ["For any privacy-related questions, contact Sami Hindi at sami@samihindi.com."],
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      <div className="gradient-orb gradient-orb-3" />

      <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-10">
        <Link href="/" className="text-xl font-normal text-foreground">
          Akatsuki
        </Link>
        <Link
          href="mailto:sami@samihindi.com"
          className="rounded-full border border-foreground/20 px-5 py-2 text-sm text-foreground/80 transition-all hover:border-foreground/40 hover:text-foreground"
        >
          Contact
        </Link>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-24">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">Privacy Policy</p>
          <h1 className="mt-4 text-5xl font-normal text-crimson md:text-6xl">
            We value a minimal footprint—including your data.
          </h1>
          <p className="mt-6 text-base text-foreground/70">
            Effective Date: October 24, 2025
            <br />
            Last Updated: October 24, 2025
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-3xl border border-foreground/10 bg-background/70 p-8 shadow-[0_20px_60px_-40px_rgba(193,39,45,0.4)] backdrop-blur"
            >
              <h2 className="text-2xl font-normal text-crimson">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-foreground/80">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between text-sm text-foreground/60">
          <Link href="/" className="transition-colors hover:text-crimson">
            ← Back to home
          </Link>
          <span>© {new Date().getFullYear()} Akatsuki. All rights reserved.</span>
        </div>
      </main>
    </div>
  );
}
