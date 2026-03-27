import { LoginForm } from "@/components/features/auth/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="grid w-full max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[2rem] border border-white/70 bg-[linear-gradient(145deg,_#0f172a_0%,_#1d4ed8_100%)] p-8 text-white shadow-2xl shadow-slate-300/50">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-200">
            Jalanyuk
          </p>
          <h1 className="mt-4 max-w-lg text-4xl font-semibold leading-tight">
            Fondasi admin panel dan seller panel yang modular, rapi, dan siap scale.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100">
            App Router, Redux Toolkit, axios service layer, reusable dashboard
            layout, dan struktur folder yang clean sudah disiapkan dalam satu
            baseline.
          </p>
        </section>

        <LoginForm />
      </div>
    </main>
  );
}
