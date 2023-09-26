import "./FortuneCCard.css"

const FortuneCCard = ({fortuneC,handleChangeFC}) => {

  return (
    <section className="fortuneCCard">
        <article className="fortuneCCard__container">
            <h1 className="fortuneCCard__title">inspirational phrases</h1>

              <p className="fortuneCCard__phrase">{fortuneC.phrase}</p>

            <button className="fortuneCCard__btn" onClick={handleChangeFC}></button>
        </article>
        <footer className="fortuneCCard__footer">
            Author: {fortuneC.author}
        </footer>
    </section>
  )
}
export default FortuneCCard