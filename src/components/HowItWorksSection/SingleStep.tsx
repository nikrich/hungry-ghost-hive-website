"use client";

interface Step {
  id: number;
  number: number;
  title: string;
  description: string;
}

const SingleStep = ({ step }: { step: Step }) => {
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
          {step.number}
        </div>
        <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl dark:text-white">
          {step.title}
        </h3>
        <p className="text-body-color text-base leading-relaxed font-medium">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default SingleStep;
