"use client"

import { useContext, useState } from "react";

import { FirstStep } from "./steps-checkout/FirstStep";
import { FormCheckoutContext } from "@/app/context/FormCheckoutContext";
import { FourthStep } from "./steps-checkout/FourthStep";
import { LastStep } from "./steps-checkout/LastStep";
import { OrderCompleted } from "./steps-checkout/OrderCompleted";
import { SecondStep } from "./steps-checkout/SecondStep";
import { ThirdStep } from "./steps-checkout/ThirdStep";
import { TitleStep } from "./TitleStep";

export function FormsCheckout() {
  const { info } = useContext(FormCheckoutContext);
  const [stepNumber, setStepNumber] = useState(1);
  const [questions, setQuestions] = useState([
    "Where should we sent the order?",
    "What address can we charge for your order?",
    "How should we sent the order?",
    "How would you like to pay?",
    "Confirm and enjoy your order 🎉",
    "Yes, you’ve successfully ordered!"
  ]);

  function showSteps(step: number) {
    switch (step) {
      case 1:
        return <FirstStep changeStepNumber={setStepNumber} />;
      case 2:
        return <SecondStep changeStepNumber={setStepNumber} />;
      case 3:
        return <ThirdStep changeStepNumber={setStepNumber} />;
      case 4:
        return <FourthStep changeStepNumber={setStepNumber} />;
      case 5:
        return <LastStep changeStepNumber={setStepNumber} />
      case 6:
        return <OrderCompleted orderId={info.orderId} />
    }
  }

  return (
    <section className=" flex flex-col items-center justify-center lg:gap-[38px] mt-[52px] transition-all font-inter">
      <div className="flex flex-col gap-2">
        <h1 className="text-center font-bold  text-3xl text-purple-principal">{questions[stepNumber - 1]}</h1>
        <p className="text-center text-xs text-overlay-modal">
          {stepNumber == 6 ? "Good Job!" : "Complete the step-by-step guide to finalize your order"}
        </p>
        <div className="flex flex-wrap gap-8 px-4 lg:px-0 lg:gap-28 mt-5">
          <TitleStep title="Welcome" haveBorder isCompleted={stepNumber > 1} />
          <TitleStep title="Shipping" haveBorder isCompleted={stepNumber > 2} />
          <TitleStep title="Address" haveBorder isCompleted={stepNumber > 3} />
          <TitleStep title="Payment" haveBorder isCompleted={stepNumber > 4} />
          <TitleStep title="Resume" isCompleted={stepNumber > 5} />
        </div>
      </div>
      {showSteps(stepNumber)}
    </section>
  );
}
