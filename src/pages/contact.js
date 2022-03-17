import React from "react"
import Navbar from "../components/Navbar"

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Mumblecore letterpress man braid thundercats, sustainable gentrify
              vexillologist schlitz bitters selvage yuccie shoreditch hammock
              messenger bag.
            </p>
            <p>
              Chicharrones microdosing knausgaard enamel pin air plant unicorn
              listicle pinterest. Sriracha kombucha ethical glossier stumptown
              cliche hell of.
            </p>
            <p>
              Tote bag literally brooklyn flannel, 3 wolf moon pitchfork
              whatever tbh live-edge shabby chic polaroid taxidermy hexagon
              sartorial chillwave.
            </p>
          </article>

          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>

                <button type="submit" className="btn block">
                  submit
                </button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </div>
  )
}
