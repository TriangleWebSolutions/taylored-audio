import React from 'react'

import Layout from '../../components/Layout'
import TestimonialRoll from '../../components/TestimonialRoll'

export default class TestimonialIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/testimonial-index.jpg')`,
          }}
        >
          <h1
            className="title has-text-weight-bold is-size-1"
            style={{
              boxShadow:
                '#0A543D 0.5rem 0px 0px, #0A543D -0.5rem 0px 0px',
              backgroundColor: '#0A543D',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            Latest Testimonials
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <TestimonialRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
