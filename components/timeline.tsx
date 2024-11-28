interface TimelineItem {
  company: string
  role: string
  period: string
  width?: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-16">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-pink-800"></div>

      <div className="relative space-y-8">
        {items.map((item, index) => (
          <div
            key={item.company}
            className={`
              flex items-center w-full 
              ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}
            `}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full z-10"></div>

            {/* Content Container */}
            <div
              className={`
                md:w-[calc(50%-2rem)]
                w-40
                -mx-8
                md:-mx-0
                p-4 
                rounded-lg 
                bg-pink-50 
                border 
                border-pink-200 
                shadow-sm
                ${index % 2 === 0 ? "mr-auto pl-4" : "ml-auto pr-4"}
              `}
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="text-md font-bold text-pink-950">
                    {item.role}
                  </div>
                  <div className="text-sm text-pink-800 font-semibold">{item.company}</div>
                </div>
                <div className="text-xs text-pink-600 ml-4">{item.period}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

