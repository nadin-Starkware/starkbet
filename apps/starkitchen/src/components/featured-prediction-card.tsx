import { cn } from "@/lib/utils"

interface FeaturedPredictionCardProps {
  category: string
  title: string
  variant: 'red' | 'blue' | 'green' | 'white' | 'lime'
  icon?: string
}

export function FeaturedPredictionCard({
  category,
  title,
  variant,
  icon
}: FeaturedPredictionCardProps) {
  const isWhite = variant === 'white';

  return (
    <div className={cn(
      "rounded-xl p-6 h-[300px] relative overflow-hidden",
      variant === 'red' ? "bg-gradient-to-br from-red-600 to-red-800 text-white" :
      variant === 'blue' ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white" :
      variant === 'green' ? "bg-gradient-to-br from-green-600 to-green-800 text-white" :
      variant === 'lime' ? "bg-gradient-to-br from-lime-400 to-lime-500 text-white" :
      "bg-white text-green-600"
    )}>
      <div className="flex items-center justify-between mb-4">
        <span className={cn(
          "px-3 py-1 text-sm rounded-full",
          variant === 'red' ? "bg-red-500/20" :
          variant === 'blue' ? "bg-blue-500/20" :
          variant === 'green' ? "bg-green-500/20" :
          variant === 'lime' ? "bg-lime-300/30" :
          "bg-green-100 text-green-600"
        )}>
          {category}
        </span>
        {icon && (
          <div className={cn("flex items-center gap-2 text-sm", isWhite ? "text-green-600" : "text-white/90")}>
            <img src={icon} alt="" className="w-6 h-6" />
            {title}
          </div>
        )}
      </div>

      <h2 className={cn("text-3xl font-bold mb-6", isWhite ? "text-green-600" : "text-white")}>
        {title}
      </h2>

      <button className={cn(
        "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
        variant === 'red' ? "bg-red-500/20 hover:bg-red-500/30 text-white" :
        variant === 'blue' ? "bg-blue-500/20 hover:bg-blue-500/30 text-white" :
        variant === 'green' ? "bg-green-500/20 hover:bg-green-500/30 text-white" :
        variant === 'lime' ? "bg-lime-300/30 hover:bg-lime-300/40 text-white" :
        "bg-green-100 hover:bg-green-200 text-green-600"
      )}>
        Predict Now
      </button>
    </div>
  )
}

