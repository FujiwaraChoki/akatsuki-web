"use client";

import { motion, Variants } from "framer-motion";

export default function Home() {
  const heading = "Akatsuki";

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const sloganVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: heading.length * 0.08 + 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: heading.length * 0.08 + 0.3 + 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      <div className="gradient-orb gradient-orb-3" />

      {/* Top Right CTA */}
      <div className="absolute top-8 right-8 z-10">
        <a
          className="rounded-full border border-foreground/20 px-5 py-2 text-sm text-foreground/80 transition-all hover:border-foreground/40 hover:text-foreground"
          href="https://apps.apple.com/app"
        >
          Get for iPhone{" "}
        </a>
      </div>

      {/* Main Content - Center */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Glassy backdrop behind heading */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="gradient-backdrop" />
        </div>

        {/* Animated Heading - Character by Character */}
        <motion.h1
          className="mb-6 text-[80px] font-normal leading-none tracking-tight text-crimson drop-shadow-crimson md:text-[120px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {heading.split("").map((char, index) => (
            <motion.span key={index} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Slogan */}
        <motion.p
          className="mb-16 text-[48px] font-normal leading-relaxed text-foreground md:text-[64px]"
          variants={sloganVariants}
          initial="hidden"
          animate="visible"
        >
          Begin beautifully.
        </motion.p>

        {/* Animated Download Button */}
        <motion.a
          href="https://apps.apple.com/app"
          className="gradient-button rounded-full bg-crimson px-16 py-5 text-xl text-white transition-all hover:opacity-90"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          Download for iOS
        </motion.a>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-8 w-full px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-sm text-foreground/60 md:flex-row md:justify-between">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Akatsuki. All rights reserved.</p>
          <nav className="flex gap-6">
            <a href="/privacy" className="transition-colors hover:text-crimson">
              Privacy Policy
            </a>
            <a href="mailto:sami@samihindi.com" className="transition-colors hover:text-crimson">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
