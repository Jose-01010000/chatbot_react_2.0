import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[160px] h-[160px] rounded-full bg-secondary-100 p-[5px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-concertOne font-medium text-[18px] leading-[23.4px]">
          <span className="text-primary1">Iniciar</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>

      <p className="font-concertOne font-medium text-[18px] leading-[23.4px]">
        <span className="text-primary1">Conversación</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
