import Link from 'next/link'
import { ArrowRight, HandHeart, MapPin, ShieldCheck, Stethoscope } from 'lucide-react'
import { PlatformShell, PageIntro } from '@/components/platform-shell'

export const metadata = { title: 'Rede de parceiros | House Pet', description: 'Conheça a rede de clínicas, protetores e organizações parceiras House Pet.' }
const partners = [
  { name: 'Clínica Vet Cuidar', type: 'Clínica veterinária', city: 'São Paulo, SP', focus: 'Consultas e cuidados preventivos', icon: Stethoscope },
  { name: 'Patinhas do Bem', type: 'Organização de proteção animal', city: 'Santo André, SP', focus: 'Resgate e lar temporário', icon: HandHeart },
  { name: 'PetVida Diagnósticos', type: 'Centro de diagnóstico', city: 'São Paulo, SP', focus: 'Exames com condição social', icon: ShieldCheck },
  { name: 'Rede Protetora Oeste', type: 'Protetores independentes', city: 'Osasco, SP', focus: 'Acolhimento e adoção responsável', icon: HandHeart },
]
export default function PartnersPage() {
 return <PlatformShell><div className="platform-container"><div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Parceiros</span></div><PageIntro eyebrow="QUEM CUIDA JUNTO" title="Uma rede de cuidado" accent="de verdade." description="Veterinários, ONGs, protetores e pessoas que acreditam que toda vida merece cuidado."/><div className="demo-banner"><ShieldCheck size={17}/><span>Parceiros e localidades abaixo são exemplos de demonstração, não cadastros verificados.</span></div><div className="partner-directory"><div className="directory-heading"><div><span className="eyebrow">REDE HOUSE PET</span><h2>Encontre apoio perto de você</h2></div><label className="filter-field"><span>Localidade</span><select defaultValue="Todas as localidades"><option>Todas as localidades</option><option>São Paulo, SP</option><option>Santo André, SP</option><option>Osasco, SP</option></select></label></div><div className="partner-directory-grid">{partners.map(({name,type,city,focus,icon:Icon})=><article className="directory-card" key={name}><div className="partner-icon"><Icon size={21}/></div><span className="partner-verified"><ShieldCheck size={13}/> Parceiro demonstrativo</span><h3>{name}</h3><p>{type}</p><div className="directory-detail"><span><MapPin size={14}/>{city}</span><span><Stethoscope size={14}/>{focus}</span></div><Link href="/como-funciona">Sobre a rede <ArrowRight size={14}/></Link></article>)}</div></div><div className="partner-invite"><div><span className="invite-kicker">FAÇA PARTE DA REDE</span><h3>Seu trabalho também pode salvar vidas.</h3><p>Clínicas, ONGs e protetores podem se juntar ao cuidado.</p></div><Link className="button button-dark" href="/parceiros/cadastro">Quero ser parceiro <ArrowRight size={16}/></Link></div></div></PlatformShell>
}
