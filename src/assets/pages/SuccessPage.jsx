import Footer from "../../components/Footer";

function SuccessPage({ orderData }) {

    const basePrice = 85;
    const toppingPrice = 5;
    const toppingsTotal = orderData.malzemeler.length * toppingPrice;

    return (
        <div className="bg-[#CE2829] min-h-screen text-white flex flex-col items-center">

            {/* HEADER */}
            <div className="py-6 text-xl font-bold">
                Teknolojik Yemekler
            </div>

            {/* 📱 MOBİL VIEW */}
            <div className="flex md:hidden flex-1 items-center justify-center text-center px-6">
                <h1 className="text-3xl leading-relaxed">
                    TEBRİKLER! <br />
                    SİPARİŞİNİZ ALINDI!
                </h1>
            </div>

            {/* 💻 DESKTOP CONTENT */}
            <div className="hidden md:flex flex-col items-center text-center mt-10 space-y-6">

                <p className="text-yellow-400 italic text-sm">
                    lezzetin yolda
                </p>

                <h1 className="text-5xl font-light tracking-wide">
                    SİPARİŞ ALINDI
                </h1>

                <h2 className="font-semibold mt-4">
                    {orderData.isim}
                </h2>

                <div className="w-40 border-t border-white"></div>

                <h2 className="font-semibold mt-4">
                    {orderData.pizzaIsim}
                </h2>

                {/* DETAYLAR */}
                <div className="text-sm space-y-1">
                    <p>
                        Boyut: {
                            orderData.boyut === "S"
                                ? "Küçük"
                                : orderData.boyut === "M"
                                    ? "Orta"
                                    : "Büyük"
                        }
                    </p>

                    <p>Hamur: {orderData.hamur}</p>

                    <p className="max-w-[250px] mx-auto leading-6">
                        Ek Malzemeler:
                        <span className="ml-1">
                            {orderData.malzemeler.map((item, i) => (
                                <span key={item}>
                                    {item}
                                    {i < orderData.malzemeler.length - 1 && ", "}
                                </span>
                            ))}
                        </span>
                    </p>
                </div>

                {/* SUMMARY BOX */}
                <div className="mt-6 border border-white rounded-lg p-5 w-[260px] text-left">

                    <h3 className="mb-3">Sipariş Toplamı</h3>

                    <div className="flex justify-between text-sm">
                        <span>Seçimler</span>
                        <span>{toppingsTotal}₺</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold mt-2">
                        <span>Toplam</span>
                        <span>{orderData.toplam}₺</span>
                    </div>

                </div>

            </div>

            {/* FOOTER sadece desktop */}
            <div className="hidden md:block w-full">
                <Footer />
            </div>

        </div>
    );
}

export default SuccessPage;