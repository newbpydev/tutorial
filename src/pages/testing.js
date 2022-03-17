import { graphql } from "gatsby"
import React from "react"

export default function Testing({ data }) {
  console.log(data)
  const author = data.site.info.author

  return (
    <div>
      <h2>Author: {author}</h2>
    </div>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        person {
          age
          name
        }
        simpleData
        title
        complexData {
          age
          name
        }
      }
    }
  }
`
