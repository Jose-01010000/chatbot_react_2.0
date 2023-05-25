import styles from "../style";
import Button from "./Button";

const CTA = ({ openChat }) => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col feedback-card rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        ¡Probemos{" "}
        <span className="text-primary1 font-bold"> InterviewBuddy</span> ahora!
      </h2>
      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
        ¡Es hora de prepararte para tu próxima entrevista de trabajo! Si estás
        buscando una forma efectiva y fácil de mejorar tus habilidades de
        entrevista, ¡prueba InterviewBuddy ahora!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button accion={openChat} />
    </div>
  </section>
);

export default CTA;
