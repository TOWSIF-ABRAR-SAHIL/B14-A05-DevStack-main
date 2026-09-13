import type { Technology } from '../types/tech';

interface TechCardProps {
  tech: Technology;
  onAddToStack: (tech: Technology) => void;
  isAdded: boolean;
}

export default function TechCard({ tech, onAddToStack, isAdded }: TechCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between relative">
      
      <div>
       
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 p-2">
            <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-100">
            {tech.badge}
          </span>
        </div>

      
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>

   
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
          {tech.description}
        </p>
      </div>

  
      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-2 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-gray-100 font-medium text-gray-600">
              {tech.category}
            </span>
            <span>{tech.difficulty}</span>
          </div>

          <div className="flex items-center gap-1 font-semibold text-gray-700">
            <span className="text-amber-400">★</span>
            <span>{tech.rating}</span>
          </div>
        </div>

       
        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm transition ${
            isAdded
              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
              : 'bg-gray-900 hover:bg-gray-800 text-white shadow-sm'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>

    </div>
  );
}