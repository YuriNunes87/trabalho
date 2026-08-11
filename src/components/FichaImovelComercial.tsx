"use client";

import { FormEvent, useState } from "react";

type FormData = {
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  inscricaoEstadual: string;
  email: string;
  nomeResponsavel: string;
};

const initialState: FormData = {
  razaoSocial: "",
  nomeFantasia: "",
  cnpj: "",
  inscricaoEstadual: "",
  email: "",
  nomeResponsavel: "",
};

export default function FichaImovelComercial() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    console.log("Dados enviados:", formData);
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm shadow-slate-200/50 ring-1 ring-slate-100 sm:p-10">
      <div className="mb-8">
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-900">
          Cadastro de Imóvel Comercial
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
          Ficha de cadastro
        </h1>
        <p className="mt-2 text-slate-600">
          Preencha os dados do responsável e da empresa para registrar a locação.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Razão Social</span>
            <input
              name="razaoSocial"
              value={formData.razaoSocial}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="Nome da empresa"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Nome Fantasia</span>
            <input
              name="nomeFantasia"
              value={formData.nomeFantasia}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="Nome comercial"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">CNPJ</span>
            <input
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="00.000.000/0000-00"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Inscrição Estadual</span>
            <input
              name="inscricaoEstadual"
              value={formData.inscricaoEstadual}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="00000000"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-medium text-slate-700">E-mail</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="contato@empresa.com"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-medium text-slate-700">Nome do Responsável</span>
            <input
              name="nomeResponsavel"
              value={formData.nomeResponsavel}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="Nome completo"
            />
          </label>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          Enviar dados
        </button>

        {submitted && (
          <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900 ring-1 ring-emerald-200">
            Os dados foram enviados com sucesso.
          </div>
        )}
      </form>
    </section>
  );
}
