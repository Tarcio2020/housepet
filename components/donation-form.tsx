'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Check, Heart, ShieldCheck } from 'lucide-react'
import { rescues } from '@/lib/rescues'

export function DonationForm() {
  const [amount, setAmount] = useState(50)
  const [rescue, setRescue] = useState('')
  const [complete, setComplete] = useState(false)
  if (complete) return <div className="form-success"><span><Check size={26} /></span><span className="eyebrow">DEMONSTRAÇÃO CONCLUÍDA</span><h2>Obrigado por se importar.</h2><p>Nenhum pagamento foi realizado e nenhuma doação foi registrada. Quando a plataforma estiver conectada a um sistema seguro de pagamentos, você poderá concluir sua contribuição aqui.</p><Link className="button button-blue" href="/resgates">Conhecer outros resgates <ArrowRight size={16} /></Link></div>
  return <form className="donation-form" onSubmit={(event) => { event.preventDefault(); setComplete(true) }}><span className="donation-form-kicker"><Heart size={15} /> SUA AJUDA TRANSFORMA VIDAS</span><h2>Escolha como<br />quer <span>ajudar.</span></h2><p>Selecione um caso ou apoie a rede de cuidado. Esta é uma demonstração sem cobrança real.</p><label className="form-label" htmlFor="rescue-select">Quero apoiar</label><select id="rescue-select" value={rescue} onChange={(event) => setRescue(event.target.value)}><option value="">Rede House Pet — onde mais precisa</option>{rescues.map((item) => <option key={item.slug} value={item.slug}>{item.name} · {item.city}</option>)}</select><fieldset className="amount-fieldset"><legend>Valor da contribuição</legend><div>{[25, 50, 100, 200].map((value) => <button type="button" key={value} className={amount === value ? 'amount-choice amount-active' : 'amount-choice'} onClick={() => setAmount(value)}>R$ {value}</button>)}</div></fieldset><label className="form-label" htmlFor="custom-amount">Outro valor</label><div className="currency-input"><span>R$</span><input id="custom-amount" type="number" min="1" value={amount} onChange={(event) => setAmount(Math.max(1, Number(event.target.value)))} /></div><div className="donation-security"><ShieldCheck size={17} /><span>Na plataforma final, cada contribuição será registrada com transparência.</span></div><button className="button button-blue donation-submit" type="submit">Continuar — R$ {amount},00 <ArrowRight size={17} /></button><small className="demo-note">Modo demonstração. Nenhum pagamento ou dado é armazenado.</small></form>
}
