import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { GatsbyImage } from "gatsby-plugin-image";
import { FaStackOverflow, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { IoLogoTwitter, IoIosMail } from 'react-icons/io'
import { BsBookmarkFill } from 'react-icons/bs'
import * as CONST from '../utils/constants'

const AboutMe = ({avatar}) => (
  <Container>
      <GatsbyImage image={avatar.childImageSharp.gatsbyImageData} />

      <p>
        <HelloText>Hi there! <span role="img" aria-label="Hi">👋🏼</span></HelloText>
        <br />
        <br />I'm <MyName>Edgar Mejía</MyName>, a full-stack developer from El Salvador
        <span role="img" aria-label="Flag"> 🇸🇻</span>.
        <br />Currently, I'm learning English.
        <br />
        <br />

        <TellMeMoreLink href="#">More ...</TellMeMoreLink>
      </p>

      <p>
        <SocialIcon href={`mailto:${CONST.MY_EMAIL}`}>
          <IoIosMail />&nbsp;
        </SocialIcon>

        <SocialIcon href={CONST.URL_TWITTER} target="_blank" rel="noopener noreferrer">
          <IoLogoTwitter />
        </SocialIcon>

        <SocialIcon href={CONST.URL_STACKOVERFLOW} target="_blank" rel="noopener noreferrer">
          <FaStackOverflow />&nbsp;
        </SocialIcon>

        <SocialIcon href={CONST.URL_GITHUB} target="_blank" rel="noopener noreferrer">
          <AiFillGithub />&nbsp;
        </SocialIcon>

        <SocialIcon href={CONST.URL_LINKEDIN} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />&nbsp;
        </SocialIcon>

        <SocialIcon href={CONST.URL_MAL} target="_blank" rel="noopener noreferrer" title="MyAnimeList">
          <BsBookmarkFill />&nbsp;
        </SocialIcon>
      </p>
    </Container>
)

AboutMe.propTypes = {
  avatar: PropTypes.object,
}

export default AboutMe

const SocialIcon = styled.a`
  font-size: 25px;
`

const Container = styled.div`
  text-align: center;
`

const HelloText = styled.b`
  font-size: 30px;
`

const MyName = styled.span`
  font-weight: bold;
  background: linear-gradient(92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`

const TellMeMoreLink = styled.a`
  margin-top: 10px;
  color: var(--primary-color);
`
