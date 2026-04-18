import HeroSection from '@/components/home/HeroSection'
import DualCtaSection from '@/components/home/DualCtaSection'
import PropertiesSection from '@/components/home/PropertiesSection'
import ServicesSection from '@/components/home/ServicesSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import OwnerCtaSection from '@/components/home/OwnerCtaSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DualCtaSection />
      <PropertiesSection />
      <ServicesSection />
      <TestimonialsSection />
      <OwnerCtaSection />
    </main>
  )
}
