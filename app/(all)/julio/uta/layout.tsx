import { Navbar } from "@/components/navbar/navbar";

export default function UtaLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
			<section className="bg-lowgray">
				<Navbar/>
				<div>
				{children}
			</div>
		</section>
	);
}
