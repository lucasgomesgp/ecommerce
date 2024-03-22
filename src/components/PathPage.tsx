import { ArrowMenu } from '@/svgs/arrow-menu'

export function PathPage({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-3 lg:pl-[55px] mt-7">
            <div className="flex items-center gap-3">
                <p className="text-lg font-medium text-gray-light">Home</p>
                <ArrowMenu />
            </div>
            <div className="flex items-center gap-3">
                <p className="text-lg font-medium text-gray-light">My Account</p>
                <ArrowMenu />
            </div>
            <p className="text-lg text-gray-text-menu font-bold">{title}</p>
        </div>
    )
}
