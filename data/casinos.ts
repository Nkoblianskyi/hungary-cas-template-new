export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "Lamabet",
    logo: "/lamabet.svg",
    rating: 9.8,
    bonus: "700% até €10 000 + 725 Rodadas Grátis",
    features: ["Saques Rápidos", "App Móvel", "15% Cashback"],
    isTopChoice: true,
    url: "https://qualityboost.top/ss8DCZQG",
  },
  {
    rank: 2,
    name: "Billybets",
    logo: "/billybets.webp",
    rating: 9.5,
    bonus: "100% até €500 + 200 Giros Grátis",
    features: ["Casino Móvel", "Jogos Exclusivos", "Apostas Desportivas"],
    url: "https://qualityboost.top/pqYpQQJ7",
  },
  {
    rank: 3,
    name: "RichRoyal",
    logo: "/rich-royal.webp",
    rating: 9.3,
    bonus: "275% até €7500 + 225 GG + 1 Bonus Crab",
    features: ["Pagamento Cripto", "Bónus Semanal", "Suporte ao Vivo"],
    url: "https://qualityboost.top/gP9jLtsh",
  },
  {
    rank: 4,
    name: "WinRolla",
    logo: "/winrolla.webp",
    rating: 9.3,
    bonus: "300% até €8000 + 300 GG + 1 Bonus Crab",
    features: ["Saques Rápidos", "Programa VIP", "Rodadas Grátis"],
    url: "https://qualityboost.top/mnQGG4Ld",
  },
  {
    rank: 5,
    name: "MrPacho",
    logo: "/mrpacho.svg",
    rating: 9.1,
    bonus: "100% até €500 + 200 Giros Grátis",
    features: ["Requisitos Baixos", "Bónus de Recarga", "Chat 24/7"],
    url: "https://qualityboost.top/rSDvcsjR",
  },
  {
    rank: 6,
    name: "Boomerang Bet",
    logo: "/boomerang-bet.svg",
    rating: 9.0,
    bonus: "100% até €500 + 200 Giros Grátis",
    features: ["Saques Rápidos", "App Móvel", "Casino ao Vivo"],
    url: "https://qualityboost.top/6r6TYFVf",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
