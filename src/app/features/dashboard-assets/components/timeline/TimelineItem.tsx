interface TimelineItemProps {
  date: string;
  title: string;
  children: React.ReactNode;
}

export function TimelineItem({ date, title, children }: TimelineItemProps) {
  return (
    <div className="relative">
      <div className="absolute -left-[1.625rem] w-3 h-3 bg-white border-2 border-blue-500 rounded-full translate-y-1.5" />
      <div className="flex flex-col space-y-1">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium text-gray-500">{date}</span>
          <h5 className="font-medium text-gray-900">{title}</h5>
        </div>
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  )
} 