import ParallaxHero from '../components/ParallaxHero';
import Services from '../components/Services';
import Fleet from '../components/Fleet';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';

export default function Page(){
  return (
    <>
      <ParallaxHero />
      <Services />
      <Fleet />
      <Pricing />
      <Testimonials />
    </>
  )
}
