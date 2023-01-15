import React from 'react'

const Contact = () => {
  return (
    <main classsName='Main'>
      <article className='Contact'>
        <h2 className='PageTitle'>Contact</h2>
        <artcile className='MyContact'>
          <p>
            I'm open for business Monday - Saturday round the clock. To enquire about my services or place your order, use the below contacts details:
          </p>
          <section>
            <h3>Location:</h3>
            <p>Nairobi, Kasarani</p>
            <h3>Email:</h3>
            <p>briankingara4@gmail.com</p>
            <h3>Call:</h3>
            <p>0703371828</p>
          </section>
          <section>
            <form action=''>
              <p>
                <label htmlFor='name'>Your Name<br /></label>
                <input type='text' />
              </p>
              <p>
                <label htmlFor='email'>Your Email<br /></label>
                <input type='email' />
              </p>
              <p>
                <label htmlFor='subject'>Subject<br /></label>
                <input type='text' />
              </p>
              <p>
                <label htmlFor='message'>Message<br /></label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
              </p>
              <button>Send Message</button>       
            </form>
          </section>
        </artcile>
      </article>
    </main>
  )
}

export default Contact