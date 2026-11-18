import type { Metadata } from "next";
import Link from "next/link";
import { QrCodes } from "@/components/QrCodes";
import { QR_ITEMS } from "@/lib/qr";

export const metadata: Metadata = {
  title: "Scan — Alexander Gouyet",
  robots: { index: false },
};

/** Full-screen QR codes to show in person (phone, laptop) or print. */
export default function QrPage() {
  return (
    <main className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-6 py-12 print:bg-white">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-center">Alexander Gouyet</h1>
      <p className="text-[color:var(--fg-dim)] mb-10 text-center">Scan with your phone camera</p>
      <div className="w-full max-w-4xl">
        <QrCodes items={QR_ITEMS} large />
      </div>
      <Link
        href="/blog/rocky"
        className="mt-12 text-xs font-mono uppercase tracking-widest text-[color:var(--fg-muted)] hover:text-[color:var(--accent)] print:hidden"
      >
        ← Back to the Rocky post
      </Link>
    </main>
  );
}
