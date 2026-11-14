"use client"
import { Image } from "@nextui-org/image";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";
import { ManualButton } from "@/components/custonButtons/manual";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export default function UtaPage() {
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
                    src={`../img/tempomatic/uta/provisorio/${BigScreen ? "webFija" : "mobileFija"}.webp`}
                    width="100%"
                />
            </section>
            <section className="w-full flex justify-center gap-4">
                <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                    link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20UTA."}/>
                <ManualButton size={BigScreen ? 40 : 16} screen={BigScreen ? "xl" : "md"} link={"../../manuales/uta.pdf"} dwName={"UTA Manual.pdf"}/>
            </section>
		</main>
	);
}

