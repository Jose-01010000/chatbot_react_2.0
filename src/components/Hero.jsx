import styles from "../style";
import { hero } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-concertOne font-semibold ss:text-[72px] text-[52px] text-primary1 ss:leading-[100.8px] leading-[75px]">
            Entrenador para <br className="sm:block hidden" />{" "}
            <span className="text-secondary">entrevistas</span> laborales.
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
          <span className="text-primary1 font-bold">InterviewBuddy</span> es un
          compañero virtual que te entrena para entrevistas laborales. Te brinda
          consejos, preguntas frecuentes y simulaciones de entrevistas para que
          estés preparado y aumentes tu confianza. ¡Triunfa en tu primera
          entrevista laboral con nuestro chatbot!
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={hero}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
