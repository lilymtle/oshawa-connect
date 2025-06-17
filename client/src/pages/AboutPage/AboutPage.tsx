import Button from "../../components/Button/Button";
import "./AboutPage.scss"

export default function AboutPage() {
    return (
        <section className="about">
            <div className="about__wrapper">
                <h2 className="section-heading section-heading--gold">Oshawa Connect</h2>
                <h3 className="content-heading content-heading--white">How It Started</h3>
            </div>

            <section className="about__how-it-works">
                <h2 className="section-heading">How It Works</h2>
            </section>

            <section className="about__whats-next">
                <h2 className="section-heading section-heading--white">What's Next</h2>

                <div className="about__whats-next-feedback">
                    <h3 className="content-heading content-heading--onyx">Your City, Your Voice</h3>

                    <Button
                        className="whats-next-feedback__btn"
                        variant="primary"
                        label="Help Make This Better"
                    />
                </div>
            </section>

            <section className="about__behind-the-screen">
                <h2 className="section-heading">Behind the Screen</h2>
            </section>
        </section>
    );
}