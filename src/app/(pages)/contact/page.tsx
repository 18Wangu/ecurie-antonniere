import React from 'react'

function Contact() {
  return (
    <div className='flex items-center mx-32 h-screen'>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.262301472669!2d0.10831897595389997!3d48.08588055475937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e27d8e9861e74b%3A0x4a0bc244651e28a3!2sEcurie%20Poney%20Club%20de%20l&#39;Antonni%C3%A8re!5e0!3m2!1sfr!2ses!4v1718778838495!5m2!1sfr!2ses" width="600" height="450"></iframe>
      </div>

      <div className='ml-20'>
        <h2 className='text-3xl text-foreground font-bold mb-6'>Contact</h2>
        <div className='flex items-center mb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <div className='ml-3'>
            <h3 className='text-2xl text-foreground'>Adresse</h3>
            <p className='text-xl text-muted-foreground'>123 Rue des Chevaux, 75000 Paris, France</p>
          </div>
        </div>
        <div className='flex items-center mb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-at-sign text-primary"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
          <div className='ml-3'>
            <h3 className='text-2xl text-foreground'>Email</h3>
            <p className='text-xl text-muted-foreground'>contact@ecurieantonniere.com</p>
          </div>
        </div>
        <div className='flex items-center mb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <div className='ml-3'>
            <h3 className='text-2xl text-foreground'>Téléphone</h3>
            <p className='text-xl text-muted-foreground'>+33 1 23 45 67 89</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
