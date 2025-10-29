import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function ComingSoon() {
  return (
    <DashboardLayout>
      <div className="flex min-h-[60vh] items-center justify-center">
        <Card className="p-12 text-center shadow-soft">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Construction className="h-10 w-10 text-primary" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-foreground">Coming Soon</h2>
          <p className="text-muted-foreground">
            This feature is currently under development.
          </p>
        </Card>
      </div>
    </DashboardLayout>
  );
}
