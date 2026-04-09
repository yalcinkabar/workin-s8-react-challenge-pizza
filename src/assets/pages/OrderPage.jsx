import { useState } from "react";
import SizeSelector from "../../components/SizeSelector";
import DoughSelector from "../../components/DoughSelector";
import Toppings from "../../components/Toppings";
import OrderSummary from "../../components/OrderSummary";
import axios from "axios";
import Footer from "../../components/Footer";

function OrderPage({ setOrderData }) {
    const [formData, setFormData] = useState({
        isim: "",
        boyut: "",
        hamur: "",
        malzemeler: [],
        not: "",
        adet: 1
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const basePrice = 85;
    const toppingPrice = 5;

    const toppingsTotal = formData.malzemeler.length * toppingPrice;
    const total = (basePrice + toppingsTotal) * formData.adet;

    const isValid =
        formData.isim.length >= 3 &&
        formData.boyut !== "" &&
        formData.hamur !== "" &&
        formData.malzemeler.length >= 4;

    const handleSubmit = async () => {
        setError("");
        setLoading(true);

        try {
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                formData
            );

            console.log("API RESPONSE:", response.data);

            setOrderData({
                ...formData,
                toplam: total,
                pizzaIsim: "Position Absolute Acı Pizza"
            });

        } catch (err) {
            console.error(err);
            setError("Sipariş gönderilemedi, tekrar dene");
        }

        setLoading(false);
    };

    return (
        <div className="bg-[#FAF7F2] min-h-screen">

            {/* HEADER */}
            <div className="bg-[#CE2829] text-white text-center py-5 text-xl font-bold">
                Teknolojik Yemekler
            </div>

            {/* CONTAINER */}
            <div className="flex justify-center">
                <div className="w-full max-w-xl px-4">


                    {/* HERO */}
                    <div className="text-center pt-6 pb-10 max-w-[480px]">

                        <img
                            src="./images/iteration-2-images/pictures/form-banner.png"
                            alt="pizza"
                            className="mx-auto w-[400px] -mt-10"
                        />

                        <p className="text-sm text-gray-500 mt-4">
                            Anasayfa - Seçenekler - <span className="text-red-500">Sipariş Oluştur</span>
                        </p>

                        <h3 className="text-[20px] font-bold mt-2" >
                            Position Absolute Acı Pizza
                        </h3>

                        <span className="text-lg font-bold mt-2">85.50₺</span>

                        <p className="max-w-[500px] mx-auto text-sm text-gray-500 mt-3 leading-6 text-left">
                            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
                            Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
                            daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                            genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
                            İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                        </p>

                    </div>

                    {/* FORM CONTAINER */}
                    <div className="max-w-5xl mx-auto px-4">

                        <div className="space-y-6">

                            {/* INPUT */}
                            <input
                                className="w-full border p-3 rounded-md"
                                type="text"
                                placeholder="İsminizi girin"
                                value={formData.isim}
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        isim: e.target.value
                                    }))
                                }
                            />
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-1">

                                    <SizeSelector
                                        boyut={formData.boyut}
                                        setFormData={setFormData}
                                    />
                                </div>
                                <div className="flex-1">

                                    <DoughSelector
                                        hamur={formData.hamur}
                                        setFormData={setFormData}
                                    />
                                </div>

                            </div>


                            <Toppings
                                malzemeler={formData.malzemeler}
                                setFormData={setFormData}
                            />

                            {/* TEXTAREA */}
                            <h3 className="text-left">Sipariş Notu</h3>
                            <textarea
                                className="w-full border p-3 rounded-md"
                                placeholder="Siparişine eklemek istediğin bir not var mı?"
                                value={formData.not}
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        not: e.target.value
                                    }))
                                }
                            />

                            <hr />

                            {/* ALT KISIM */}
                            <div className="flex flex-col md:flex-row gap-6  items-start">

                                {/* ADET */}
                                <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded">

                                    <button className="px-3 py-1 bg-[#FDC913] rounded font-bold"
                                        onClick={() =>
                                            setFormData(prev => ({
                                                ...prev,
                                                adet: Math.max(1, prev.adet - 1)
                                            }))
                                        }
                                    >-</button>

                                    <span>{formData.adet}</span>

                                    <button className="px-3 py-1 bg-[#FDC913] rounded font-bold"
                                        onClick={() =>
                                            setFormData(prev => ({
                                                ...prev,
                                                adet: prev.adet + 1
                                            }))
                                        }
                                    >+</button>

                                    <button
                                        disabled={!isValid || loading}
                                        onClick={handleSubmit}
                                        className={`px-6 py-2 rounded-lg font-semibold md:hidden
                                        ${isValid ? "bg-[#FDC913]" : "bg-gray-300 cursor-not-allowed"}`}
                                    >
                                        Sipariş Ver
                                    </button>

                                </div>

                                {/* SUMMARY */}
                                <div className="w-full md:w-[320px] bg-white p-5 rounded-lg shadow border mt-6 md:mt-0">

                                    <div className="text-sm mb-3 space-y-1">

                                        <h3 className="mb-3 font-bold">Sipariş Özeti</h3>

                                        <p>Boyut: {formData.boyut || "-"}</p>

                                        <p>Hamur: {formData.hamur || "-"}</p>

                                        <p>Adet: {formData.adet}</p>

                                    </div>

                                    <OrderSummary formData={formData} />

                                    <button
                                        disabled={!isValid || loading}
                                        onClick={handleSubmit}
                                        className={`mt-4 w-full py-2 rounded-lg font-semibold hidden md:block
                                        ${isValid ? "bg-[#FDC913]" : "bg-gray-300 cursor-not-allowed"}`}
                                    >
                                        {loading ? "Gönderiliyor..." : "Sipariş Ver"}
                                    </button>

                                </div>

                            </div>

                            {error && (
                                <p className="text-red-500 text-sm">{error}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
}

export default OrderPage;