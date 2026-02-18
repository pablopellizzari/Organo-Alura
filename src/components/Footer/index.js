import './Footer.css';

const Footer = () => {
    return (
        <footer className="page-footer">
            <section className="contact">
                <ul className="social-media-list">
                    <li>
                        <img src="/images/fb.png" alt="Facebook" />
                    </li>
                    <li>
                        <img src="/images/tw.png" alt="Twitter" />
                    </li>
                    <li>
                        <img src="/images/ig.png" alt="Instagram" />
                    </li>
                </ul>
            </section>
            <section className="logo">
                <img src="/images/logo.png" alt="Logo Organo" />
            </section>
            <section className="copyright">
                <p>Desenvolvido por Alura.</p>
            </section>

        </footer>
    )
}

export default Footer;