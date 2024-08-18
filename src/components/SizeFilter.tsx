interface Props {
  title: string;
}
export function SizeFilter({ title }: Props) {
  return (
    <button className={`flex hover:opacity-50 transition-all items-center  justify-center border border-gray-border-opacity px-[22px] py-2 rounded-lg`}>
      <p className="text-gray-text-menu text-sm font-semibold">{title}</p>
    </button>
  );
}
