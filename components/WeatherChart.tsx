'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart, Area } from 'recharts'
import { WeatherMonth } from '@/lib/types'

export default function WeatherChart({ data, destinationName }: { data: WeatherMonth[]; destinationName: string }) {
  const chartData = data.map((m) => ({
    month: m.month.slice(0, 3),
    snowfall: m.avgSnowfallInches,
    high: m.avgHighF,
    low: m.avgLowF,
    snowDays: m.snowDays,
  }))

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Monthly Snowfall (inches)</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                formatter={(value) => [`${value}"`, 'Snowfall']}
              />
              <Bar dataKey="snowfall" fill="#38bdf8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Temperature Range (&deg;F)</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                formatter={(value, name) => [`${value}°F`, name === 'high' ? 'High' : 'Low']}
              />
              <Area dataKey="low" fill="#dbeafe" stroke="#93c5fd" fillOpacity={0.3} />
              <Line dataKey="high" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }} />
              <Line dataKey="low" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
