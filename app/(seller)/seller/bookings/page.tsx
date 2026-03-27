import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/shared/page-header";

export default function SellerBookingsPage() {
  return (
    <section className="space-y-6">
      <PageHeader
        title="Seller bookings"
        description="Halaman contoh untuk modul bookings seller."
      />
      <EmptyState
        title="Bookings seller siap dikembangkan"
        description="Gunakan state dan service terpisah agar business rules seller tetap terjaga."
      />
    </section>
  );
}
