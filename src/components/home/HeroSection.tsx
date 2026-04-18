'use client'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section style={{ position:'relative', width:'100%', height:'100vh', minHeight:600, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <video autoPlay muted loop playsInline style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:0 }}>
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.7) 100%)', zIndex:1 }} />
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'40%', background:'linear-gradient(to top, rgba(184,150,90,0.08) 0%, transparent 100%)', zIndex:2, pointerEvents:'none' }} />

      {/* Content */}
      <div style={{ position:'relative', zIndex:5, textAlign:'center', paddingTop:120 }}>
        <p style={{ fontSize:11, fontWeight:500, letterSpacing:'0.3em', textTransform:'uppercase', color:'#B8965A', marginBottom:24 }}>Co-Hosting &amp; Property Management</p>
        <h1 style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(42px, 6vw, 78px)', fontWeight:400, lineHeight:1.1, color:'#F5F2EE', marginBottom:20 }}>
          Ville e Appartamenti<br/><em style={{ fontStyle:'italic', color:'#E8DDD0' }}>in Sardegna</em>
        </h1>
        <p style={{ fontSize:14, fontWeight:300, color:'rgba(245,242,238,0.55)', maxWidth:480, margin:'0 auto 36px', lineHeight:1.7 }}>Per chi cerca la vacanza ideale, per chi vuole trasformare la propria casa in un&apos;opportunità.</p>
        <div style={{ display:'flex', gap:16, justifyContent:'center' }}>
          <Link href="/strutture" style={{ background:'#B8965A', color:'#0F0F0E', fontSize:11, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', padding:'14px 32px', textDecoration:'none' }}>Prenota</Link>
          <Link href="/strutture" style={{ background:'transparent', color:'#F5F2EE', fontSize:11, fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', padding:'14px 32px', border:'1px solid rgba(245,242,238,0.3)', textDecoration:'none' }}>Scopri gli Immobili</Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', zIndex:10, display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
        <span style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(245,242,238,0.4)' }}>Scorri</span>
        <div style={{ width:1, height:40, background:'linear-gradient(to bottom, #B8965A, transparent)' }} />
      </div>
    </section>
  )
}
