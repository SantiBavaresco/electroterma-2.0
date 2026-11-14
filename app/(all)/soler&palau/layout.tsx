import { Navbar } from "@/components/navbar/navbar";
export default function SolerPalauLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
			<section>
			<Navbar/>
			<div>
				{children}
			</div>
		</section>
	);
}
