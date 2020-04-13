import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    const fields = ['name', 'email', 'subject', 'message'];
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [buttonText, setButtonText] = useState('');

    const validEmail = (email: string) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const updateValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });

        if ((e.target.name === 'email' && validEmail(e.target.value)) || e.target.value.length > 2) {
            const _errors = { ...errors };
            delete _errors[e.target.name];
            setErrors(_errors);
        } else if (e.target.name === 'email' && !validEmail(e.target.value)) {
            setErrors({
                ...errors,
                [e.target.name ]: t(`contact.form.errors.${e.target.name }`)
            });
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
                    _errors[name] = t(`contact.form.errors.${name}`);
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
                .then(response => response.json())
                .then(() => {
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

            <div className="spacer" style={{ height: 60 }}></div>

            <div className="row">
                <div className="col-md-4">
                    <div className="contact-info">
                        <Fade direction="top" triggerOnce={true}>
                            <h3>{t('contact.subtitle')}</h3>
                        </Fade>
                    </div>
                </div>

                <div className="col-md-8">
                    <form id="contact-form" className="contact-form mt-6" method="post">
                        <div className="messages"></div>

                        <div className="row">
                            <div className="column col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={t('contact.form.name')} name="name" onChange={updateValue}/>
                                    <small className="form-text text-error">{errors['name']}</small>
                                </div>
                            </div>

                            <div className="column col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder={t('contact.form.email')} name="email" onChange={updateValue}/>
                                    <small className="form-text text-error">{errors['email']}</small>
                                </div>
                            </div>

                            <div className="column col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={t('contact.form.subject')} name ="subject" onChange={updateValue}/>
                                    <small className="form-text text-error">{errors['subject']}</small>
                                </div>
                            </div>

                            <div className="column col-md-12">
                                <div className="form-group">
                                    <textarea className="form-control" rows={5} placeholder={t('contact.form.message')} name="message" onChange={updateValue}>
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
    </section>);
}

export default Contact;