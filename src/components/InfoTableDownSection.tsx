import { currencyFormatter } from "@/utils/functions/currencyFormatter";
import { TitleWithBar } from "./TitleWithBar";
import { ReactNode } from "react";
import { IProduct } from "@/utils/types/IProducts";
interface Props {
  titleFirstArea: string;
  children: ReactNode;
  titleTableArea: string;
  titleTableFirstCol: string;
  titleTableSecondCol: string;
  data: IProduct[];
}

export function InfoTableDownSection({
  children,
  data,
  titleFirstArea,
  titleTableArea,
  titleTableFirstCol,
  titleTableSecondCol,
}: Props) {
  return (
    <section className="flex flex-col pl-8 gap-[100px] my-[100px] lg:pl-[121px]">
      <div className="flex flex-col gap-5 lg:w-[1100px] lg:max-w-[1220px] text-justify">
        <TitleWithBar title={titleFirstArea} />
        {children}
      </div>
      <div>
        <TitleWithBar title={titleTableArea} />
        <table className="w-[500px] max-w-[720px] lg:w-[1100px] lg:max-w-[1220px] mt-12 bg-white-light">
          <tbody>
            <tr className="border border-transparent border-b-gray-border-opacity font-coreSans">
              <th className="items-start font-semibold text-2xl py-12">
                {titleTableFirstCol}
              </th>
              <th className="text-center font-semibold text-2xl border border-l-gray-border-opacity border-r-transparent border-t-transparent">
                {titleTableSecondCol}
              </th>
            </tr>
            {data.length &&
              data.map(({ id, attributes: { title, price } }) => (
                <tr
                  key={id}
                  className={"font-causten text-gray-light text-2xl"}
                >
                  <td className="pl-[84px] pt-[52px] mt-[52px]">{title}</td>
                  <td className="mt-[52px] pt-[52px] text-center border border-l-gray-border-opacity border-r-transparent  border-b-transparent border-t-transparent">
                    {currencyFormatter(price)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
