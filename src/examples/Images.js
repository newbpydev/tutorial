import React from "react"
import styledComponents from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export default function Images() {
  return (
    <Wrapper>
      <article>
        <h4>Constrained / default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food image"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h4>Fixed</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food image"
          placeholder="blurred"
          layout="fixed"
          width={200}
          className="example-img"
          as="div"
        />
      </article>
      <article>
        <h4>Fullwidth</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food image"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
          as="article"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styledComponents.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    height: 300px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;

    .example-img {
      height: 200px;
    }
  }
`
