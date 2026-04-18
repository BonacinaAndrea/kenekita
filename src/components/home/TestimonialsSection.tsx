const testimonials = [
  { quote:'Una vacanza da sogno! La villa era ancora più bella delle foto, pulitissima e con una vista mozzafiato. Il team di Kenekita ci ha accolto con un calore incredibile.', author:'Marco e Laura', role:'Ospiti — Agosto 2024' },
  { quote:'Affidare la mia villa a Kenekita è stata la scelta migliore. Le mie entrate sono aumentate del 40% rispetto all\'anno scorso. Consigliato!', author:'Giovanni Rossi', role:'Proprietario' },
  { quote:'We had the most amazing week in Sardinia! The apartment was perfect, the location incredible, and Kenekita\'s team was always available to help us.', author:'Sophie & Thomas', role:'Ospiti — Luglio 2024' },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0F0F0E] px-[5%] py-[100px] text-center">
      <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#B8965A] mb-4 font-raleway">
        Cosa Dicono di Noi
      </p>
      <h2 className="font-playfair font-light leading-[1.15] text-[#F5F2EE] mb-14 text-[clamp(28px,4vw,52px)]">
        La soddisfazione dei nostri ospiti<br className="hidden sm:block" />è la nostra priorità
      </h2>

      {/* Mobile: single column; sm: 2-col; lg: 3-col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
        {testimonials.map(t => (
          <div
            key={t.author}
            className="bg-[#1A1917] px-8 py-10 text-left border-t border-[rgba(184,150,90,0.3)]"
          >
            <p className="font-playfair text-[15px] italic font-light leading-[1.8] text-[rgba(245,242,238,0.85)] mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#B8965A] mb-1 font-raleway">
              {t.author}
            </div>
            <div className="text-[12px] text-[rgba(245,242,238,0.4)] font-raleway">
              {t.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
