import QRCode from "qrcode";

export type QrItem = { label: string; url: string; display: string };

async function svgFor(url: string) {
  return QRCode.toString(url, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
    color: { dark: "#0a0a0b", light: "#ffffff" },
  });
}

/** Server component: QR codes rendered to inline SVG at build time (no outside service). */
export async function QrCodes({ items, large = false }: { items: QrItem[]; large?: boolean }) {
  const svgs = await Promise.all(items.map((i) => svgFor(i.url)));
  return (
    <div className={`grid gap-6 ${large ? "md:grid-cols-2" : "grid-cols-2"}`}>
      {items.map((item, i) => (
        <figure key={item.url} className="flex flex-col items-center text-center">
          <div
            className={`w-full ${large ? "max-w-[420px]" : "max-w-[200px]"} rounded-xl overflow-hidden bg-white p-2 [&>svg]:w-full [&>svg]:h-auto`}
            dangerouslySetInnerHTML={{ __html: svgs[i] }}
            role="img"
            aria-label={`QR code: ${item.label}`}
          />
          <figcaption className="mt-3">
            <div className={`${large ? "text-2xl" : "text-sm"} font-semibold text-[color:var(--fg)]`}>{item.label}</div>
            <div className={`${large ? "text-base" : "text-xs"} font-mono text-[color:var(--fg-muted)] break-all`}>
              {item.display}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
