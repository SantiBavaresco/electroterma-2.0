import RootShell, { rootMetadata, rootViewport } from "@/components/layout/RootShell";

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <RootShell>{children}</RootShell>;
}
