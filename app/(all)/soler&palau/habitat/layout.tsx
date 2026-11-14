export default function HabitatLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
			<section>
			<div>
				{children}
			</div>
		</section>
	);
}
