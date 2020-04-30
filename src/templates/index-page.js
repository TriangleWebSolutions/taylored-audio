import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import apexLogo from '../img/apexChamberOfCommerce.png'
import cediaLogo from '../img/cediaLogo.png'
import bbbLogo from '../img/bbbSeal.svg'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        className="title"
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              '#0A543D 0.5rem 0px 0px, #0A543D -0.5rem 0px 0px',
            backgroundColor: '#0A543D',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              '#0A543D 0.5rem 0px 0px, #0A543D -0.5rem 0px 0px',
            backgroundColor: '#0A543D',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <p className="subtitle">{mainpitch.description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <h2>Our Credentials</h2>
                <div style={{display: "flex", marginTop: "50px", marginBottom: "50px"}} flexDirection="row">
                  <div>
                    <img src={apexLogo} style={{width: "50em"}}/>
                  </div>
                  <div style={{marginLeft: "30px"}}>
                    <h3>Apex Chamber of Commerce</h3>
                    <p>
                      Taylored Audio a member of Apex Chamber of Commerce, an organization in Apex which supports strong, responsible business in Apex.
                      Look for Taylored Audio within the member community of this organization.
                    </p>
                  </div>
                </div>
                <div style={{display: "flex", marginTop: "50px", marginBottom: "50px"}} flexDirection="row">
                  <div>
                    <img src={cediaLogo} style={{width: "80em"}}/>
                  </div>
                  <div style={{marginLeft: "30px"}}>
                    <h3>CEDIA - Custom Electronic Design and Installation Association</h3>
                    <p>
                      CEDIA is the leading organization of professions in the home technology space, being a company membership that consists of 
                      industry experts and change makers in the home technology space. This keeps Taylored Audio at the implementation stage of the bleeding edge in home theater tech, 
                      such as custom integrations with Alexa and other technologies. 
                    </p>
                  </div>
                </div>
                <div style={{display: "flex", marginTop: "50px", marginBottom: "50px"}} flexDirection="row">
                  <a href="https://www.bbb.org/us/nc/apex/profile/home-theater-systems/taylored-audio-home-theater-corp-0593-90313816">
                    <img src={bbbLogo} style={{width: "60em"}}/>
                  </a>
                  <div style={{marginLeft: "30px"}}>
                    <h3>Better Business Bureau</h3>
                    <p>
                      Taylored Audio has been a member of the Better Business Bureau since 2018, having an "A" rating in the service provided to clients. Since the foundation of our company,
                      we've had nothing but 5 star reviews to show for our service and absolutely no complaints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
