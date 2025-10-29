import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RecentBookings } from "@/components/dashboard/RecentBookings";
import { OccupancyCalendar } from "@/components/dashboard/OccupancyCalendar";
import { BookingTrends } from "@/components/dashboard/BookingTrends";
import { Calendar, IndianRupee, Percent, AlertCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Today's Bookings"
            value={12}
            icon={Calendar}
            trend={{ value: "15%", isPositive: true }}
            subtitle="vs. yesterday"
          />
          <MetricCard
            title="Monthly Revenue"
            value="₹2.4L"
            icon={IndianRupee}
            trend={{ value: "8.2%", isPositive: true }}
            subtitle="vs. last month"
          />
          <MetricCard
            title="Occupancy Rate"
            value="78%"
            icon={Percent}
            trend={{ value: "3.5%", isPositive: true }}
            subtitle="current month"
          />
          <MetricCard
            title="Pending Confirmations"
            value={5}
            icon={AlertCircle}
            subtitle="require attention"
          />
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <OccupancyCalendar />
          <BookingTrends />
        </div>

        {/* Recent bookings */}
        <RecentBookings />
      </div>
    </DashboardLayout>
  );
}
