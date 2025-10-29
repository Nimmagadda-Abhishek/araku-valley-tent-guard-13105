import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tent } from "lucide-react";

type TentStatus = "available" | "booked" | "maintenance" | "reserved";

interface TentData {
  number: number;
  status: TentStatus;
}

// Generate 50 tents with random statuses
const generateTents = (): TentData[] => {
  const statuses: TentStatus[] = ["available", "booked", "maintenance", "reserved"];
  return Array.from({ length: 50 }, (_, i) => ({
    number: i + 1,
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
};

const tents = generateTents();

export default function Tents() {
  const getStatusColor = (status: TentStatus) => {
    switch (status) {
      case "available":
        return "bg-success text-success-foreground hover:bg-success/90";
      case "booked":
        return "bg-destructive text-destructive-foreground hover:bg-destructive/90";
      case "maintenance":
        return "bg-warning text-warning-foreground hover:bg-warning/90";
      case "reserved":
        return "bg-primary text-primary-foreground hover:bg-primary/90";
    }
  };

  const getStatusLabel = (status: TentStatus) => {
    switch (status) {
      case "available":
        return "Available";
      case "booked":
        return "Booked";
      case "maintenance":
        return "Maintenance";
      case "reserved":
        return "Reserved";
    }
  };

  const statusCounts = {
    available: tents.filter((t) => t.status === "available").length,
    booked: tents.filter((t) => t.status === "booked").length,
    maintenance: tents.filter((t) => t.status === "maintenance").length,
    reserved: tents.filter((t) => t.status === "reserved").length,
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Status summary */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Available</p>
                <p className="text-2xl font-bold text-foreground">{statusCounts.available}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Tent className="h-5 w-5 text-success" />
              </div>
            </div>
          </Card>
          <Card className="p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Booked</p>
                <p className="text-2xl font-bold text-foreground">{statusCounts.booked}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Tent className="h-5 w-5 text-destructive" />
              </div>
            </div>
          </Card>
          <Card className="p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Maintenance</p>
                <p className="text-2xl font-bold text-foreground">{statusCounts.maintenance}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <Tent className="h-5 w-5 text-warning" />
              </div>
            </div>
          </Card>
          <Card className="p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Reserved</p>
                <p className="text-2xl font-bold text-foreground">{statusCounts.reserved}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Tent className="h-5 w-5 text-primary" />
              </div>
            </div>
          </Card>
        </div>

        {/* Legend */}
        <Card className="p-4 shadow-soft">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="font-medium text-foreground">Legend:</span>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-success"></div>
              <span className="text-muted-foreground">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-destructive"></div>
              <span className="text-muted-foreground">Booked</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-warning"></div>
              <span className="text-muted-foreground">Under Maintenance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-primary"></div>
              <span className="text-muted-foreground">Reserved/Blocked</span>
            </div>
          </div>
        </Card>

        {/* Tent grid */}
        <Card className="p-6 shadow-soft">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Tent Inventory</h3>
            <Button>Add New Tent</Button>
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
            {tents.map((tent) => (
              <button
                key={tent.number}
                className="group relative aspect-square"
              >
                <div
                  className={`flex h-full w-full flex-col items-center justify-center gap-1 rounded-lg transition-all hover:scale-105 hover:shadow-medium ${getStatusColor(
                    tent.status
                  )}`}
                >
                  <Tent className="h-5 w-5" />
                  <span className="text-sm font-bold">T{tent.number}</span>
                </div>
                <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-popover px-3 py-2 text-xs text-popover-foreground shadow-strong group-hover:block">
                  <p className="font-medium">Tent {tent.number}</p>
                  <p className="text-muted-foreground">{getStatusLabel(tent.status)}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
