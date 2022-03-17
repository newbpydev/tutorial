import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
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

export default function FetchData() {
  const data = useStaticQuery(getData)
  const {
    site: {
      info: { title },
    },
  } = data
  console.log(data)

  return (
    <div>
      <h2>Name: {data.site.info.person.name}</h2>
      <h2>Title: {title}</h2>
    </div>
  )
}

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           author
//           description
//           person {
//             age
//             name
//           }
//           simpleData
//           title
//           complexData {
//             age
//             name
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div>
//       <h2>{data.site.siteMetadata.person.name}</h2>
//       <div>
//         {data.site.siteMetadata.complexData.map((item, index) => {
//           return (
//             <p key={index}>
//               {item.name}: {item.age}
//             </p>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ComponentName
