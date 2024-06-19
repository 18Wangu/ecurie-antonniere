import React from 'react'

function Contact() {
  return (
    <div className='flex h-screen'>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.262301472669!2d0.10831897595389997!3d48.08588055475937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e27d8e9861e74b%3A0x4a0bc244651e28a3!2sEcurie%20Poney%20Club%20de%20l&#39;Antonni%C3%A8re!5e0!3m2!1sfr!2ses!4v1718778838495!5m2!1sfr!2ses" width="600" height="450"></iframe>
      </div>
      <div>
        <h2>Contact</h2>
        <div>
          <h3>Adresse</h3>
          <p>123 Rue des Chevaux, 75000 Paris, France</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>contact@ecurieantonniere.com</p>
        </div>
        <div>
          <h3>Tel</h3>
          <p>+33 1 23 45 67 89</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
