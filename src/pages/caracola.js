import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'

const CaracolaPage = ({ data }) => {
  const random_boolean = Math.random() >= 0.5
  const caracol = random_boolean ? data.caracolaSi : data.caracolaNo

  return (
    <Layout>
      <SEO
        title="¿Qué dice la caracola mágica?"
        coverImage={caracol}
        url="https://edgarmejia.com/caracola"
        description="Preguntemos a la caracola ..."
      />
      <Post
        title="¿Qué dice la caracola mágica?"
        date="2020-10-07"
        author="Edgar Mejía"
        tags={['Meme', 'Bob Esponja', 'Caracola']}
      >
        <>
          <GatsbyImage image={caracol.childImageSharp.gatsbyImageData} />
        </>
      </Post>
    </Layout>
  );
}

CaracolaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CaracolaPage

export const postsQuery = graphql`{
  caracolaSi: file(relativePath: {eq: "caracola_si.png"}) {
    childImageSharp {
      gatsbyImageData(width: 500, layout: CONSTRAINED)
    }
  }
  caracolaNo: file(relativePath: {eq: "caracola_no.jpeg"}) {
    childImageSharp {
      gatsbyImageData(width: 500, layout: CONSTRAINED)
    }
  }
}
`
