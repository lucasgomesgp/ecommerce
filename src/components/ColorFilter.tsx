interface Props {
  title: string;
  color: string;
}
export function ColorFilter({ color, title }: Props) {
  return (
    <button className={`flex flex-col items-center  justify-center gap-[18px]`} >
      <div className={` w-9 h-9 rounded-xl hover:opacity-50 transition-all`} style={{backgroundColor: color}}/>
      <p className="text-gray-text-colors text-sm font-semibold">{title}</p>
    </button>
  );
}
