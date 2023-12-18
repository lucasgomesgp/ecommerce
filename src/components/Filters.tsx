import { FilterType } from "./FilterType";

export function Filters() {
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
          <input type="range" id="range" className="overflow-visible" />
          <div className="flex items-center justify-center mt-5">
            <input
              className="w-24 h-8 border rounded-lg border-gray-border"
              type="number"
              name="minValue"
            />
            <input
              className="w-24 h-8 border rounded-lg border-gray-border"
              type="number"
              name="maxValue"
            />
          </div>
        </div>
      </FilterType>
      <FilterType title="Colors">
        <p className="border border-t-gray-border">Colors</p>
      </FilterType>
      <FilterType title="Size">
        <p className="border border-t-gray-border">Size</p>
      </FilterType>
      <FilterType title="Dress Style">
        <p className="border border-t-gray-border">Dress Style</p>
      </FilterType>
    </details>
  );
}
