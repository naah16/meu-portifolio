import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/headerImg.png';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bem-vindo(a) ao meu Portifólio</span>
                        <h1>{`Olá, eu sou uma dev`}<span className="wrap">{text}</span></h1>
                        <p>Estudante de Engenharia da Computação no IFTM - Uberaba Parque Tecnológico. Durante minha trajetória acadêmica, fui membra do PET-TEC e tive a oportunidade de desenvolver minhas habilidades em trabalho em equipe e ajudar outros estudantes. Além disso, participei como voluntária no projeto de extensão Vestibulinho, lecionando aulas de matemática, e como bolsista no projeto de ensino NAPNE, auxiliando estudantes com necessidades específicas.
                        <br></br>Busco sempre me atualizar e aprimorar meus conhecimentos na área de tecnologia, que é minha grande paixão. Sou uma pessoa proativa e adoro desafios, sempre buscando soluções criativas para os problemas. Se você está procurando alguém com vontade de aprender e crescer, aqui estou!</p>
                        <button onClick={() => console.log('connect')}>Vamos conversar</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img style={{borderRadius: "50%"}} src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}