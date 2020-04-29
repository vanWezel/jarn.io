import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { ConversationalForm } from 'conversational-form';
import './Contact.scss';

function Contact() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t, i18n, ready } = useTranslation();
    const fields = ['name', 'email', 'subject', 'message'];
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [buttonText, setButtonText] = useState('');

    useEffect(() => {
        ready && ConversationalForm.startTheConversation({
            formEl: document.getElementById('contact-form'),
            context: document.getElementById('contact-form-wrapper'),
            loadExternalStyleSheet: false,
            userImage: '',
            robotImage: 'data:image/jpeg;base64,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',
        });
    }, [ready])

    const validEmail = (email: string) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const updateValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });

        if (e.target.name === 'email' && !validEmail(e.target.value)) {
            setErrors({
                ...errors,
                [e.target.name]: t(`contact.form.errors.email`)
            });
        } else if (e.target.value.length > 2) {
            const _errors = { ...errors };
            delete _errors[e.target.name];
            setErrors(_errors);
        } 
    }

    const sendMessage = () => {
        try {
            setButtonText('');
            setErrors({});
            
            const _errors = {};
            for (const index in fields) {
                const name = fields[index];
                if (!(name in values) || ((name === 'email' && !validEmail(values[name])) || values[name].length < 2)) {
                    _errors[name] = t(`contact.form.errors.${(name === 'email' && !validEmail(values[name])) ? 'email' : 'requierd'}`);
                }
            }
            
            setErrors(_errors);
            
            if (Object.keys(_errors).length > 0) {
                throw new Error('not all fields are filled in.');
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            };

            setButtonText(t('contact.form.button.sending'))
            fetch('/contact.php', requestOptions)
                .then(() => {
                    const form = document.getElementById('contact-form') as HTMLFormElement;
                    if (form) {
                        form.reset();
                    }

                    setButtonText(t('contact.form.button.send'));
                    setTimeout(() => setButtonText(''), 2000);
                }).catch(error => {
                    setButtonText(t('contact.form.button.error-network'));
                    setTimeout(() => setButtonText(''), 2000);
                });
        } catch (error) {
            setButtonText(t('contact.form.button.error'));
            setTimeout(() => setButtonText(''), 2000);
        }
    }

    return (<section id="contact">
        <div className="container">
            <Fade direction="top" triggerOnce={true}>
                <h2 className="section-title">{t('contact.title')}</h2>
            </Fade>

            <div className="spacer"></div>

            <div className="row">
                <div className="col-md-4">
                    <div className="contact-info">
                        <Fade direction="top" triggerOnce={true}>
                            <h3>{t('contact.subtitle')}</h3>
                        </Fade>
                    </div>
                </div>

                <div className="col-md-8">
                    <div id="contact-form-wrapper">
                        <form id="contact-form" className="contact-form mt-6" method="post">
                            <div className="row">
                                <div className="column col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="input-name">{`Hi!&&${t('contact.chat.name')}`}</label>
                                        <input type="text" className="form-control" placeholder={t('contact.chat.name')} name="name" id="input-name" onChange={updateValue} />
                                        <small className="form-text text-error">{errors['name']}</small>
                                    </div>
                                </div>

                                <div className="column col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="input-email">{t('contact.chat.email')}</label>
                                        <input type="email" className="form-control" placeholder={t('contact.chat.email')} name="email" id="input-email" onChange={updateValue}
                                            cf-error={t('contact.errors.email')} />
                                        <small className="form-text text-error">{errors['email']}</small>
                                    </div>
                                </div>

                                <div className="column col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="input-subject">{t('contact.chat.subject')}</label>
                                        <input type="text" className="form-control" placeholder={t('contact.chat.subject')} name="subject" onChange={updateValue} />
                                        <small className="form-text text-error">{errors['subject']}</small>
                                    </div>
                                </div>

                                <div className="column col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="input-message">{t('contact.chat.message')}</label>
                                        <textarea className="form-control" rows={5} placeholder={t('contact.chat.message')} name="message" id="mesinput-sage" onChange={updateValue}>
                                        </textarea>
                                        <small className="form-text text-error">{errors['message']}</small>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" name="submit" id="submit" value="Submit" className="btn btn-default" onClick={sendMessage} disabled={buttonText.length > 0}>
                                {buttonText ? buttonText : t('contact.form.button.default')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="spacer"></div>
    </section>);
}

export default Contact;