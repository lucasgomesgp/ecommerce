import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{

}
export function InputForm({...rest}:Props) {
  return (
    <input {...rest} className="border border-gray-text-menu  w-[567px] max-w-[567px] py-3 px-4 rounded-lg outline-none text-base"/>
    )
}
