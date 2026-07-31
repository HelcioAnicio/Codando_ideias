-- Tabela de leads do "Diagnóstico gratuito" (gestão de tráfego pago).
-- Segue o mesmo padrão de lead_contato / lead_calculadora já existentes.

create table if not exists public.lead_diagnostico (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  whatsapp text not null,
  negocio text not null,
  site_instagram text,
  created_at timestamptz not null default now()
);

alter table public.lead_diagnostico enable row level security;

-- Ajuste as policies abaixo conforme as já usadas em lead_contato / lead_calculadora
-- neste projeto (aqui assumimos apenas inserts via chave publicável, sem leitura pública).
create policy "Permitir insert publico em lead_diagnostico"
  on public.lead_diagnostico
  for insert
  to anon
  with check (true);
