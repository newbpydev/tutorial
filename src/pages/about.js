import React from "react"
import Layout from "../components/Layout"
import { text, page } from "../examples/about.module.css"

export default function About() {
  return (
    <Layout>
      <div className={page}>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          nostrum, corrupti atque tempore debitis optio ab voluptas impedit
          expedita tenetur nobis sed nam libero, rem soluta quidem aliquid ut?
          Eum.
        </p>
      </div>
    </Layout>
  )
}
