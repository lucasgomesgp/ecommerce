import { ButtonBackStep } from "../ButtonBackStep";
import { ButtonNextStep } from "../ButtonNextStep";

interface Props {
    changeStepNumber: (stepNumber: number) => void;
}
export function SecondStep({ changeStepNumber }: Props) {
    return (
        <div className="flex flex-col mt-[30px] border-b border-b-white-bar py-[30px] max-w-[70%] w-full gap-5 shadow-steps px-4 mb-4 rounded-lg">
            <p className="font-coreSans font-semibold text-[22px] text-gray-text-menu mb-2">
                Shipping Method
            </p>
            <div className="flex py-[38px] pl-7 pr-12 flex-col rounded-xl bg-white-light gap-[25px] mt-[30px]">
                <div className="flex gap-5 text-xl font-bold border-b border-b-gray-border pb-6">
                    <p className="font-bold text-xl">Arrives by </p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-xl">Delivery Charges</p>
                        <span className="font-medium text-gray-light">
                            Additional fess may apply
                        </span>
                    </div>
                    <p className="font-bold text-xl">$5.00</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <ButtonBackStep onClick={() => { changeStepNumber(1) }} />
                <ButtonNextStep onClick={() => { changeStepNumber(3) }} />
            </div>
        </div>
    );
}