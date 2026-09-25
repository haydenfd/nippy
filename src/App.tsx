import { Clipboard } from "lucide-react";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-slate-100">
      <section className="flex w-full max-w-md items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-2xl shadow-black/20">
        <div className="rounded-xl bg-cyan-400/15 p-3 text-cyan-300">
          <Clipboard aria-hidden="true" size={24} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-lg font-medium tracking-tight">Nippy</p>
          <p className="text-sm text-slate-400">Clipboard foundation ready</p>
        </div>
        <span className="ml-auto rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
          Ready
        </span>
      </section>
    </main>
  );
}

export default App;
