interface Coupon { value: string, percentage: string };

export function useCouponsStorage() {
    function getCoupon() {
        try {
            if (window !== undefined) {
                const coupon = localStorage.getItem("coupon");
                if (coupon) {
                    const parsedResult : Coupon = JSON.parse(coupon);
                    return parsedResult;
                }
            }
        } catch (err) {
            console.log("Error on search coupon");
        }
    }
    function changeCoupon(coupon: Coupon) {
        localStorage.setItem("coupon", JSON.stringify(coupon));
    }
    return { getCoupon, changeCoupon };
}