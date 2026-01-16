import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import { CheckoutDemo } from '@/components/CheckoutDemo'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      {/* UNCOMMENT BELOW TO TEST STRIPE LIVE */}
      {/* <CheckoutDemo /> */}
    </>
  )
}
