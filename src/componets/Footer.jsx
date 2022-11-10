import '../style/Footer.css'
import { AiOutlineInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'


const Footer = () => {

    const redesSociaisIcones = [
        {name: "instagram", id: "instagramFooter", icon: <AiOutlineInstagram />},
        {name: "twitter", id: "twitter", icon: <AiFillTwitterCircle />},
        {name: "linkedin", id: "linkedin", icon: <AiFillLinkedin />}
    ]

    return (
        <footer>
            <h3 id="titutlo-footer">Follow us in the social media...</h3>
            <div className='footer'>
                {redesSociaisIcones.map((redeSocial) => (
                    <div className='div-redes'> 
                        <h4 id={redeSocial.id}>{redeSocial.icon}</h4>
                        <p className="paragraf-socialMedia">{redeSocial.name}</p>
                </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer