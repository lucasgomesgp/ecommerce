"use client"

import * as Dialog from '@radix-ui/react-dialog';

import { useContext, useState } from "react";

import { FirstStep } from "./steps-checkout/FirstStep";
import { FormCheckoutContext } from "@/app/context/FormCheckoutContext";
import { FourthStep } from "./steps-checkout/FourthStep";
import { LastStep } from "./steps-checkout/LastStep";
import { OrderCompleted } from "./steps-checkout/OrderCompleted";
import { SecondStep } from "./steps-checkout/SecondStep";
import { ThirdStep } from "./steps-checkout/ThirdStep";
import { TitleStep } from "./TitleStep";
import { X } from '@phosphor-icons/react';

interface Props {
  registeredAddresses: {
    id: string;
    country: string;
    name: string;
    city: string;
    state: string;
    phone: string;
    postalCode: string;
    companyName: string | null;
    streetAddress: string | null;
    apartment: string | null;
    deliveryInstruction: string | null;
    isDefaultShippingAddress?: boolean;
    isDefaultBillingAddress?: boolean;
    userId: string;
  }[] | undefined
}

export interface Address {
  id: string
  country: string
  name: string
  city: string
  state: string
  phone: string
  postalCode: string
  companyName: string | null
  streetAddress: string | null
  apartment: string | null
  deliveryInstruction: string | null
  firstName: string
  lastName: string
  billingAddress: boolean | undefined
  optionIndex: number
}

export function FormsCheckout({ registeredAddresses }: Props) {
  const { info } = useContext(FormCheckoutContext);
  const [stepNumber, setStepNumber] = useState(1);
  const mockModal = {
    id: "",
    country: "",
    name: "",
    city: "",
    state: "",
    phone: "",
    postalCode: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    deliveryInstruction: "",
    firstName: "",
    lastName: "",
    billingAddress: false,
    optionIndex: 1,
  };
  const [addressModal, setAddressModal] = useState<Address>(mockModal);

  const modalIsOpen = registeredAddresses?.length !== 0 && stepNumber === 1;
  const [statusModalAddress, setStatusModalAddress] = useState(modalIsOpen);
  const [optionIndexSelectedAddress, setOptionIndexSelectedAddress] = useState(-1);
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
        return <FirstStep changeStepNumber={setStepNumber} addressChossedOnModal={addressModal} />;
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
  function handleChangeAddressModalToState(data: any) {
    const parsedData = JSON.parse(data) as Address;
    const {
      id, apartment, city, companyName, country, deliveryInstruction, name,
      phone, postalCode, state, streetAddress, firstName, lastName, billingAddress,
      optionIndex,

    } = parsedData;
    const address: Address = {
      id,
      apartment: apartment || null,
      city,
      companyName: companyName || null,
      country,
      deliveryInstruction: deliveryInstruction || null,
      name,
      phone,
      postalCode,
      state,
      streetAddress: streetAddress || null,
      firstName: firstName,
      lastName: lastName,
      billingAddress,
      optionIndex,
    };
    setOptionIndexSelectedAddress(optionIndex);
    setAddressModal(address);
  }

  function handleCancelModalOperation() {
    setAddressModal(mockModal);
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
        <Dialog.Root open={statusModalAddress} onOpenChange={setStatusModalAddress}>
          {modalIsOpen && (
            <Dialog.Trigger className="mt-4">
              Open registered addresses
            </Dialog.Trigger>
          )}
          <Dialog.Portal>
            <Dialog.Overlay className="bg-overlay-modal fixed inset-0 z-40" />
            <Dialog.Content className="flex flex-col font-inter bg-white justify-center z-50 items-center py-4  fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] min-w-[700px] rounded-md">
              <Dialog.Close className="absolute top-4 right-4 rounded-md  p-2 bg-red-500 hover:bg-red-400">
                <X color="#FFFFFF" />
              </Dialog.Close>
              <Dialog.Title className="font-medium text-xl leading-6 ">You have {registeredAddresses?.length} registered</Dialog.Title>
              <p className="mt-4">Please choose one for checkout or exit for add new one</p>
              <select className="p-2 my-4 rounded-md font-bold" value={optionIndexSelectedAddress} onChange={(event) => { handleChangeAddressModalToState(event.target.value) }}>
                <option value={1}>{addressModal.id ? `Address selected: Nº ${addressModal.optionIndex + 1}` : "Choose one..."}</option>
                {registeredAddresses?.map(({
                  apartment, isDefaultBillingAddress, city, companyName, country, deliveryInstruction, id, name, phone, postalCode, state, streetAddress
                }, index) => (
                  <option key={id} value={JSON.stringify({
                    apartment, billingAddress: isDefaultBillingAddress, city, companyName, country, deliveryInstruction, name, id, phone, postalCode, state, streetAddress,
                    firstName: name.split(" ")[0], lastName: name.split(" ")[1],
                    optionIndex: index,
                  })}
                  >
                    Nº {index + 1}, Name: {name}, City: {city}, Postal Code: {postalCode}, Street: {state}
                  </option>
                ))}
              </select>
              <Dialog.Close className="flex gap-8">
                <button className="bg-red-500 py-3 px-4 text-white font-bold mt-4 rounded-md" onClick={handleCancelModalOperation}>
                  Exit
                </button>
                <button className="bg-green-500 py-3 px-4 text-white font-bold mt-4 rounded-md">
                  Save
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal >
        </Dialog.Root>
      </div>
      {showSteps(stepNumber)}
    </section>
  );
}
