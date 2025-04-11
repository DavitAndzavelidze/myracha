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
      <div className="py-20 h-full">
        {heading1}
        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">სასტუმროები</p>
            <CountUpNumber duration={800} endValue={50} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">კოტეჯები</p>
            <CountUpNumber duration={800} endValue={20} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">
              საოჯახო სასტუმროები
            </p>
            <CountUpNumber duration={800} endValue={80} />
          </div>
        </div>
      </div>
      {section2}
    </section>
  );
};

export default ClientComponent;
