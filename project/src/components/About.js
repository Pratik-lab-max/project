import React from 'react'

const About = () => {
  return (
    <div>
       <h1>News Updates</h1>       <br></br>
        <h3 style={{color:"red",backgroundColor:"cyan"}}>PM Modi</h3> 
         <Carousel>
            <Carousel.Item>
                <img className="img" src="https://images.indianexpress.com/2022/10/Shooting-3-2.jpg?resize=450,250" alt="" style={{ width: '50%' , height: 'fit-content'}} />           
                    <h3>World at his fingertips at 18, Rudrankksh Patil wins 10m air rifle gold</h3>       
                    <p>Rudrankksh Patil had had enough of travelling to shooting ranges to central and western suburbs of Mumbai, 
                        coolly carrying a rifle case on public transport, pretending it to be a guitar. And so, he decided it was time to go
                        back to school; returning to the premises where he’d encountered the sport for the first time as a 13-year-old.</p>    
            </Carousel.Item>

            <Carousel.Item>
                <img className="img2" src="https://images.indianexpress.com/2022/10/Shami.jpg" alt="" style={{ width: '50%' , height: 'fit-content'}} />
                <h3>Mohammed Shami replaces Jasprit Bumrah in India’s T20 World Cup squad</h3>
                <p>Bumrah had sustained a prolonged back injury during the recent India-South Africa series and had been removed from India’s 
                    15-member squad. The 28-year-old had sustained the same injury during the India tour of England in July and had returned 
                    to playing only during the India-Australia T20I series before he complained of back pain after two appearances.</p>
            </Carousel.Item>

            <Carousel.Item>
                <img className="img3" src="https://images.indianexpress.com/2022/10/MCA-1.jpg" alt="" style={{ width: '50%' , height: 'fit-content'}} />
                <h3>Tendulkar, Gavaskar, Manjrekar, Agarkar can’t vote in Mumbai Cricket elections as they don’t have voter ids and e-voting wasn’t allowed</h3>
                <p>SACHIN Tendulkar, Sunil Gavaskar, Ajit Agarkar, Sanjay Manjrekar, Wasim Jaffer, Vinod Kambli, Avishkar Salvi, and 
                     Paras Mhambrey won’t be allowed to vote in the Mumbai Cricket Association upcoming election on October 18. The reason? 
                     They didn’t submit their voter’s identity card and register before the election.</p>
            </Carousel.Item>

            <Carousel.Item>
                <img className="img3" src="https://images.indianexpress.com/2022/10/India-U17-World-Cup-.jpg" alt="" style={{ width: '50%' , height: 'fit-content'}} />
                <h3>India go down 3-0 to Morocco after goalless first half</h3>
                <p>After 180 minutes of football, India’s chances of going past the group stage of the U-17 Women’s World Cup are over. 
                    The hosts lost 3-0 against Morocco in the battle of debutants on Friday at the Kalinga Stadium in Bhubaneswar. 
                    With no points from two games, India cannot mathematically qualify for the knockouts with one more game to go.</p>
            </Carousel.Item>

        </Carousel>
    </div>
  )
}

export default About
