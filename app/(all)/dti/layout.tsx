import { Navbar } from "@/components/navbar/navbar";

export default function TempomaticLayout({
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
