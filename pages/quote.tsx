import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import SelectGroup from 'components/molecules/FormGroup/SelectGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const Quote = () => {
  return (
    <>
      <PageTemplate title='Send Quote - Collosal'>
        <section className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-full lg:place-items-start" data-aos="fade-down-right">
            <div className="text-center lg:text-left">
              <PageSentence
                title="Beritahu kami tentang masalah Anda dan bagaimana kami dapat membantu"
                description="Kami dengan senang hati membantu Anda, beritahu kami apa masalah perusahaan Anda, dan kami siap menjawab masalah tersebut. Biasanya diperlukan beberapa menit bagi kami untuk merespons."
                badge="Kirim Pesan"
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="Ask Us"
                href="/faq"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-up-left">
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Name" />
                <InputGroup label="Email" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Company" />
                <SelectGroup
                  label="Company Size"
                  options={[
                    { label: 'Small', value: 'small' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Large', value: 'large' },
                  ]}
                />
              </div>
              <TextAreaGroup label="Beritahu Kami Masalah Anda" />
              <Button value="Kirim Pesan" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Quote
