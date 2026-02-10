import { motion } from "framer-motion";
import { type Track } from "@/lib/mockData";
import { ArrowRight } from "lucide-react";

export function TrackCard({ track, index }: { track: Track; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/50 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
      <div className="relative h-full bg-black border border-white/10 rounded-2xl p-8 flex flex-col hover:border-primary/50 transition-colors duration-300">
        
        {/* Number Badge */}
        <div className="mb-6 flex items-center justify-between">
          <span className="font-display text-4xl font-bold text-white text-3d group-hover:text-primary transition-colors">
            0{index + 1}
          </span>
          <div className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
             {/* Icon Placeholder - In a real app, map icon based on track type */}
             <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#FFD700]"></div>
          </div>
        </div>

        <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
          {track.title}
        </h3>
        
        <p className="text-white/60 leading-relaxed flex-grow">
          {track.description}
        </p>
      </div>
    </motion.div>
  );
}
