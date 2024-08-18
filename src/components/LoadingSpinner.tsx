import { CircleNotch } from "@phosphor-icons/react";

export function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center gap-4">
            <CircleNotch className="animate-spin" />
            <p>Loading...</p>
        </div>
    );
}