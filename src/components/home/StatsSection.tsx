export default function StatsSection() {
  const stats = [{ n:'100+', label:'Immobili' },{ n:'50+', label:'Proprietari' },{ n:'4.9/5', label:'Recensioni' }]
  return (
    <div style={{ background:'#1A1917', display:'grid', gridTemplateColumns:'repeat(3,1fr)' }}>
      {stats.map((s,i) => (
        <div key={s.label} style={{ textAlign:'center', padding:'60px 40px', borderRight: i<2 ? '1px solid rgba(245,242,238,0.08)' : 'none' }}>
          <div style={{ fontFamily:'var(--font-playfair)', fontSize:64, fontWeight:300, color:'#F5F2EE', lineHeight:1, marginBottom:8 }}>{s.n}</div>
          <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(245,242,238,0.4)' }}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
