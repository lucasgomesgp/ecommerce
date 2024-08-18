"use client"
import { colorsFilters } from "@/utils/constants/colorsFilters";
import { FilterType } from "./FilterType";
import { ColorFilter } from "./ColorFilter";
import { sizesFilters } from "@/utils/constants/sizesFilters";
import { SizeFilter } from "./SizeFilter";
import { useState } from "react";
import { currencyFormatter } from "@/utils/functions/currencyFormatter";

interface Props{
  maxRangeValue?: number;
}
export function Filters({maxRangeValue}:Props) {
  const [priceRangeValue, setPriceRangeValue] = useState("0");
  return (
    <details
      className="flex flex-col w-[295px] self-start relative border-gray-border-opacity"
      id="filter"
      open
    >
      <summary className="flex justify-between items-center px-7 py-5 ">
        <h3 className="text-[22px] font-semibold text-gray-border">Filter</h3>
      </summary>
      <div className="border border-t-gray-border-opacity">
        <p>Tops</p>
      </div>
      <FilterType title="Price">
        <div className="flex items-center justify-center flex-col border border-t-gray-border-opacity  py-10">
          <p>{currencyFormatter(Number(priceRangeValue))}</p>
          <input type="range" id="range" className="overflow-visible" value={priceRangeValue} max={maxRangeValue} onChange={(event) => { setPriceRangeValue(event.target.value) }} />
          <div className="flex items-center justify-center mt-5">
            <input
              className="w-24 h-8 border rounded-lg border-gray-border text-center outline-none"
              type="number"
              name="minValue"
              min={0}
            />
            <input
              className="w-24 h-8 border rounded-lg border-gray-border text-center outline-none"
              type="number"
              name="maxValue"
              min={0}
              max={maxRangeValue}
/>
          </div>
        </div>
      </FilterType>
      <FilterType title="Colors">
        <div className="grid grid-cols-4 justify-center px-9 grid-rows-3 gap-[18px] pb-10">
          {colorsFilters.map(({ id, color, name }) => (
            <ColorFilter key={id} color={color} title={name} />
          ))}
        </div>
      </FilterType>
      <FilterType title="Size">
        <div className="grid grid-cols-3 justify-center px-9 grid-rows-3 gap-[18px] pb-10">
          {sizesFilters.map(({ id, value }) => (
            <SizeFilter key={id} title={value} />
          ))}
        </div>{" "}
      </FilterType>
      <FilterType title="Dress Style">
        <p className="border border-t-gray-border">Dress Style</p>
      </FilterType>
    </details>
  );
}
