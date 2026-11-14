import { Image } from "@/components/ui/Image";
import { ItemsNavbar } from "@/types/itemsNavbar";


interface dataProps {
    data: ItemsNavbar,
    actual?: string;

}
const CardDisplaySypHome: React.FC<dataProps> = ({ data, actual, ...props }) => {
    return (
        
        <main className={`bg-white 
            data-[selectable=true]:focus:bg-blue-500 !important 
            data-[hover=true]:bg-orange-500 !important
            w-[40vw] lg:w-[20vw]
            group group-hover:bg-gray-5 gap-3
            z-10
            ${(data.key==="first") ? " md:rounded-tl-[28px] md:rounded-bl-[28px] hover:bg-none !important" : "" } 
            ${(data.key==="last") ? " md:rounded-tr-[28px] md:rounded-br-[28px] hover:bg-none !important" : "" } 
            ${(data.key==="11") ? " md:rounded-tl-[28px] md:rounded-br-[28px] hover:bg-none !important" : "" } 
            ${(data.key==="13") ? " md:rounded-tr-[28px] md:rounded-br-[28px] hover:bg-none !important" : "" } 
            ${(data.key==="21") ? " md:rounded-bl-[28px] md:rounded-br-[28px] hover:bg-none !important" : "" } 
            ${(data.key==="23") ? " md:rounded-br-[28px]  hover:bg-none !important" : "" } 
            


            shadow-xl border-1 ${data.labelShort===actual ? "border-warning" : "border-gray-100 " }  rounded-[28px] md:rounded-none
        `}>
            <div className={`flex flex-col justify-center items-center`}>
             <Image
                    radius="lg"
                    shadow="none"
                    width="100%"
                    alt={data.key}
                    className="p-1 my-2 w-[140px] h-[70px]  md:w-[240px] md:h-[140px] object-contain  gap-3 shadow-none"
                    src={data.img}
                    key={data.key}
                />
                <div className={`w-full mx-auto h-[45px] lg:min-h-10 lg:h-16 text-center flex flex-col  justify-center text-white font-nunito 
                    ${data.labelShort===actual ? "bg-[#EF7916]" : `${data.color} group-hover:bg-[#B2B2B2]` } 
                    
                    
                    ${(data.key==="first") ? " md:rounded-bl-[28px]" : "rounded-b-[18px] md::rounded-none"} 
                    ${(data.key==="last") ? " md:rounded-bl-[0px]" : "rounded-b-[18px] md:rounded-none"} 
                    ${(data.key==="21") ? " md:rounded-bl-[28px]  hover:bg-none !important" : "" } 
                    ${(data.key==="23") ? " md:rounded-br-[28px]  hover:bg-none !important" : "" }  
                `}>
                    {data?.label?.map((description:string)=>(
                        <p key={description} className="gap-3 xm:px-2 text-[10px] xm:text-xs md:text-sm lg:text-sm xl:text-lg">{description}</p>
            
                    ))}

                </div>
            </div>
        </main>

    );
}
export default CardDisplaySypHome;