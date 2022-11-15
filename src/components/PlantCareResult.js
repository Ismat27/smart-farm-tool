import React from 'react'
import styled from 'styled-components'
import { usePlantCare } from '../plant_care_context'

const PlantCareResult = () => {
    const { plantImage, returnHome} = usePlantCare()


  return (
    <Wrapper>
        <h1>Result of diagnosis</h1>
        <div className='img-container'>
            <p>file uploaded</p>
            <img src={ plantImage } alt='plant'/>
        </div>
        <div className='results'>
            <article>
                <h2>Likely disease : </h2>
                <p>
                    Black Mold
                </p>
            </article>
            <article>
                <h2>Causal Factors : </h2>
                <p>
                    Black mold can be a serious disease of ripe tomatoes on the vine. It tends to strike following late-season rain.
                    The first sign of this fungal infection, caused by Alternaria alternata, is lesions on the surface of the fruit. They can range in size from tiny flecks to large, circular, sunken lesions that cause decay deep into the fruit.
                    If the weather is warm and humid, the fungus may produce spores from the lesions that look like black velvet on their surface.
                    The fungus can also invade wounds, including any in areas of the tomatoes that are sunburned.
                </p>
            </article>
            <article>
                <h2>Recommendations : </h2>
                <p>
                    If black mold tends to be a problem in your garden, start harvesting the fruit as soon as they ripen and avoid overhead irrigation, particularly late in the season.
                    Treatment with fungicides may be necessary in rainy years, if the fruit is damaged, or if the tomatoes are being grown for a late harvest.
                </p>
            </article>
            <article>
                <h2>Referrals : </h2>
                <p>
                    Would you like to chat with a Botanist Consultant?
                </p>
            </article>
        </div>
        <div className='action-btns'>
            <button className='btn chat'>Chat with Expert</button>
            <button onClick={() => returnHome()} className='btn return-home'>Return Home</button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
h1 {
    margin-bottom: 20px;
}
.img-container {
    margin-bottom: 20px;
    img {
        width: 500px;
        max-width: 100%;
        max-height: 300px;

    }
    p {
        text-transform: capitalize;
        margin-bottom: 10px;
        font-weight: bold;
    }
}
article {
    margin-bottom: 20px;
    p {
        font-weight: 500;
    }
}
h2 {
    font-size: 20px;
    margin-bottom: 20px;
}
p {
    line-height: 30px;
    letter-spacing: 0.045em;
}
button {
    margin-bottom: 20px;
    color: var(--deep-green);
    background: #F8F8F8;
    border: 3px solid var(--deep-green);
    border-radius: 10px;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.045em;
}
.chat {
    color: #F8F8F8;
    background: var(--deep-green);
}
@media (min-width: 768px){
article {
    display: grid;
    grid-template-columns: 25% auto;
}
.action-btns {
    padding-left: 80px;
    display: flex;
    gap: 40px;
    button {
        width: 300px;
    }
}
}
`
export default PlantCareResult