export default function TDALayout({
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
