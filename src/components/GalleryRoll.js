import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Img from "gatsby-image"


const NonStretchedImage = props => {
    let normalizedProps = props
    if (props.fluid && props.fluid.presentationWidth) {
      normalizedProps = {
        ...props,
        style: {
          ...(props.style || {}),
          maxWidth: 200,
          margin: "0 auto", // Used to center the image
        },
      }
    }
  
    return <Img {...normalizedProps} />
  }

class TestimonialRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-4" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification`}
              >
                <div className="gallery-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                  />
                </div>
                <header>
                  <p className="post-meta">
                    <div
                      className="title has-text-primary is-size-4"
                      style={{paddingRight: "1em"}}
                    >
                    {post.frontmatter.title}
                    </div>
                  </p>
                </header>
                <p>
                  {post.frontmatter.description}
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

TestimonialRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query GalleryRemark {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "gallery" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                featuredimage {
                    childImageSharp {
                        fluid(maxWidth: 500, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                }
                location
              }
            }
          }
        }
	}
    `}
    render={(data, count) => <TestimonialRoll data={data} count={count} />}
  />
)
