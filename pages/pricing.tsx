import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PricingCard from 'components/molecules/Card/PricingCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Link from 'next/link'
import React from 'react'
import randomString from 'utils/randomString'

const Pricing = () => {
  interface Faq {
    title: string
    description: string
  }
  const faqs: Faq[] = [
    {
      title: `Bagaimana sistem pembayarannya?`,
      description: `Jika proyek sudah setuju, Anda akan membayar uang muka, dan saat progres mencapai 50% Anda akan melakukan pembayaran kedua, dan saat progres 100% Anda akan melunasinya.`,
    },
    {
      title: `Apakah saya bisa berkonsultasi terlebih dahulu?`,
      description: `Tentu saja Anda dapat berkonsultasi dengan kami terlebih dahulu. Kami sangat senang membantu masalah Anda dan memberikan solusi terbaik kami. Anda dapat menghubungi kami melalui halaman kontak.`,
    },
    {
      title: `Bagaimana jika proyek berhenti di tengah jalan?`,
      description: `Kami berjanji untuk selalu menyelesaikan proyek tepat waktu, jika terjadi masalah (karena kesalahan kami), semua pembayaran akan dikembalikan. Dan proyek tersebut akan dihentikan.`,
    },
    {
      title: `Apakah itu termasuk server dan domain?`,
      description: `Anda tidak perlu memikirkan hal lain, kami sudah menyiapkan semuanya. Anda hanya perlu memeriksa kemajuan Anda dan memastikan bahwa fitur yang Anda inginkan adalah yang benar.`,
    },
    {
      title: `Apakah saya akan mendapatkan kode sumbernya?`,
      description: `Ketika proyek selesai 100%, semua sumber daya, seperti file desain, diagram analisis, kode sumber, dll. Akan diberikan kepada Anda. Anda tidak perlu khawatir tentang ini.`,
    },
    {
      title: `Apakah ada garansi?`,
      description: `Garansi 1 tahun untuk kesalahan atau kekeliruan kami. Jika ingin menambahkan fitur yang tidak termasuk dalam garansi, ada biaya lain per fitur, dan harganya tergantung kesulitannya.`,
    },
  ]

  return (
    <PageTemplate>
      <section className="grid grid-cols-1 place-items-center">
        <div
          className="sm:w-10/12 md:8/12 lg:w-6/12 text-center"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="PRICING"
            title="What do you need? Choose a service that can help you"
          />
        </div>
      </section>
      <LineDivider />
      <section className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <div data-aos="fade-up">
          <PricingCard
            price="1200$"
            title="UI Design"
            features={[
              '10 design pages',
              'Well-documented',
              '4 revisions',
              '$100/additional page',
            ]}
          />
        </div>
        <div data-aos="fade-up">
          <PricingCard
            price="5000$"
            title="Development"
            features={[
              'Web & Mobile',
              'Well-documented',
              '8 revisions',
              '$1000/additional page',
            ]}
          />
        </div>
        <div data-aos="fade-up">
          <PricingCard
            price="3000$"
            title="Maintenance"
            features={[
              'Daily backup',
              '3 hours of maintenance',
              'Including fixing',
              '$50/additional hour',
            ]}
          />
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Frequently asked questions, maybe the same as yours"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
          {faqs.map((faq) => {
            return (
              <div className="grid gap-2.5" key={randomString(64)} data-aos="fade-right">
                <Text textStyle="FAQTitle" value={faq.title} />
                <Text textStyle="FAQDescription" value={faq.description} />
              </div>
            )
          })}
        </div>
        <div className="text-white text-base font-medium text-center">
          {`Didn't find an answer? `}
          <div className="sm:hidden"></div>
          <div className="text-primary inline select-none">
            <Link href={'/quote'}>Do not hesitate to ask!</Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Pricing
