import Image from "next/image";

interface Props {
  number: string;
  title: string;
  color: string;
  orderDate: string;
  deliveryDate: string;
  orderStatus: string;
  paymentMethod: string;
  src: string;
  quantity: number;
  total: number;
}
export function CardOrderDetails({
  number,
  orderDate,
  deliveryDate,
  orderStatus,
  paymentMethod,
  src,
  title,
  color,
  quantity,
  total,
}: Props) {
  return (
    <div className="flex flex-col gap-[30px] border-b border-white-bar mt-[50px] pb-[30px]">
      <div className="flex flex-col bg-white-light py-7 px-[47px] gap-[14px]">
        <p className="text-gray-text-menu text-xl font-semibold">
          Order no: #{number}
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[7px]">
            <p className="text-gray-light text-sm">
              Order Date:
              <span className="text-gray-border">{orderDate}</span>
            </p>
            <p className="text-gray-light text-sm">
              Estimated Delivery Date:
              <span className="text-gray-border">{deliveryDate}</span>
            </p>
          </div>
          <div className="flex flex-col gap-[7px]">
            <p className="text-gray-light text-sm">
              Order Status:
              <span className="text-gray-border">{orderStatus}</span>
            </p>
            <p className="text-gray-light text-sm">
              Payment Method:
              <span className="text-gray-border">{paymentMethod}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[25px]">
          <Image
            src={src}
            width={96}
            height={96}
            alt=""
            className="w-[96px] h-[96px] rounded-"
          />
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-gray-text-menu">{title}</p>
            <p className="text-sm font-semibold text-gray-text-menu">
              Color:
              <span className="text-gray-border">{color}</span>
            </p>
            <p className="text-sm font-semibold text-gray-text-menu">
              Qty:
              <span className="text-gray-border">{quantity}</span>
            </p>
            <p className="text-sm font-semibold text-gray-light">
              Total: {total}
            </p>
          </div>
        </div>
        <button className="py-[14px] px-7 rounded-lg text-white font-medium text-lg hover:opacity-70 transition-all bg-purple-principal">
          View Detail
        </button>
      </div>
    </div>
  );
}
