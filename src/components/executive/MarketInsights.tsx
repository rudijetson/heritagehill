"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'HBCU/D9 Market', value: 45, color: '#3B82F6' },    // Primary focus
  { name: 'Direct to Consumer', value: 35, color: '#34D399' }, // Online sales
  { name: 'Retail/Wholesale', value: 20, color: '#FCD34D' }    // Belk, etc.
]

export function MarketInsights() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-8">Market Insights & Learnings</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                label={({ name, value }) => `${name} ${value}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">HBCU/D9 Market</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Successfully licensed with 55+ organizations</li>
              <li>• Strong relationships with Divine Nine organizations</li>
              <li>• Demonstrated demand for quality HBCU merchandise</li>
              <li>• Complex licensing requirements need careful management</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Direct to Consumer</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Built 100,000+ email subscriber base</li>
              <li>• Successful until iOS privacy changes</li>
              <li>• ROAS declined from 5.8x to 3.8x post-iOS update</li>
              <li>• Demonstrated need for diverse marketing channels</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Retail/Wholesale</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Expanded to 125 retail locations</li>
              <li>• Learned importance of sustainable financing</li>
              <li>• Need for strong inventory management</li>
              <li>• Value of non-extractive capital partnerships</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 