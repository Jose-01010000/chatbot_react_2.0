import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }text-black hover:bg-secondary-100 hover:text-white`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue-100`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-concertOne font-semibold text-secondary text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-concertOne font-normal  text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = ({ openChat }) => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Prepárate para triunfar <br className="sm:block hidden" /> en tu primera
        entrevista laboral.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        ¡Prepárate para triunfar en tu entrevista laboral con nuestro chatbot
        <span className="text-primary1 font-bold"> InterviewBuddy</span> como
        entrenador personalizado! ¡Aumenta tu confianza y consigue tu trabajo
        ideal!
      </p>

      <Button margin={"mt-10"} accion={openChat} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
