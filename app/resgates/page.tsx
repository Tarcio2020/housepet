import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { PlatformShell, PageIntro } from '@/components/platform-shell'
import { RescueBrowser } from '@/components/rescue-browser'
import { rescues } from '@/lib/rescues'

export const metadata = { title: 'Encontrar resgates | House Pet', description: 'Conheça histórias de animais resgatados e descubra como apoiar cada cuidado.' }

export default function ResgatesPage() {
  return <PlatformShell><div className="platform-container"><div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Resgates</span></div><PageIntro eyebrow="HISTÓRIAS QUE PRECISAM DE VOCÊ" title="Encontre um resgate." description="Conheça cada história, acompanhe o cuidado e escolha como fazer parte dessa mudança."/><div className="demo-banner"><ShieldCheck size={17}/><span>Os perfis, nomes e valores exibidos são dados demonstrativos para apresentar a plataforma.</span><Link href="/como-funciona">Como funciona <ArrowRight size={14}/></Link></div><RescueBrowser rescues={rescues}/><div className="platform-bottom-cta"><div><span className="eyebrow">ESTÁ CUIDANDO DE UM ANIMAL?</span><h2>Seu resgate também pode encontrar uma rede.</h2><p>Conte a história e mostre o que é necessário para o próximo passo.</p></div><Link href="/cadastrar-resgate" className="button button-dark">Cadastrar resgate <ArrowRight size={15}/></Link></div></div></PlatformShell>
}
