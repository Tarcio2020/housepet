import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react'
import { PlatformShell } from '@/components/platform-shell'
import { rescues } from '@/lib/rescues'

export function generateStaticParams() { return rescues.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const rescue = rescues.find((item) => item.slug === slug)
  return { title: rescue ? `${rescue.name} precisa de ajuda | House Pet` : 'Resgate | House Pet' }
}

export default async function RescueDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const rescue = rescues.find((item) => item.slug === slug)
  if (!rescue) notFound()
  const percent = Math.round(rescue.raised / rescue.goal * 100)
  return <PlatformShell><div className="platform-container"><div className="breadcrumb"><Link href="/">Início</Link><span>/</span><Link href="/resgates">Resgates</Link><span>/</span><span>{rescue.name}</span></div><Link href="/resgates" className="back-link"><ArrowLeft size={15}/> Voltar para resgates</Link><div className="detail-layout"><div className="detail-main"><div className="detail-photo"><Image src={rescue.image} alt={`${rescue.name}, animal resgatado`} fill priority sizes="(max-width: 800px) 100vw, 65vw"/><span className={`status-pill ${rescue.status === 'Urgente' ? 'status-urgent' : ''}`}>{rescue.status}</span></div><div className="detail-heading"><div><span className="eyebrow"><span className="eyebrow-line"/> HISTÓRIA DE RESGATE</span><h1>{rescue.name} <span>merece um novo começo.</span></h1><p>{rescue.species} · {rescue.age} <span>·</span> <MapPin size={14}/> {rescue.city}, {rescue.state}</p></div></div><section className="detail-story"><h2>Uma história que pode mudar.</h2><p>{rescue.description}</p><div className="detail-callout"><ShieldCheck size={18}/><span>Os dados deste caso são demonstrativos. Atualizações reais e prestação de contas dependem de uma plataforma conectada.</span></div></section><section className="updates-section"><h2>Diário de cuidado</h2><div className="update-list">{rescue.updates.map((update) => <article className="update-item" key={update.title}><span className="update-mark"><CheckCircle2 size={17}/></span><div><small>{update.date}</small><h3>{update.title}</h3><p>{update.body}</p></div></article>)}</div></section></div><aside className="detail-donation"><span className="donation-form-kicker"><span className="live-dot"/> PRECISA DE APOIO</span><h2>Ajude no cuidado de {rescue.name}.</h2><p>Cada contribuição aproxima esse resgate do próximo passo.</p><div className="raised-line"><b>R$ {rescue.raised.toLocaleString('pt-BR')}</b><span>de R$ {rescue.goal.toLocaleString('pt-BR')}</span></div><div className="progress-track detail-progress"><span style={{width:`${percent}%`}}/></div><small className="funding-percent">{percent}% da meta demonstrativa</small><Link href={`/apoie?resgate=${rescue.slug}`} className="button button-blue donation-submit">Quero contribuir <ArrowRight size={16}/></Link><div className="donation-security"><ShieldCheck size={16}/><span>Nenhum pagamento é processado nesta demonstração.</span></div><hr/><div className="detail-meta"><span>Necessidade principal</span><b>{rescue.need}</b></div><div className="detail-meta"><span>Local do resgate</span><b>{rescue.city}, {rescue.state}</b></div></aside></div></div></PlatformShell>
}
