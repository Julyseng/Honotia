import React from 'react'

export default function AboutPage() {
  return (
    <div className='about-container'>
      <h4 className='about-h4'>
        Refugee - <br />
        <span className='quote-text'>
          A person forced to flee their country <br /> because of violence or
          persecution.
        </span>
      </h4>

      <h4 className='about-h4'>
        Honotia - <br />
        <span className='quote-text'>The action of connection</span>
      </h4>

      <p className='b-font about-text'>
        Since 1956 till today, New Zealand accepts refugees from all over the
        world. In 2018, refugee quota has increased to 1000 per year. Every
        refugee spends the first six weeks in Mangere Refugee Resettlement
        Centre where they are supported with English Language classes, health
        screening and mental health. Moving to a new country and starting all
        over is not easy. You are either excited, nervous or overwhelmed
        stepping into a foreign land without knowing where to begin. Although
        there are many supports available after the six weeks programme, they
        are scattered all over the place and individual support are either
        limited or non-existent.
        <br /> <br />
        Honotia is a place created for newly arrived refugees to connect with
        former refugees and allies for the continued support and connection to
        make the journey a little easier.
      </p>

      <p className='flow-text'>
        {' '}
        If you are a refugee who just arrived in New Zealand, we would like to
        help you connect with other refugees or Ally who are interested to
        support you and make your journey a little easier. Honotia is a place
        where you find allies and former refugees for the continued support and
        build your network of people.
      </p>
      <br />
      <section className='block-content t-block-teal l-block-spacing'>
        <div className='l-contained'>
          <header className='heading-group'>
            <h3 className='about-h3'>How to start connecting</h3>
          </header>
          <ul className='timeline-list'>
            <li>
              <div className='content'>
                <h3 className='about-steps'> Step 1:</h3>

                <p>
                  Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                  lorem. Maecenas nec odio et ante tincidunt tempus.
                </p>
              </div>
            </li>
            <li>
              <div className='content'>
                <h5 className='about-steps'> Step 2:</h5>
                <p>
                  Donec vitae sapien ut libero venenatis faucibus. Nullam quis
                  ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
                  leo.
                </p>
              </div>
            </li>
            <li>
              <div className='content'>
                <h3 className='about-steps'> Step 3: </h3>
                <p>
                  Etiam ultricies nisi vel augue. Curabitur ullamcorper
                  ultricies nisi.
                </p>
              </div>
            </li>

            <li>
              <div className='content'>
                <h5 className='about-steps'> Step 4:</h5>
                <p>
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className='box-wrapper'>
        <div className='about-box'>
          <h4>Vision</h4>
          <p>
            To connect, educate and empower refugees and people of New Zealand
          </p>
          <img className='logos' src='./vision.png' alt='value' />
        </div>

        <div className='about-box'>
          <h4>Mission</h4>
          <p>
            Creating a cohesive community where everyone can learn from each
            other’s stories and support each other.
          </p>
          <img className='logos' src='./mission.png' alt='value' />
        </div>

        <div className='about-box'>
          <h4>Core Values</h4>
          <ul>
            <li>Respect</li>
            <li>Humility</li>
            <li>Open minded</li>
          </ul>
          <img className='logos' src='./value.png' alt='value' />
        </div>
      </div>
    </div>
  )
}
