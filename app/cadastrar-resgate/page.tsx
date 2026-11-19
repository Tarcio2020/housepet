import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { PlatformShell, PageIntro } from '@/components/platform-shell'
import { RescueIntakeForm } from '@/components/rescue-intake-form'

export const metadata = { title: 'Cadastrar resgate | House Pet', description: 'Compartilhe a história de um animal e encontre apoio da rede House Pet.' }

export default function IntakePage() {
  return <PlatformShell><div className="platform-container narrow-container"><div className="breadcrumb"><Link href="/">Início</Link><span>/</span><Link href="/resgates">Resgates</Link><span>/</span><span>Cadastrar</span></div><PageIntro eyebrow="PARA QUEM ESTÁ NA LINHA DE FRENTE" title="Um resgate começa" accent="com cuidado." description="Conte sobre o animal e o apoio necessário. O cadastro abaixo é uma demonstração: nenhum dado será enviado ou armazenado."/><div className="intake-info"><ShieldCheck size={17}/><span>Na plataforma completa, cada caso passa por análise antes de ser divulgado para doações.</span></div><RescueIntakeForm/><div className="intake-help">Já conhece a rede? <Link href="/parceiros">Veja nossos parceiros <ArrowRight size={14}/></Link></div></div></PlatformShell>
}
