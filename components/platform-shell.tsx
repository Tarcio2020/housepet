import Link from 'next/link'
import { ArrowRight, Heart, PawPrint, ShieldCheck } from 'lucide-react'

const links = [
  { href: '/resgates', label: 'Encontrar resgates' },
  { href: '/apoie', label: 'Doar' },
  { href: '/parceiros', label: 'Parceiros' },
  { href: '/como-funciona', label: 'Como funciona' },
]

export function PlatformShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="platform-shell">
      <div className="platform-topline"><span><span className="live-dot" /> Uma rede de cuidado que não para</span><span><ShieldCheck size={14} /> Transparência em cada contribuição</span></div>
      <header className="platform-header">
        <Link className="brand" href="/" aria-label="House Pet início"><span className="brand-mark"><PawPrint size={21} strokeWidth={2.6} /></span><span>house<span className="brand-pet">pet</span><small>MUDAMOS AS VIDAS DOS ANIMAIS</small></span></Link>
        <nav className="platform-nav" aria-label="Navegação principal">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
        <div className="platform-actions"><Link className="button button-outline-small" href="/cadastrar-resgate">Cadastrar resgate</Link><Link className="button button-blue platform-donate" href="/apoie"><Heart size={15} /> Quero ajudar</Link></div>
      </header>
      <main className="platform-main">{children}</main>
      <footer className="platform-footer"><Link className="brand" href="/"><span className="brand-mark"><PawPrint size={19} /></span><span>house<span className="brand-pet">pet</span><small>MUDAMOS AS VIDAS DOS ANIMAIS</small></span></Link><span>Uma plataforma de cuidado, resgate e novos começos.</span><nav aria-label="Links do rodapé"><Link href="/resgates">Resgates</Link><Link href="/parceiros">Parceiros</Link><Link href="/cadastrar-resgate">Cadastrar um caso</Link><Link href="/como-funciona">Como funciona</Link></nav><small><ShieldCheck size={14} /> Ambiente demonstrativo · Sem transações reais</small></footer>
    </div>
  )
}

export function PageIntro({ eyebrow, title, accent, description }: { eyebrow: string; title: string; accent?: string; description: string }) {
  return <div className="platform-page-intro"><span className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</span><h1>{title}{accent && <> <span>{accent}</span></>}</h1><p>{description}</p></div>
}

export function SectionTitle({ eyebrow, title, href, label }: { eyebrow: string; title: string; href?: string; label?: string }) {
  return <div className="platform-section-title"><div><span className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</span><h2>{title}</h2></div>{href && <Link className="all-cases" href={href}>{label ?? 'Ver mais'} <ArrowRight size={15} /></Link>}</div>
}
