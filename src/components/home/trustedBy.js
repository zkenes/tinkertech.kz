import React from "react"

import logo2 from "../../images/logos/image 2.png"
import logo3 from "../../images/logos/image 3.png"
import logo5 from "../../images/logos/image 5.png"
import logo6 from "../../images/logos/image 6.png"

const TrustedBy = () => (
  <section id="trustedBy" className="section has-y-space trusted-by">
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell large-10 large-offset-2">
          <h3 className="section__title">Trusted By</h3>
          <div className={"logos"}>
            <div className={"logos__item"}>
              <img src={logo2} alt="" />
            </div>
            <div className={"logos__item"}>
              <img src={logo3} alt="" />
            </div>
            <div className={"logos__item"}>
              <img src={logo5} alt="" />
            </div>
            <div className={"logos__item"}>
              <img src={logo6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TrustedBy
