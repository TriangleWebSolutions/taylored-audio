import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import ReCAPTCHA from "react-google-recaptcha";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: true, company: "tayloredaudio" }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    console.log(this.state);
    if (!this.state.isValidated) {
      return;
    }
    e.preventDefault()
    const form = e.target
    var url = new URL("https://g3b2wgdnl7.execute-api.us-east-1.amazonaws.com/generalContactUs"), 
    params = this.state
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    console.log(url);
    fetch(url, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      mode: "no-cors",
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact Form</h1>
              <p>Looking to contact Taylored Audio? Please let us know your contact information and a member of our team will 
                get in touch with you as soon as possible.
              </p>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'tel'}>
                    Phone Number
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'tel'}
                      name={'tel'}
                      onChange={this.handleChange}
                      id={'tel'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <ReCAPTCHA
                  sitekey="6LeVmucUAAAAAFxB_j9BAKAl-axsFZef9mVNz6hn"
                  onChange={ () => {
                    this.setState({isValidated: true});
                  }}
                />
                <div className="field">
                  <button className="button is-link" type="submit" disabled={!this.state.isValidated}>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
