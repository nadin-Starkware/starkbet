import { FeaturedPredictionCard } from "@/components/featured-prediction-card"
import { PredictionCard } from "./Prediction-card"
import { Header } from "./Header/Header"
import { useAccount } from "@starknet-react/core"
import { useState } from "react"
import { AppTabs } from "@/types/ui"
import { useMealData } from "@/hooks/useMealData"

const predictions = [
  {
    category: "Soccer",
    timeLeft: "206d",
    question: "Will Macabi Haifa win the Premier League?",
    yesPercentage: 65.34,
    noPercentage: 34.66,
    prizePool: 156.92
  },
  {
    category: "Basketball",
    timeLeft: "179d",
    question: "Will Lakers make it to NBA Finals?",
    yesPercentage: 42.21,
    noPercentage: 57.79,
    prizePool: 89.46
  },
  {
    category: "MMA",
    timeLeft: "266d",
    question: "Will Conor McGregor win his next fight?",
    yesPercentage: 48.88,
    noPercentage: 51.12,
    prizePool: 234.57
  }
]

export const StarkBetApp = () => {
  const starknetWallet = useAccount();
  const [activeTab, setActiveTab] = useState<string>(AppTabs.MEAL_REGISTRATION);
  const {
    setSuccessFetchingUserEvents,
  } = useMealData();

  const onConnectWallet = async () => {
    setSuccessFetchingUserEvents(false);
  };
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container px-4 py-16 mx-auto">
        {/* Hero Section */}
        <Header wallet={starknetWallet} onConnectWallet={onConnectWallet} />

        {/* Featured Predictions */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          <FeaturedPredictionCard
            category="Soccer"
            title="Premier League Finals"
            variant="blue"
          />
          <FeaturedPredictionCard
            category="Basketball"
            title="NBA Championship"
            variant="red"
          />
        </div>

        {/* Prediction Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {predictions.map((prediction, index) => (
            <PredictionCard
              key={index}
              {...prediction}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

