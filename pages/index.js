import Banner from '../components/banner'
import Company from '../components/company'
import FAQ from '../components/faq'
import Features from '../components/features'
import Footer from '../components/footer'
import Help from '../components/help'
import Navbar from '../components/navbar'
import Support from '../components/support'

export default function Home() {

  return (
    <div className='font-DMSans'>
      <header className="bg-illustration h-full bg-center bg-cover">
        <Navbar/>
        <Banner />
      </header>
      <section className='bg-[#F9FBFD]'>
        <Features />
      </section>
      <Support/>
      <Help/>
      <Company/>
      <FAQ/>
      <section className='bg-[#F9FAFC]'>
        <Footer />
      </section>
    </div>
  )
}
