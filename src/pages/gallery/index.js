import React from 'react'

import Layout from '../../components/Layout'
import GalleryRoll from '../../components/GalleryRoll'

export default class GalleryIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/gallery-index.jpg')`,
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
            Gallery
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <GalleryRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
