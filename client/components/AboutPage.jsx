import React from 'react'

export default function AboutPage() {
  return (
    <div className='about-container'>
      <h4 className='about-h4'>
        Honotia :
        <span className='quote-text'>&nbsp; The action of connection</span>
      </h4>
      <h4 className='about-h4'>
        Refugee :
        <span className='quote-text'>
          &nbsp; A person forced to flee their country <br /> because of
          violence or persecution.
        </span>
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
        former refugees and allies for continued support and connection to make
        the journey a little easier.
      </p>

      <section className='block-content t-block-teal l-block-spacing'>
        <div className='l-contained'>
          <div className='heading-group'>
            <h4>How to start connecting</h4>
          </div>
          <ul className='timeline-list'>
            <li>
              <div className='content'>
                <h5 className='about-steps'> Step 1:</h5>
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
                <h5 className='about-steps'> Step 3: </h5>
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
        <br />
        <br />

        <p className='b-font about-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          perspiciatis sit expedita illum quidem esse aperiam, fugiat unde
          cupiditate ipsa aliquam omnis laborum quae, est exercitationem quod
          dolore necessitatibus. Ratione?
        </p>
      </section>

      <div className='box-wrapper'>
        <div className='about-box'>
          <h4>Vision</h4>
          <p>
            Dolor sit, amet consectetur adipisicing elit. voluptas temporibus
            neque ea architecto dignissimos, error ratione
          </p>
        </div>

        <div className='about-box'>
          <h4>Mission</h4>
          <p>
            Ea culpa amet aliquam sint odio, Libero eos dolor id dolorum sed.
          </p>
        </div>

        <div className='about-box'>
          <h4>Core Values</h4>
          <p>
            Dignissimos illo reprehenderit commodi consectetur natus architecto
            sunt.
          </p>
        </div>
      </div>
    </div>
  )
}
