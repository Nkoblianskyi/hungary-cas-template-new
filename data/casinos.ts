export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  dopBonus?: string
  features: string[]
  isTopChoice?: boolean
  url: string
}

const bonusHungary = "250% akár 1.200.000 Ft + 350 IP + 1 Bonus Crab"

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "Astromania",
    logo: "/astronomia.png",
    rating: 9.8,
    bonus: bonusHungary,
    features: ["Gyors kifizetések", "Élő kaszinó", "VIP program"],
    isTopChoice: true,
    url: "https://qualityboost.top/KbHS44T9",
  },
  {
    rank: 2,
    name: "Crownplay",
    logo: "/crownplay.png",
    rating: 9.7,
    bonus: bonusHungary,
    features: ["Mobilbarát", "Exkluzív játékok", "Sportfogadás"],
    url: "https://qualityboost.top/jvRDZtB2",
  },
  {
    rank: 3,
    name: "Kinbet",
    logo: "/kinbet.svg",
    rating: 9.6,
    bonus: bonusHungary,
    features: ["Heti cashback", "Ingyenes pörgetések", "Gyors kifizetés"],
    url: "https://qualityboost.top/G7XffvbP",
  },
  {
    rank: 4,
    name: "Divaspin",
    logo: "/divaspin.webp",
    rating: 9.5,
    bonus: bonusHungary,
    features: ["Reload bónusz", "Élő osztók", "24/7 ügyfélszolgálat"],
    url: "https://qualityboost.top/jyZ2FpHD",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
