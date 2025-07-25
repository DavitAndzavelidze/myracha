"use client";

import { FC } from "react";
import CountUpNumber from "./CountUpNumber";

type Props = {
  heading1: React.ReactNode;
  section2: React.ReactNode;
};

const ClientComponent: FC<Props> = (props) => {
  const { heading1, section2 } = props;
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="md:py-20 py-2 h-full">
        {heading1}
        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">სასტუმროები</p>
            <div className="flex justify-center items-center">
              <CountUpNumber duration={800} endValue={50} />
              <span className="text-2xl">+</span>
            </div>
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">კოტეჯები</p>
            <div className="flex justify-center items-center">
              <CountUpNumber duration={800} endValue={100} />
              <span className="text-2xl">+</span>
            </div>
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">
              საოჯახო სასტუმროები
            </p>
            <div className="flex justify-center items-center">
              <CountUpNumber duration={800} endValue={100} />
              <span className="text-2xl">+</span>
            </div>
          </div>
        </div>
      </div>
      {section2}
    </section>
  );
};

export default ClientComponent;
