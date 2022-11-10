import '../style/WantMore.css'

import { FaInstagramSquare } from 'react-icons/fa';
import { TbAlertOctagon } from 'react-icons/tb';
import { MdLocalAirport } from 'react-icons/md';
import { HiPresentationChartLine } from 'react-icons/hi'


const WantMore = () => {
    const icones = [
        { name: "instagram", id:"instagram", icon: < FaInstagramSquare />, paragrafo: "Present on social networks!"},
        { name: "aviao", id:"aviao", icon: < MdLocalAirport />, paragrafo: "Parades in other countries"},
        { name: "alerta", id:"alerta", icon: < TbAlertOctagon />, paragrafo: "Secure agency"},
        { name: "empresa", id:"empresa", icon: < HiPresentationChartLine />, paragrafo: "+200 partner companies"}
    ];
    
    return (
        <section className='principal-section' id='about-us'>
            <p>Hi, future client</p>
            <h2>Want more?</h2>
            <p id='paragraph-want-more'>For over 30 years fulfilling the dream of all kinds of people. We work with the best companies to produce commercials, fashion shows, advertising campaigns, tests for participation in TV shows and soap operas.</p>
            <div className='section-want-more'>
                {icones.map((icone) => (
                    <>
                        <div className='icones'>
                            <h3 className='' id={icone.id} key={icone.name}>
                                {icone.icon}
                            </h3>
                            <p className="" id={icone.name} key={icone.name}>
                            {icone.paragrafo}
                            </p>
                        </div>
                    </>
                ))}
            </div>
        </section>
            
    )
}

export default WantMore