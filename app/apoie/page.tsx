import Link from 'next/link'
import { ArrowRight, Heart, ShieldCheck, Stethoscope } from 'lucide-react'
import { PlatformShell, PageIntro, SectionTitle } from '@/components/platform-shell'
import { DonationForm } from '@/components/donation-form'
import { rescues } from '@/lib/rescues'

export const metadata = { title: 'Apoie a rede | House Pet', description: 'Escolha um resgate ou apoie a rede de cuidado House Pet.' }

export default function SupportPage() {
  return <PlatformShell><div className="platform-container"><div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Quero ajudar</span></div><PageIntro eyebrow="CADA GESTO CONTA" title="Sua ajuda vira" accent="cuidado." description="Escolha apoiar um caso ou fortalecer a rede que acolhe animais em situação de rua."/><div className="support-layout"><DonationForm/><aside className="support-aside"><span className="eyebrow"><span className="eyebrow-line"/> UMA REDE INTEIRA</span><h2>Quando você ajuda a rede, o cuidado chega onde é mais urgente.</h2><p>Contribuições para a rede podem apoiar necessidades compartilhadas entre protetores e parceiros locais.</p><div className="support-benefit"><span><Heart size={17}/></span><div><b>Apoio flexível</b><small>Ajuda em diferentes etapas do resgate.</small></div></div><div className="support-benefit"><span><Stethoscope size={17}/></span><div><b>Rede de parceiros</b><small>Conexão com cuidado veterinário.</small></div></div><div className="support-benefit"><span><ShieldCheck size={17}/></span><div><b>Transparência</b><small>Acompanhe o uso dos recursos na plataforma final.</small></div></div><Link className="text-link" href="/como-funciona">Entenda a plataforma <ArrowRight size={15}/></Link></aside></div><section className="support-cases"><SectionTitle eyebrow="ESCOLHA UMA HISTÓRIA" title="Casos que precisam de apoio" href="/resgates" label="Ver todos"/><div className="quick-rescue-list">{rescues.slice(0,3).map((rescue)=><Link href={`/resgates/${rescue.slug}`} key={rescue.slug}><span><b>{rescue.name}</b><small>{rescue.need} · {rescue.city}</small></span><ArrowRight size={15}/></Link>)}</div></section></div></PlatformShell>
}
