import Button from "../../components/Button/Button";
import "./AboutPage.scss"

export default function AboutPage() {
    return (
        <section className="about">
            <div className="about__wrapper">
                <h2 className="section-heading section-heading--gold">Oshawa Connect</h2>

                <p className="about__description">
                    A way to help connect locals to events, businesses, and resources all in one place. Whether you’re new to town or a 
                    lifelong resident, this website is made to bring the community closer together.
                </p>
                
                <h3 className="content-heading content-heading--white">How It Started</h3>

                <p className="how-it-started__description">
                    I wanted to give back to a community that had openly welcomed me. At the same time, I kept noticing people in online 
                    communities expressing how disconnected they felt from Oshawa and each other. That stuck with me, so I decided to build 
                    something to help bridge that gap.
                </p>

            </div>

            <section className="about__how-it-works">
                <h2 className="section-heading">How It Works</h2>
            </section>

            <section className="about__whats-next">
                <h2 className="section-heading section-heading--white">What's Next</h2>

                <p className="whats-next__description">
                    Right now, all updates are done manually, but I’d love to automate some of that in the future. I’m exploring ways 
                    (maybe web scraping?) to pull in local events and happenings around Oshawa more efficiently.
                </p>

                <p className="whats-next__description">
                    I’m also planning to create a way for residents to suggest events, businesses, or community resources that aren’t listed 
                    yet. This could start with a simple submission form, and eventually grow into something more interactive—like user 
                    accounts and self-managed listings.
                </p>

                <div className="whats-next__feedback">
                    <h3 className="content-heading content-heading--onyx">Your City, Your Voice</h3>

                    <p className="whats-next__feedback-description">
                        Oshawa Connect is built for the city—and shaped by the people who live here. If you’ve got ideas, corrections, or 
                        features you’d love to see, I’m all ears. Your input helps guide what comes next.
                    </p>

                    <Button
                        className="whats-next-feedback__btn"
                        variant="primary"
                        label="Help Make This Better"
                    />
                </div>
            </section>

            <section className="about__behind-the-screen">
                <h2 className="section-heading">Behind the Screen</h2>

                <img
                    className="behind-the-screen__image"
                    src="/assets/images/acnh-character.png"
                    alt="Animal Crossing-style girl with glasses, pigtails, and overalls on a green patterned background."
                />

                <p className="behind-the-screen__description">
                    A developer with a love for community projects and buildhing tools that matter. I started Oshawa Connect to sharpen my 
                    coding skills and give folks in my town an easier way to stay connected to what’s happening around them.
                </p>
            </section>
        </section>
    );
}