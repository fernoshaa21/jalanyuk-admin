"use client";

import { useEffect } from "react";

import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { activityService } from "@/services/activity.service";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setActivities,
  setActivityError,
  setActivityLoading,
} from "@/store/slices/activitySlice";
import type { Activity } from "@/types/activity";
import type { UserRole } from "@/types/auth";

const fallbackActivities: Activity[] = [
  {
    id: "activity-1",
    title: "City Heritage Walk",
    location: "Yogyakarta",
    date: "2026-04-02",
    price: 250000,
    status: "published",
  },
  {
    id: "activity-2",
    title: "Sunrise Jeep Adventure",
    location: "Bromo",
    date: "2026-04-05",
    price: 450000,
    status: "draft",
  },
];

type ActivitiesContentProps = {
  role: UserRole;
};

export function ActivitiesContent({ role }: ActivitiesContentProps) {
  const dispatch = useAppDispatch();
  const { items, isLoading, error } = useAppSelector((state) => state.activity);

  useEffect(() => {
    let ignore = false;

    const loadActivities = async () => {
      dispatch(setActivityLoading(true));

      try {
        const data = await activityService.getActivities();

        if (!ignore) {
          dispatch(setActivities(data));
        }
      } catch {
        if (!ignore) {
          dispatch(setActivities(fallbackActivities));
          dispatch(
            setActivityError(
              "Endpoint belum dihubungkan. Menampilkan data fallback untuk demo halaman.",
            ),
          );
        }
      }
    };

    void loadActivities();

    return () => {
      ignore = true;
    };
  }, [dispatch]);

  return (
    <section className="space-y-6">
      <PageHeader
        title={`${role} activities`}
        description="Contoh halaman activities yang sudah memanggil service layer dan menyimpan hasilnya ke Redux."
      />

      {error ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
          {error}
        </div>
      ) : null}

      {isLoading ? (
        <Card>
          <CardContent className="p-6 text-sm text-slate-500">
            Mengambil data activities...
          </CardContent>
        </Card>
      ) : null}

      {!isLoading && items.length === 0 ? (
        <EmptyState
          title="Belum ada activity"
          description="State Redux dan service layer sudah siap, tinggal sambungkan endpoint backend."
        />
      ) : null}

      {!isLoading && items.length > 0 ? (
        <div className="grid gap-4 xl:grid-cols-2">
          {items.map((activity) => (
            <Card key={activity.id}>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {activity.location} • {activity.date}
                    </p>
                  </div>
                  <Badge
                    variant={
                      activity.status === "published"
                        ? "success"
                        : activity.status === "draft"
                          ? "warning"
                          : "destructive"
                    }
                  >
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600">
                  Harga mulai Rp{activity.price.toLocaleString("id-ID")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : null}
    </section>
  );
}
