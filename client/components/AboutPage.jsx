import React from 'react'

export default function AboutPage() {
  return (
    <div className='about-container'>
      <h3 className='about-h3'>What is refugee according to UNHCR</h3>
      <h4 className='quotation'>  “A person forced to flee their country </h4>
      <h4 className='quotation'>  because of violence or persecution.”  </h4>

      <h4 className='about-h3'> Honotia means </h4>
      <h4 className='quotation'> “the action of connection” </h4>
      <br/>
      
      <p>Since 1956 till today, New Zealand accepts refugees from all over the world.
        In 2018, refugee quota has increased to 1000 per year. Every refugee spends
        the first six weeks in Mangere Refugee Resettlement Centre where they are
        supported with English Language classes, health screening and mental health.
        Moving to a new country and starting all over is not easy. You are either excited,
        nervous or overwhelmed stepping into a foreign land without knowing where to begin.
        Although there are many supports available after the six weeks programme, they are
        scattered all over the place and individual support are either limited or non-existence.
      </p>

      <p> If you are a refugee who just arrived in New Zealand, we would like to help you connect
        with other refugees or Ally who are interested to support you and make your journey a
        little easier. Honotia is a place where you find allies and former refugees for the
        continued support and build your network of people.
      </p>
      <br/>
      <br/>
      <br/>

      <div className='box-wrapper'>
        <div className='about-box'>
          <h4>Vision</h4>
          <p>
            To connect, educate and empower refugees and people of New Zealand
          </p>
          <img className='logos' src="./vision.png" alt="value" />
        </div>

        <div className='about-box'>
          <h4>Mission</h4>
          <p>
            Creating a cohesive community where everyone can learn from each other’s
            stories and support each other.
        </p>
          <img className='logos' src="./mission.png" alt="value" />

        </div>

        <div className='about-box'>
          <h4>Core Values</h4>
          <ul>
            <li>Respect</li>
            <li>Humility</li>
            <li>Open minded</li>
          </ul>
          <img className='logos' src="./value.png" alt="value" />

        </div>
      </div>

      {/* <h4>Register now and start making connection</h4>
      <ul>
        <li> Step 1. Choose a status </li>
        <br/>
        <br/>
        <li> Step 2. Fill out a form </li>
        <br/>
        <br/>
        <li> Step 3. View profiles </li>
        <br/>
        <br/>
        <li> Step 4. Connect </li>
      </ul> */}

<section className="block-content t-block-teal l-block-spacing">
					<div className="l-contained">
						<header className="heading-group">
							<h3 className='about-h3'>How to start connecting</h3>
							<p className="subtitle">
								What is this?
							</p>
						</header>
						<ul className="timeline-list">
							<li>
                  <div className="content">
								<h3>A timeline?</h3>
						
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
								</p>
                </div>
							</li>
							<li>
                  <div className="content">
								<h3>A railway map?</h3>
							
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
								</p>
                </div>
							</li>
							<li>
                  <div className="content">
								<h3>Random dots?</h3>
							
						
								<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
								</p>
                </div>
							</li>
							

							
							<li>
                  <div className="content">
								<h3>Absolutely nothing.</h3>
								
						
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
								</p>
                </div>
							</li>
						</ul>
						
								
						
					</div>

				</section>

    </div >
  )
}
