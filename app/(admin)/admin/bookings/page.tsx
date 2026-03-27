import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/shared/page-header";

export default function AdminBookingsPage() {
  return (
    <section className="space-y-6">
      <PageHeader
        title="Admin bookings"
        description="Halaman contoh untuk modul bookings admin."
      />
      <EmptyState
        title="Bookings admin siap dikembangkan"
        description="Gunakan `booking.service.ts` dan `bookingSlice.ts` untuk menghubungkan data nyata."
      />
    </section>
  );
}
