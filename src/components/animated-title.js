import React from "react"

const AnimatedTitle = () => (
  <div className="title">
    <span className="letter" data-letter="G">
      G
    </span>
    <span className="letter" data-letter="R">
      R
    </span>
    <span className="letter" data-letter="E">
      E
    </span>
    <span className="letter" data-letter="E">
      E
    </span>
    <span className="letter" data-letter="N">
      N
    </span>
    <span className="letter" data-letter="-">
      -
    </span>
    <span className="letter" data-letter="E">
      E
    </span>
    <span className="letter" data-letter="R">
      R
    </span>
    <span className="letter" data-letter="R">
      R
    </span>
    <span className="letter" data-letter="O">
      O
    </span>
    <span className="letter" data-letter="R">
      R
    </span>
    {animateTitle()}
  </div>
)

const animateTitle = () => {
  setTimeout(() => {
    const letters = Array.prototype.slice.call(
      document.getElementsByClassName("letter")
    )

    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.style.color = "rgb(84, 33, 110)"
        letter.style.transform = "rotateX(0deg) rotateY(-40deg) rotateZ(0deg)"
        setTimeout(() => {
          letter.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
        }, 300 + Math.random(1, 11) * 500)
      }, 100 + Math.random(1, 11) * 500)
    })
  }, 500)
}

export default AnimatedTitle
