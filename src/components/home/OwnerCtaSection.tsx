import Link from 'next/link'

export default function OwnerCtaSection() {
  return (
    <section style={{ background:'#1A1917', textAlign:'center', padding:'120px 5%', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:600, height:600, background:'radial-gradient(circle, rgba(184,150,90,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />
      <p style={{ fontSize:10, fontWeight:600, letterSpacing:'0.35em', textTransform:'uppercase', color:'#B8965A', marginBottom:16, position:'relative' }}>Hai un Immobile in Sardegna?</p>
      <h2 style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(32px,4vw,52px)', fontWeight:300, lineHeight:1.15, color:'#F5F2EE', maxWidth:600, margin:'0 auto 12px', position:'relative' }}>Affidaci la gestione e inizia a guadagnare senza preoccupazioni</h2>
      <p style={{ fontSize:14, fontWeight:300, color:'rgba(245,242,238,0.55)', lineHeight:1.7, maxWidth:520, margin:'0 auto 48px', position:'relative' }}>Il tuo partner di fiducia per affitti turistici in Sardegna. Professionalità, esperienza e passione per l&apos;ospitalità dal 2015.</p>
      <div style={{ display:'flex', gap:48, justifyContent:'center', marginBottom:48, position:'relative' }}>
        {[{n:'100+',l:'Immobili gestiti'},{n:'50+',l:'Proprietari soddisfatti'},{n:'4.9/5',l:'Recensioni medie'}].map(s => (
          <div key={s.l}>
            <div style={{ fontFamily:'var(--font-playfair)', fontSize:40, fontWeight:300, color:'#F5F2EE' }}>{s.n}</div>
            <div style={{ fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(245,242,238,0.4)', marginTop:4 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ display:'flex', gap:16, justifyContent:'center', position:'relative' }}>
        <Link href="/proprietari" style={{ background:'#B8965A', color:'#0F0F0E', fontSize:11, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', padding:'14px 32px', textDecoration:'none', display:'inline-block' }}>Scopri i Vantaggi</Link>
        <Link href="/contatti" style={{ background:'transparent', color:'#F5F2EE', fontSize:11, fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', padding:'14px 32px', border:'1px solid rgba(245,242,238,0.3)', textDecoration:'none', display:'inline-block' }}>Contattaci</Link>
      </div>
    </section>
  )
}
