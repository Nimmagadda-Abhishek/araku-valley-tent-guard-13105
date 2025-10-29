import { Card } from "@/components/ui/card";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Mock data for occupancy (0-100)
const mockOccupancy = [
  [45, 52, 68, 75, 82, 90, 88],
  [78, 65, 58, 72, 85, 95, 92],
  [70, 55, 48, 60, 78, 88, 85],
  [50, 42, 38, 55, 70, 82, 80],
  [35, 28, 25, 40, 58, 75, 72],
];

export function OccupancyCalendar() {
  const getOccupancyColor = (occupancy: number) => {
    if (occupancy >= 90) return "bg-destructive";
    if (occupancy >= 70) return "bg-warning";
    if (occupancy >= 50) return "bg-success";
    return "bg-muted";
  };

  return (
    <Card className="p-6 shadow-soft">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Monthly Occupancy Heatmap</h3>
        <p className="text-sm text-muted-foreground">November 2025</p>
      </div>
      <div className="space-y-2">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-medium text-muted-foreground"
            >
              {day}
            </div>
          ))}
        </div>
        {/* Calendar grid */}
        <div className="space-y-2">
          {mockOccupancy.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 gap-2">
              {week.map((occupancy, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`group relative flex aspect-square items-center justify-center rounded-lg ${getOccupancyColor(
                    occupancy
                  )} transition-all hover:scale-105 hover:shadow-medium`}
                >
                  <span className="text-xs font-medium text-white">
                    {weekIndex * 7 + dayIndex + 1}
                  </span>
                  <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-popover px-2 py-1 text-xs text-popover-foreground shadow-strong group-hover:block">
                    {occupancy}% occupancy
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Legend */}
        <div className="flex items-center justify-center gap-4 pt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-muted"></div>
            <span>&lt;50%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-success"></div>
            <span>50-69%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-warning"></div>
            <span>70-89%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-destructive"></div>
            <span>90%+</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
