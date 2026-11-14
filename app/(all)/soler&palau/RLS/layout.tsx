export default function RSLayout({
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
