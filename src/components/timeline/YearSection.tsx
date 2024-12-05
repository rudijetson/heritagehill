import { ChevronDown, ChevronRight } from 'lucide-react'

interface YearSectionProps {
  year: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export function YearSection({ year, isExpanded, onToggle, children }: YearSectionProps) {
  return (
    <div className="border-l-2 border-blue-100 ml-2 mb-6">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 -ml-[0.3125rem] mb-4 group"
      >
        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-white" />
          ) : (
            <ChevronRight className="w-4 h-4 text-white" />
          )}
        </div>
        <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
          {year}
        </span>
      </button>
      
      {isExpanded && (
        <div className="ml-6 space-y-6">
          {children}
        </div>
      )}
    </div>
  )
} 