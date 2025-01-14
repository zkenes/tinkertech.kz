import React from "react"

const Career = () => (
  <section id="careers" className="section has-y-space careers">
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell large-10 large-offset-2">
          <h3 className="section__title">Career</h3>

          <p className={"section__lead"}>
            tinker[tech] is not a world leader in air travel or instant
            payments, it does not give 700% micro-loans, it does not pump oil
            and does not trade on the stock exchange, but it will shut up many
            in the development of AWESOME digital products.
          </p>
          <p className={"section__lead"}>
            We have a lot of work and we need the best people
          </p>
          <div>
            {/* <span>5 vacancies</span>&nbsp;&nbsp;&nbsp;&nbsp; */}
            <a
              href="https://hh.kz/employer/78220"
              target="_blank"
              className="button hollow is-marginless"
            >
              See jobs
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Career
