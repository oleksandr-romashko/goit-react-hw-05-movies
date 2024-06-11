import css from "./Cast.module.css";

const Cast = () => {
  return (
    <ul className={css["cast-list"]}>
      <li className={css["cast-item"]}>
        <img className={css["actor-image"]} src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/7UKRbJBNG7mxBl2QQc5XsAh6F8B.jpg" alt="" />
        <div className={css.details}>
          <p className={css.name}>Elijah Wood</p>
          <div>
            <p className={css.character}>Character:</p>
            <p className={css.character}>Frodo Baggins</p>
          </div>
        </div>
      </li>
      <li className={css["cast-item"]}>
        <img className={css["actor-image"]} src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5cnnnpnJG6TiYUSS7qgJheUZgnv.jpg" alt="" />
        <div className={css.details}>
          <p className={css.name}>Ian McKellen</p>
          <div>
            <p className={css.character}>Character:</p>
            <p className={css.character}>Gandalf the Grey</p>
          </div>
        </div>
      </li>
      <li className={css["cast-item"]}>
        <img className={css["actor-image"]} src="https://media.themoviedb.org/t/p/w276_and_h350_face/eQnuADVICaY40nl2ZseYvfkGQCc.jpg" alt="" />
        <div className={css.details}>
          <p className={css.name}>Liv Tyler</p>
          <div>
            <p className={css.character}>Character:</p>
            <p className={css.character}>Arwen</p>
          </div>
        </div>
      </li>
      <li className={css["cast-item"]}>
        <img className={css["actor-image"]} src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/vH5gVSpHAMhDaFWfh0Q7BG61O1y.jpg" alt="" />
        <div className={css.details}>
          <p className={css.name}>Viggo Mortensen</p>
          <div>
            <p className={css.character}>Character:</p>
            <p className={css.character}>Aragorn</p>
          </div>
        </div>
      </li>
      <li className={css["cast-item"]}>
        <img className={css["actor-image"]} src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5cnnnpnJG6TiYUSS7qgJheUZgnv.jpg" alt="" />
        <div className={css.details}>
          <p className={css.name}>Ian McKellen</p>
          <div>
            <p className={css.character}>Character:</p>
            <p className={css.character}>Gandalf the Grey</p>
          </div>
        </div>
      </li>
      <li className={css["cast-item"]}>
        <img className={css["actor-image"]} src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5cnnnpnJG6TiYUSS7qgJheUZgnv.jpg" alt="" />
        <div className={css.details}>
          <p className={css.name}>Ian McKellen</p>
          <div>
            <p className={css.character}>Character:</p>
            <p className={css.character}>Gandalf the Grey</p>
          </div>
        </div>
      </li>
      <li className={css["cast-item"]}>
        <img className={css["actor-image"]} src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5cnnnpnJG6TiYUSS7qgJheUZgnv.jpg" alt="" />
        <div className={css.details}>
          <p className={css.name}>Ian McKellen</p>
          <div>
            <p className={css.character}>Character:</p>
            <p className={css.character}>Gandalf the Grey</p>
          </div>
        </div>
      </li>
      <li className={css["cast-item"]}>
        <img className={css["actor-image"]} src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5cnnnpnJG6TiYUSS7qgJheUZgnv.jpg" alt="" />
        <div className={css.details}>
          <p className={css.name}>Ian McKellen</p>
          <div>
            <p className={css.character}>Character:</p>
            <p className={css.character}>Gandalf the Grey</p>
          </div>
        </div>
      </li>
    </ul>
  )
};

export default Cast;