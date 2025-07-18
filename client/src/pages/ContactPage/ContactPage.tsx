import { useForm } from "@formspree/react";
import Button from "../../components/Button/Button";
import "./ContactPage.scss";

export default function ContactPage() {
    const formspreeID = import.meta.env.VITE_FORMSPREE_ID;
    const [state, handleSubmit] = useForm(formspreeID);

    return (
        <section className="contact">
            <div className="contact__wrapper">
                <h2 className="section-heading">
                    Share Your Thoughts
                </h2>

                <p className="contact__description">
                    Have an idea, comment, or question? I’d love to hear from you — just use the form below, and I’ll get back to you as 
                    soon as I can.
                </p>
            </div>

            <div className="contact__form-container">
                <div className="contact__form-container-banner">
                    <div className="circle circle--red"></div>
                    <div className="circle circle--yellow"></div>
                    <div className="circle circle--green"></div>
                </div>

                <div className="form__wrapper">
                    {state.succeeded ? (
                        <p className="form_success">Thank you for your message! ☺️</p> 
                    ) : ""}

                    <form 
                        className="form"
                        action={`https://formspree.io/f/${formspreeID}`}
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div className="form__field">
                            <label 
                                htmlFor="name"
                                className="form__label"
                            >
                                Name <span className="form__required" aria-hidden="true">(required)</span>
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                className="form__input"
                                placeholder="Enter your name"
                                required
                                aria-required="true"
                                autoComplete="name"
                            />
                        </div>

                        <div className="form__field">
                            <label 
                                htmlFor="email"
                                className="form__label"
                            >
                                Email <span className="form__required" aria-hidden="true">(required)</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="form__input"
                                placeholder="example@email.com"
                                required
                                aria-required="true"
                                autoComplete="email"
                            />
                        </div>

                        <div className="form__field">
                            <label 
                                htmlFor="message"
                                className="form__label"
                            >
                                Message <span className="form__required" aria-hidden="true">(required)</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="form__input form__input--textarea"
                                placeholder="Enter your message"
                                required
                                aria-required="true"
                            />
                        </div>

                        <Button
                            className="form__button"
                            type="submit"
                            variant="primary"
                            disabled={state.submitting}
                            label="Send"
                        />
                    </form>
                </div>
            </div>
        </section>
    )
}