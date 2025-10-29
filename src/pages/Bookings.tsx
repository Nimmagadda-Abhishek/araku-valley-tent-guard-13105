import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Download, Eye, Mail, X } from "lucide-react";

interface Booking {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  tents: string[];
  guests: number;
  amount: number;
  paymentStatus: "paid" | "pending";
  bookingStatus: "confirmed" | "pending" | "cancelled";
}

const mockBookings: Booking[] = [
  {
    id: "BK001",
    customerName: "Rajesh Kumar",
    email: "rajesh@email.com",
    phone: "+91 98765 43210",
    checkIn: "2025-11-01",
    checkOut: "2025-11-03",
    tents: ["T12", "T13"],
    guests: 4,
    amount: 4500,
    paymentStatus: "paid",
    bookingStatus: "confirmed",
  },
  {
    id: "BK002",
    customerName: "Priya Sharma",
    email: "priya@email.com",
    phone: "+91 98765 43211",
    checkIn: "2025-11-02",
    checkOut: "2025-11-04",
    tents: ["T25"],
    guests: 2,
    amount: 2250,
    paymentStatus: "pending",
    bookingStatus: "pending",
  },
  {
    id: "BK003",
    customerName: "Amit Patel",
    email: "amit@email.com",
    phone: "+91 98765 43212",
    checkIn: "2025-11-05",
    checkOut: "2025-11-07",
    tents: ["T08", "T09", "T10"],
    guests: 6,
    amount: 6750,
    paymentStatus: "paid",
    bookingStatus: "confirmed",
  },
];

export default function Bookings() {
  const getStatusBadge = (status: string, type: "payment" | "booking") => {
    if (type === "payment") {
      return status === "paid" ? (
        <Badge className="bg-success/10 text-success hover:bg-success/20">Paid</Badge>
      ) : (
        <Badge className="bg-warning/10 text-warning hover:bg-warning/20">Pending</Badge>
      );
    } else {
      switch (status) {
        case "confirmed":
          return <Badge className="bg-success/10 text-success hover:bg-success/20">Confirmed</Badge>;
        case "pending":
          return <Badge className="bg-warning/10 text-warning hover:bg-warning/20">Pending</Badge>;
        case "cancelled":
          return <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20">Cancelled</Badge>;
      }
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Filters */}
        <Card className="p-6 shadow-soft">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search by booking ID or customer..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Booking Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Payment Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Payments</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </Card>

        {/* Bookings table */}
        <Card className="shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Booking ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Check-in / Check-out
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Tents
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Guests
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Payment
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="transition-colors hover:bg-accent/50"
                  >
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm font-medium text-foreground">
                        {booking.id}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">
                          {booking.customerName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {booking.email}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {booking.phone}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1 text-sm">
                        <p className="text-foreground">{booking.checkIn}</p>
                        <p className="text-muted-foreground">{booking.checkOut}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {booking.tents.map((tent) => (
                          <Badge key={tent} variant="outline" className="text-xs">
                            {tent}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {booking.guests}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-foreground">
                        ₹{booking.amount}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(booking.paymentStatus, "payment")}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(booking.bookingStatus, "booking")}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
