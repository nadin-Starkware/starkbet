import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FeaturedEventProps {
  event: {
    name: string;
    sport: string;
    description: string;
    image: string;
  };
  onPredict: () => void;
}

const FeaturedEvent = ({ event, onPredict }: FeaturedEventProps) => (
  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 p-6 text-white">
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <Badge variant="secondary" className="bg-blue-400/20 text-white">
          {event.sport}
        </Badge>
        <Badge variant="secondary" className="bg-blue-400/20 text-white">
          {event.name}
        </Badge>
      </div>
      <h2 className="text-3xl font-bold mb-8">{event.name}</h2>
      <p className="text-lg mb-8 text-blue-100">{event.description}</p>
      <Button
        onClick={onPredict}
        className="w-fit bg-white/10 hover:bg-white/20 text-white"
      >
        Predict Now
      </Button>
    </div>
    <div className="absolute right-0 top-0 h-full w-1/2">
      <Image
        src={event.image}
        alt={event.name}
        fill
        className="object-cover object-center"
      />
    </div>
    <div className="absolute inset-0 bg-blue-900/50 z-0"></div>
  </div>
);

export default FeaturedEvent;
