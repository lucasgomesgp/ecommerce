interface Props {
  title: string;
}

export function CriteriaArea({ title }: Props) {
  return (
    <div className="flex justify-between my-[50px] text-[22px]">
      <h3 className="font-bold text-[22px]">{title}</h3>
      <div className="flex gap-6 font-semibold">
        <p>New</p>
        <p>Recommended</p>
      </div>
    </div>
  );
}
