export function OperationalHighlights() {
  const highlights = [
    { date: "Apr 2020", description: "First Warehouse (500 sq ft)" },
    { date: "Jun 2020", description: "Expanded to 1,200 sq ft" },
    { date: "Jul 2021", description: "Growth to 1,800 sq ft" },
    { date: "Feb 2022", description: "Peak Space: 8,000 sq ft" },
    { date: "May 2023", description: "Optimized to 2,500 sq ft" },
    { date: "Dec 2023", description: "Ceased Operations" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Operational Highlights</h3>
      <div className="space-y-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex gap-4">
            <div className="text-sm font-medium text-gray-500">{highlight.date}</div>
            <div className="text-sm text-gray-900">{highlight.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 