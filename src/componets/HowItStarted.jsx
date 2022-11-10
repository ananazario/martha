import '../style/HowItStarted.css'

const About = () => {
    
    const cards = [
        {imagem: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=600", titulo: "Yohara", country: "Germany", age: "17"},
        {imagem: "https://images.pexels.com/photos/413793/pexels-photo-413793.jpeg?auto=compress&cs=tinysrgb&w=600", titulo: "Cecilia", country: "Brazil", age: "20"},
        {imagem: "https://images.pexels.com/photos/458381/pexels-photo-458381.jpeg?auto=compress&cs=tinysrgb&w=600", titulo: "Maria", country: "United Kingdom", age: "19"},
        {imagem: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600", titulo: "John", country: "United States", age: "23"}
    ]
    return (
        <section id='models'>
            <h3 id='titulo-about'>How it started</h3>
            {cards.map((card) => (
                <div className='cards'>
                    <img className="image-models" src={card.imagem} alt={card.titulo} />
                    <div id='information-model'>
                        <h3 className='model-name'>{card.titulo}</h3>
                        <p className='paragraph-card'>• Country: {card.country}</p>
                        <p className='paragraph-card'>• Age: {card.age}</p>
                        <p className='paragraph-card' id='text-card'>• Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a className="link-model" href="https">View more</a>
                        <a className="link-model" id="onlyfans" href="https">Social media</a>
                    </div>
                </div>
            ))}
        </section>
            
    )
}

export default About