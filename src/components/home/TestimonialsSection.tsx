const testimonials = [
  { quote:'Una vacanza da sogno! La villa era ancora più bella delle foto, pulitissima e con una vista mozzafiato. Il team di Kenekita ci ha accolto con un calore incredibile.', author:'Marco e Laura', role:'Ospiti — Agosto 2024' },
  { quote:'Affidare la mia villa a Kenekita è stata la scelta migliore. Le mie entrate sono aumentate del 40% rispetto all\'anno scorso. Consigliato!', author:'Giovanni Rossi', role:'Proprietario' },
  { quote:'We had the most amazing week in Sardinia! The apartment was perfect, the location incredible, and Kenekita\'s team was always available to help us.', author:'Sophie & Thomas', role:'Ospiti — Luglio 2024' },
]

export default function TestimonialsSection() {
  return (
    <section style={{ background:'#0F0F0E', padding:'100px 5%', textAlign:'center' }}>
      <p style={{ fontSize:10, fontWeight:600, letterSpacing:'0.35em', textTransform:'uppercase', color:'#B8965A', marginBottom:16 }}>Cosa Dicono di Noi</p>
      <h2 style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(32px,4vw,52px)', fontWeight:300, lineHeight:1.15, color:'#F5F2EE', marginBottom:60 }}>La soddisfazione dei nostri ospiti<br/>è la nostra priorità</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, maxWidth:1100, margin:'0 auto' }}>
        {testimonials.map(t => (
          <div key={t.author} style={{ background:'#1A1917', padding:'40px 32px', textAlign:'left', borderTop:'1px solid rgba(184,150,90,0.3)' }}>
            <p style={{ fontFamily:'var(--font-playfair)', fontSize:15, fontStyle:'italic', fontWeight:300, lineHeight:1.8, color:'rgba(245,242,238,0.85)', marginBottom:24 }}>&ldquo;{t.quote}&rdquo;</p>
            <div style={{ fontSize:12, fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:'#B8965A', marginBottom:4 }}>{t.author}</div>
            <div style={{ fontSize:12, color:'rgba(245,242,238,0.4)' }}>{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
