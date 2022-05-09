import type { NextPage } from 'next'
import React, { useState } from 'react'
import Input from '../components/Input'

const Home: NextPage = () => {
  const [bloodDestination, setBloodDesntination] = useState('')
  const [bloodQuantity, setBloodQuantity] = useState('')
  const [bloodType, setBloodType] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')

  return (
    <>
      <form className='max-w-4xl mx-auto mt-8 grid gap-6 lg:grid-cols-2'>
        <Input
          id="blood_destination"
          type="text"
          label="Para quem será doado?"
          placeholder="Ex.: Márcio Andrade"
          onChange={setBloodDesntination}
          value={bloodDestination}
          required
        />

        <div className='flex justify-between'>
          <Input
            id="blood_quantity"
            type="number"
            minValue={0}
            label="Quantidade necessária"
            placeholder="Ex.: 10"
            onChange={setBloodQuantity}
            value={bloodQuantity}
            required
          />
          <Input
            id="blood_type"
            type="text"
            label="Tipo sanguíneo"
            placeholder="Ex.: A+"
            onChange={setBloodType}
            value={bloodType}
            required
          />
        </div>

        <Input
          id="contact_name"
          type="text"
          label="Nome do contato"
          placeholder="Ex.: Ana Júlia"
          onChange={setContactName}
          value={contactName}
          required
        />
        <Input
          id="contact_number"
          type="text"
          label="Número do contato"
          placeholder="Ex.: (35) 9 9999-9999 ou (35) 9 9999-9999"
          onChange={setContactPhone}
          value={contactPhone}
          required
        />
      </form>

      <h2 className='flex justify-center text-4xl mt-10'>Resultado</h2>

      <div className='flex justify-center scale-75'>
        <div className='w-[800px] h-[800px] bg-flowers bg-blend-soft-light flex flex-col justify-between'>
          <h1 className='text-white pt-5 text-4xl font-extrabold flex justify-center uppercase tracking-wider'>
            Pedido de doação de sangue
          </h1>

          <div className='justify-center px-6'>
            <p className='text-white text-3xl text-center font-semibold mb-4'>
              Precisa-se de {bloodQuantity || '[quantidade]'} doadores de sangue, para {bloodDestination || '[nome]'}, {bloodType ? `do tipo ${bloodType}` : 'qualquer tipo'}.
            </p>
            <p className='text-yellow-400 text-3xl text-center font-semibold mt-4'>Falar com {contactName || '[nome]'} pelo número {contactPhone || '[número]'}</p>
          </div>

          <footer className='flex justify-center'>
            <img
              src='/coats-of-arms.png'
              alt='Brasão da paróquia e logotipo da Pastoral da Comunicação'
            />
          </footer>
        </div>
      </div>
    </>
  )
}

export default Home
