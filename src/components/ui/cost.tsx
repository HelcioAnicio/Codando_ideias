import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

export const Cost = () => {
  return (
    <section>
      <article>
        <h2>O custo invísivel de um site medíocre</h2>
        <div>
          <div></div>
          <div>
            <p className="flex w-full items-start gap-1">
              <IoMdCloseCircle className="text-destructive" />
              <span>Velocidade de Percepção (LCP):</span> Se demorar mais de
              2.5s para o seu site abrir, o cliente desiste da compra.{" "}
              <FaCheckCircle className="text-green-500" />
            </p>
            <p className="flex w-full items-start gap-1">
              <IoMdCloseCircle className="text-destructive" />
              <span>Capacidade de Resposta (FID):</span> Mede o atraso entre um
              clique e a ação. Sites travados não vendem.{" "}
              <FaCheckCircle className="text-green-500" />
            </p>
            <p className="flex w-full items-start gap-1">
              <IoMdCloseCircle className="text-destructive" />
              <span>Estabilidade visual (CLS):</span> Sabe quando você vai
              clicar em um botão e ele se desloca (“pula”)? Nós eliminamos esses
              saltos irritantes. <FaCheckCircle className="text-green-500" />
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
