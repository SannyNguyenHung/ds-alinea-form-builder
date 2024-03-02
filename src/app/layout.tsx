import "./globals.css";
import { cms } from "@/cms";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
      <cms.previews widget />
    </html>
  );
}
