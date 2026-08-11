import Link from "next/link";
import FichaImovelComercial from "@/components/FichaImovelComercial";

export default function FichaImovelComercialPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex items-center justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/80 ring-1 ring-slate-100">
          <div>
            <p className="text-sm font-medium text-slate-600">Tela de cadastro</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-950">Ficha de Imóvel Comercial</h1>
          </div>
          <Link
            href="/"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Voltar para início
          </Link>
        </div>

        <FichaImovelComercial />
      </div>
    </main>
  );
}
