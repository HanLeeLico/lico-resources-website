import Link from "next/link";
import type { Metadata } from "next";
import Logo from "@/components/Logo";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Contractor Portal",
  description: "Sign in to access timesheets, invoices, and engagement details.",
  alternates: { canonical: "/portal/login" },
  robots: { index: false, follow: false },
};

export default function PortalLoginPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" aria-label="Lico Resources home">
            <Logo />
          </Link>
          <Link
            href="/"
            className="mono text-xs text-black/40 hover:text-black tracking-widest"
          >
            ← BACK TO WEBSITE
          </Link>
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center px-8 py-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="glow glow-red-1" style={{ opacity: 0.1 }} />

        <div className="relative w-full max-w-md">
          <div className="card rounded-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="tag mono mb-3">CONTRACTOR PORTAL</div>
              <h1 className="text-3xl font-extrabold tracking-tight mb-2">Sign in.</h1>
              <p className="text-black/55 text-sm">
                Access timesheets, invoices, and engagement details.
              </p>
            </div>

            <LoginForm />

            <div className="mt-8 pt-6 border-t border-black/10 text-center">
              <p className="text-sm text-black/55">
                New to Lico?{" "}
                <Link href="/contact" className="accent font-semibold hover:underline">
                  Get in touch
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-black/40 mono tracking-widest">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            ENCRYPTED CONNECTION · COOKIES REQUIRED
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 text-xs text-black/40 mono tracking-widest">
          <div>© {new Date().getFullYear()} LICO RESOURCES PTE LTD · EA LICENCE 13C6733</div>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-black">CONTACT</Link>
            <Link href="#" className="hover:text-black">PRIVACY</Link>
            <Link href="#" className="hover:text-black">TERMS</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
