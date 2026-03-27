import { DashboardSectionCard } from "@/components/features/dashboard/dashboard-section-card";

const months = ["Jan", "Feb", "Mar", "May", "Jun"];
const yAxisLabels = [400, 300, 200, 100, 0];

const newUsersPoints = "40,140 150,118 260,70 370,105 480,68";
const activeUsersPoints = "40,92 150,122 260,100 370,125 480,82";

export function UserStatisticsCard() {
  return (
    <DashboardSectionCard title="User Statistics" className="h-full">
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-8 text-lg text-slate-700">
          <div className="flex items-center gap-3">
            <span className="size-4 rounded-md bg-blue-500" />
            <span>New Users</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="size-4 rounded-md bg-violet-500" />
            <span>Active Users</span>
          </div>
        </div>

        <div className="grid grid-cols-[52px_1fr] gap-4">
          <div className="flex h-[320px] flex-col justify-between pb-9 text-sm text-slate-500">
            {yAxisLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>

          <div className="relative h-[320px]">
            <div className="absolute inset-0 flex flex-col justify-between">
              {yAxisLabels.map((label) => (
                <div
                  key={label}
                  className="border-t border-slate-200/90"
                />
              ))}
            </div>

            <svg
              viewBox="0 0 520 180"
              className="absolute inset-x-0 top-3 h-[250px] w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polyline
                fill="none"
                points={newUsersPoints}
                stroke="#1f7ae0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
              <polyline
                fill="none"
                points={activeUsersPoints}
                stroke="#7c4de7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />

              {newUsersPoints.split(" ").map((point) => {
                const [cx, cy] = point.split(",");
                return <circle key={`new-${point}`} cx={cx} cy={cy} r="6" fill="#1f7ae0" />;
              })}

              {activeUsersPoints.split(" ").map((point) => {
                const [cx, cy] = point.split(",");
                return <circle key={`active-${point}`} cx={cx} cy={cy} r="6" fill="#7c4de7" />;
              })}
            </svg>

            <div className="absolute inset-x-0 bottom-0 grid grid-cols-5 text-center text-sm text-slate-600">
              {months.map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardSectionCard>
  );
}
