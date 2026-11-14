"use client"
import { Image } from "@/components/ui/Image";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export default function ZilaPage() {
	const BigScreen = useIsDesktop();

	return (
		<main className="flex flex-col h-full items-center justify-center gap-4 pb-4 md:pb-10 
         overflow-hidden">

            {/* ------------- Banner------------- */}
            <section className="w-full px-[0%] mt-">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src={`/img/zila/${BigScreen ? "webFija" : "mobileFija"}.webp`}
                    width="100%"
                />
            </section>
            <section className="w-full flex justify-center">
                <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                    link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20Zila."}/>
            </section>
		</main>
	);
}

