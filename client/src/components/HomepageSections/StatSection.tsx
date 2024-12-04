import { useState } from "react";
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedNumber = ({ number }: { number: number }) => {
  const props = useSpring({
    number: number,
    from: { number: 0 },
    config: { mass: 1, tension: 50, friction: 80 }
});

  return (
    <div className="flex flex-row">
      <animated.div className="text-primary font-bold text-3xl">
        {props.number.to(n => n.toFixed(0))}
      </animated.div>
      <p className="text-primary font-bold text-3xl">+</p>
    </div>
  );
}

export default function StatSection() {
  const [verifications, setVerifications] = useState(0);
  const [importers, setImporters] = useState(0);
  const [countries, setCountries] = useState(0);
  const [levels, setLevels] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  if (inView && verifications === 0) {
    setVerifications(1000);
    setImporters(500);
    setCountries(90);
    setLevels(4);
  }

  return (
    <section className="py-20 flex flex-row justify-center gap-20 items-center flex-wrap p-4 text-center lg:text-left">
      <div>
        <p className="font-sf-bold text-3xl lg:text-[42px] leading-tight max-w-[600px]">Explore hundreds of offerings tailored to your needs</p>
      </div>
      <div className="flex flex-row gap-10 items-center">
        <div className="flex flex-col gap-4">
          <div className="border-l-2 px-2">
            <div ref={ref} className="">
              <AnimatedNumber number={verifications} />
            </div>
            <p className="text-left">Verifications</p>
          </div>
          <div className="border-l-2 px-2">
            <div ref={ref} className="">
              <AnimatedNumber number={importers} />
            </div>
            <p className="text-left">Trusted Importers</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border-l-2 px-2">
            <div ref={ref} className="">
              <AnimatedNumber number={levels} />
            </div>
            <p className="text-left">Levels of verification</p>
          </div>
          <div className="border-l-2 px-2">
            <div ref={ref} className="">
              <AnimatedNumber number={countries} />
            </div>
            <p className="text-left">Countries and regions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
