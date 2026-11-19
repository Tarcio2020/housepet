'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowRight, MapPin, Search, ShieldCheck } from 'lucide-react'
import type { Rescue } from '@/lib/rescues'

export function RescueBrowser({ rescues }: { rescues: Rescue[] }) {
  const [query, setQuery] = useState('')
  const [species, setSpecies] = useState('Todos')
  const [status, setStatus] = useState('Todas as situações')
  const results = useMemo(() => rescues.filter((rescue) => {
    const matchesQuery = `${rescue.name} ${rescue.city} ${rescue.need}`.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (species === 'Todos' || rescue.species === species) && (status === 'Todas as situações' || rescue.status === status)
  }), [rescues, query, species, status])

  return <>
    <div className="rescue-filters"><label className="search-box"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por nome, cidade ou cuidado" aria-label="Buscar resgates" /></label><label className="filter-field"><span>Espécie</span><select value={species} onChange={(event) => setSpecies(event.target.value)}><option>Todos</option><option>Cão</option><option>Gato</option></select></label><label className="filter-field"><span>Situação</span><select value={status} onChange={(event) => setStatus(event.target.value)}><option>Todas as situações</option><option>Urgente</option><option>Em tratamento</option><option>Novo caso</option></select></label></div>
    <div className="results-meta"><span><b>{results.length}</b> histórias na rede</span><span><ShieldCheck size={14} /> Casos demonstrativos</span></div>
    {results.length ? <div className="platform-rescue-grid">{results.map((rescue) => <article className="platform-rescue-card" key={rescue.slug}><Link href={`/resgates/${rescue.slug}`} className="platform-rescue-photo"><Image src={rescue.image} alt={`Animal resgatado: ${rescue.name}`} fill sizes="(max-width: 700px) 100vw, 33vw" /><span className={`status-pill ${rescue.status === 'Urgente' ? 'status-urgent' : ''}`}>{rescue.status}</span></Link><div className="platform-rescue-content"><div className="rescue-name-line"><div><h2><Link href={`/resgates/${rescue.slug}`}>{rescue.name}</Link></h2><small>{rescue.species} · {rescue.age}</small></div><span className="rescue-city"><MapPin size={12} />{rescue.city}, {rescue.state}</span></div><p>Precisa de ajuda com <b>{rescue.need.toLowerCase()}</b></p><div className="raised-line"><b>R$ {rescue.raised.toLocaleString('pt-BR')}</b><span>de R$ {rescue.goal.toLocaleString('pt-BR')}</span></div><div className="progress-track"><span style={{ width: `${Math.round(rescue.raised / rescue.goal * 100)}%` }} /></div><Link className="rescue-card-link" href={`/resgates/${rescue.slug}`}>Ver história e ajudar <ArrowRight size={15} /></Link></div></article>)}</div> : <div className="no-results"><Search size={22} /><h2>Nenhuma história encontrada</h2><p>Tente ajustar os filtros para descobrir outros resgates.</p><button onClick={() => { setQuery(''); setSpecies('Todos'); setStatus('Todas as situações') }}>Limpar filtros</button></div>}
  </>
}
