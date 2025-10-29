import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface Booking {
  id: string;
  customerName: string;
  tents: string[];
  checkIn: string;
  checkOut: string;
  amount: number;
  status: "confirmed" | "pending" | "cancelled";
}

const mockBookings: Booking[] = [
  {
    id: "BK001",
    customerName: "Rajesh Kumar",
    tents: ["T12", "T13"],
    checkIn: "2025-11-01",
    checkOut: "2025-11-03",
    amount: 4500,
    status: "confirmed",
  },
  {
    id: "BK002",
    customerName: "Priya Sharma",
    tents: ["T25"],
    checkIn: "2025-11-02",
    checkOut: "2025-11-04",
    amount: 2250,
    status: "pending",
  },
  {
    id: "BK003",
    customerName: "Amit Patel",
    tents: ["T08", "T09", "T10"],
    checkIn: "2025-11-05",
    checkOut: "2025-11-07",
    amount: 6750,
    status: "confirmed",
  },
  {
    id: "BK004",
    customerName: "Sneha Reddy",
    tents: ["T31"],
    checkIn: "2025-11-03",
    checkOut: "2025-11-05",
    amount: 2250,
    status: "confirmed",
  },
  {
    id: "BK005",
    customerName: "Vikram Singh",
    tents: ["T18", "T19"],
    checkIn: "2025-11-06",
    checkOut: "2025-11-08",
    amount: 4500,
    status: "pending",
  },
];

export function RecentBookings() {
  const getStatusColor = (status: Booking["status"]) => {
    switch (status) {
      case "confirmed":
        return "bg-success/10 text-success hover:bg-success/20";
      case "pending":
        return "bg-warning/10 text-warning hover:bg-warning/20";
      case "cancelled":
        return "bg-destructive/10 text-destructive hover:bg-destructive/20";
    }
  };

  return (
    <Card className="p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Recent Bookings</h3>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>
      <div className="space-y-4">
        {mockBookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent/50"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <p className="font-medium text-foreground">{booking.customerName}</p>
                <Badge className={getStatusColor(booking.status)} variant="secondary">
                  {booking.status}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>ID: {booking.id}</span>
                <span>•</span>
                <span>
                  {booking.checkIn} - {booking.checkOut}
                </span>
              </div>
              <div className="flex gap-2">
                {booking.tents.map((tent) => (
                  <Badge key={tent} variant="outline" className="text-xs">
                    {tent}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-lg font-semibold text-foreground">₹{booking.amount}</p>
              </div>
              <Button variant="ghost" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
