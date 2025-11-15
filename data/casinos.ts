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
    name: "Billionaire Spin",
    logo: "/billionaire-spin.svg",
    rating: 9.8,
    bonus: "Até 1.500€ + 250 Rodadas",
    features: ["Saques Rápidos", "App Móvel", "15% Cashback"],
    isTopChoice: true,
    url: "https://qualityboost.top/ss8DCZQG",
  },
  {
    rank: 2,
    name: "Aerobet",
    logo: "/aerobet.webp",
    rating: 9.7,
    bonus: "Até 1.500€ + 250 Rodadas",
    features: ["Casino Móvel", "Jogos Exclusivos", "Apostas Desportivas"],
    url: "https://qualityboost.top/pqYpQQJ7",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
