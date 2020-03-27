import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class TestimonialRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification`}
              >
                <header>
                  <p className="post-meta">
                    <div className="author-profile-picture">
                        <PreviewCompatibleImage
                            imageInfo={{
                            image: post.frontmatter.authorpropic,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                        />
                    </div>
                    <div
                      className="title has-text-primary is-size-4"
                      style={{paddingRight: "1em"}}
                    >
                    {post.frontmatter.title}
                    <span> &bull; </span>
                    </div>
                    <span className="subtitle is-size-5 is-block" style={{paddingRight: "1.3em"}}>
                      {post.frontmatter.author} - {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {post.frontmatter.quote}
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
    query TestimonialQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "testimonials" } } }
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
                author
                quote
        		author
                authorpropic {
                    childImageSharp {
                        fluid(maxWidth: 200, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                }
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
	}
    `}
    render={(data, count) => <TestimonialRoll data={data} count={count} />}
  />
)
