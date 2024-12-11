import { Clock, Trophy } from 'lucide-react'
import { cn } from "@/lib/utils"

interface PredictionCardProps {
  category: string
  timeLeft: string
  question: string
  yesPercentage?: number
  noPercentage?: number
  prizePool: number
  featured?: boolean
}

export function PredictionCard({
  category,
  timeLeft,
  question,
  yesPercentage,
  noPercentage,
  prizePool,
  featured = false
}: PredictionCardProps) {
  return (
    <div className={cn(
      "rounded-xl p-6",
      featured ? "bg-blue-600 text-white" : "bg-slate-900 text-slate-50"
    )}>
      <div className="flex items-center gap-4 mb-4">
        <span className="px-3 py-1 text-sm rounded-full bg-opacity-20 bg-slate-50">
          {category}
        </span>
        {!featured && (
          <div className="flex items-center text-sm text-slate-400">
            <Clock className="w-4 h-4 mr-1" />
            {timeLeft} left
          </div>
        )}
      </div>

      <h2 className={cn(
        "mb-6",
        featured ? "text-3xl font-bold" : "text-xl font-semibold"
      )}>
        {question}
      </h2>

      {featured ? (
        <button className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-blue-500/20 hover:bg-blue-500/30">
          Predict Now
        </button>
      ) : (
        <div className="space-y-3 mb-4">
          <button className="w-full px-4 py-2 text-sm font-medium text-emerald-400 transition-colors rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 flex justify-between items-center">
            <span>Yes</span>
            <span>{yesPercentage}%</span>
          </button>
          <button className="w-full px-4 py-2 text-sm font-medium text-rose-400 transition-colors rounded-lg bg-rose-500/20 hover:bg-rose-500/30 flex justify-between items-center">
            <span>No</span>
            <span>{noPercentage}%</span>
          </button>
        </div>
      )}

      {!featured && (
        <div className="flex items-center text-sm text-slate-400">
          <Trophy className="w-4 h-4 mr-1" />
          Prize Pool: {prizePool}
        </div>
      )}
    </div>
  )
}

