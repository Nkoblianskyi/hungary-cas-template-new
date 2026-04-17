import Image from "next/image"
import { Gift, CreditCard, Headphones } from "lucide-react"

export function Advantages() {
  const advantages = [
    {
      icon: Gift,
      title: "Exkluzív bónuszok",
      titleShort: "Bónuszok",
      color: "text-yellow-400",
    },
    {
      icon: CreditCard,
      title: "Gyors fizetések",
      titleShort: "Fizetés",
      color: "text-yellow-400",
    },
    {
      icon: Headphones,
      title: "24/7 ügyfélszolgálat",
      titleShort: "24/7",
      color: "text-yellow-400",
    },
    {
      title: "Engedélyezett és biztonságos",
      titleShort: "Biztonság",
      color: "text-red-400",
      image: "/flag.png",
    },
  ]

  return (
    <div className="container mx-auto px-1 sm:px-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-x-1 gap-y-1 sm:gap-3 w-full max-w-md sm:max-w-2xl">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center min-w-0 px-0.5">
              <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 mb-1 mx-auto">
                {advantage.image ? (
                  <Image
                    src={advantage.image || "/placeholder.svg"}
                    alt="Magyar zászló"
                    width={32}
                    height={32}
                    className="object-contain w-6 h-6 sm:w-8 sm:h-8"
                  />
                ) : (
                  advantage.icon && (
                    <advantage.icon className={`h-5 w-5 sm:h-8 sm:w-8 ${advantage.color}`} />
                  )
                )}
              </div>
              <h3 className="text-[10px] sm:text-xs font-semibold text-white leading-tight">
                <span className="md:hidden">{advantage.titleShort}</span>
                <span className="hidden md:inline">{advantage.title}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
