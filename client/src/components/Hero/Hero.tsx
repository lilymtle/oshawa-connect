import "./Hero.scss"

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__video-wrapper">
                <video className="hero__video" autoPlay loop muted>
                    <source src="../assets/videos/hero.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="hero__overlay"></div>

            <div className="hero__content">
                <h1>Your <span className="hero__accent">City</span>, Your <span className="hero__accent">Story</span></h1>
                <p>Connecting Oshawa—events, businesses, and community.</p>
            </div>
        </div>
    );
}