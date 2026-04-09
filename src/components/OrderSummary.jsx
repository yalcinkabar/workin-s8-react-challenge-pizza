function OrderSummary({ formData }) {

    const basePrice = 85;
    const toppingPrice = 5;

    const toppingsTotal = formData.malzemeler.length * toppingPrice;
    const total = (basePrice + toppingsTotal) * formData.adet;

    return (
        <div className="space-y-4">

            <h3 className="font-semibold text-base">Sipariş Toplamı</h3>

            <div className="text-sm space-y-2">

                <div className="flex justify-between text-gray-500">
                    <span>Seçimler</span>
                    <span>{toppingsTotal}₺</span>
                </div>

                <div className="flex justify-between font-bold text-red-500">
                    <span>Toplam</span>
                    <span>{total}₺</span>
                </div>

            </div>

        </div>
    );
}
export default OrderSummary;