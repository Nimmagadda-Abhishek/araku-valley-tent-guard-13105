import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockData = [
  { date: "Oct 1", bookings: 12 },
  { date: "Oct 5", bookings: 18 },
  { date: "Oct 10", bookings: 15 },
  { date: "Oct 15", bookings: 24 },
  { date: "Oct 20", bookings: 28 },
  { date: "Oct 25", bookings: 32 },
  { date: "Oct 30", bookings: 35 },
];

export function BookingTrends() {
  return (
    <Card className="p-6 shadow-soft">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Booking Trends</h3>
        <p className="text-sm text-muted-foreground">Last 30 days</p>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="date"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="bookings"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
