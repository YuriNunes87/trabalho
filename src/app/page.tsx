import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 text-slate-900">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-sm shadow-slate-200 ring-1 ring-slate-100">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
          AdministreFácil — Cadastro de Imóvel Comercial
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          A tela de cadastro para locação de imóvel comercial está disponível no link abaixo. Use o formulário para enviar os dados obrigatórios da empresa e do responsável.
        </p>
        <div className="mt-8">
          <Link
            href="/ficha-imovel-comercial"
            className="inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Acessar ficha de cadastro
          </Link>
        </div>
      </div>
    </main>
  );
}

