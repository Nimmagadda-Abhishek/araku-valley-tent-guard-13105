import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Generate calendar days with occupancy data
const generateCalendarDays = () => {
  const days = [];
  for (let i = 1; i <= 30; i++) {
    days.push({
      date: i,
      available: Math.floor(Math.random() * 50),
      total: 50,
      revenue: Math.floor(Math.random() * 50000) + 10000,
    });
  }
  return days;
};

const calendarDays = generateCalendarDays();

export default function CalendarView() {
  const getOccupancyColor = (available: number, total: number) => {
    const occupancyRate = ((total - available) / total) * 100;
    if (occupancyRate >= 90) return "border-destructive bg-destructive/10";
    if (occupancyRate >= 70) return "border-warning bg-warning/10";
    if (occupancyRate >= 50) return "border-success bg-success/10";
    return "border-border bg-card";
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Calendar header */}
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">November 2025</h2>
              <p className="text-sm text-muted-foreground">
                Click on any date to view detailed bookings
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Calendar */}
        <Card className="p-6 shadow-soft">
          <div className="space-y-4">
            {/* Day headers */}
            <div className="grid grid-cols-7 gap-4">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold text-muted-foreground"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-4">
              {calendarDays.map((day) => (
                <button
                  key={day.date}
                  className={`group relative rounded-lg border-2 p-4 text-left transition-all hover:scale-105 hover:shadow-medium ${getOccupancyColor(
                    day.available,
                    day.total
                  )}`}
                >
                  <div className="space-y-2">
                    <p className="text-lg font-bold text-foreground">{day.date}</p>
                    <div className="space-y-1 text-xs">
                      <p className="font-medium text-foreground">
                        {day.available}/{day.total} available
                      </p>
                      <p className="text-muted-foreground">
                        ₹{(day.revenue / 1000).toFixed(1)}k revenue
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 top-full z-10 mt-2 hidden w-64 rounded-lg border border-border bg-popover p-4 shadow-strong group-hover:block">
                    <h4 className="mb-2 font-semibold text-popover-foreground">
                      November {day.date}, 2025
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Tents:</span>
                        <span className="font-medium text-popover-foreground">
                          {day.total}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Available:</span>
                        <span className="font-medium text-popover-foreground">
                          {day.available}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Booked:</span>
                        <span className="font-medium text-popover-foreground">
                          {day.total - day.available}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Revenue:</span>
                        <span className="font-medium text-popover-foreground">
                          ₹{day.revenue.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <Button className="mt-4 w-full" size="sm">
                      View Details
                    </Button>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
