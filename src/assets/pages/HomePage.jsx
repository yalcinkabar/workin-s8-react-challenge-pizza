import Footer from "../../components/Footer";

function HomePage({ setPage }) {
    return (
        <div>

            
            <div
                className="text-white min-h-screen bg-cover bg-center flex flex-col"
                style={{
                    backgroundImage: "url('./images/iteration-1-images/home-banner.png')"
                }}
            >
                {/* HEADER */}
                <div className="text-center py-5 font-bold text-xl">
                    Teknolojik Yemekler
                </div>

                {/* HERO CONTENT */}
                <div className="flex flex-col items-center text-center flex-1 justify-start pt-10 md:pt-10">
                    <p className="text-yellow-400 italic text-sm">
                        fırsatı kaçırma
                    </p>

                    <h1 className="text-5xl font-light mt-2 leading-tight">
                        KOD ACIKTIRIR <br /> PIZZA, DOYURUR
                    </h1>

                    <button
                        onClick={() => setPage("order")}
                        className="mt-6 bg-[#FDC913] text-black px-6 py-3 rounded-full font-bold"
                    >
                        ACIKTIM
                    </button>
                </div>
            </div>

            {/*  ALT CONTENT */}
            <div className="bg-[#FAF7F2]">

                {/*  KATEGORİ BAR */}
                <div className="bg-white py-4 flex justify-center gap-8 shadow-md flex-wrap">

                    <div className="flex items-center gap-2">
                        <img src="/images/iteration-2-images/icons/1.svg" className="w-6" />
                        <span>YENİ! Kore</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src="/images/iteration-2-images/icons/2.svg" className="w-6" />
                        <span>Pizza</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src="/images/iteration-2-images/icons/3.svg" className="w-6" />
                        <span>Burger</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src="/images/iteration-2-images/icons/4.svg" className="w-6" />
                        <span>Kızartmalar</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src="/images/iteration-2-images/icons/5.svg" className="w-6" />
                        <span>Fast Food</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src="/images/iteration-2-images/icons/6.svg" className="w-6" />
                        <span>Gazlı İçecek</span>
                    </div>

                </div>

                {/*  KART SECTION */}
                <div className="max-w-6xl mx-auto px-4 py-10">
                    <div className="grid md:grid-cols-3 gap-6">

                        {/*  SOL KART */}
                        <div
                            className="relative rounded-xl md:col-span-2 text-white flex items-center overflow-hidden min-h-[300px]
                            bg-[url('/images/iteration-2-images/cta/kart-1.png')] bg-cover bg-center bg-no-repeat"
                        >
                            <div className="relative z-10 p-8 md:p-12 max-w-xl">
                                <h2 className="text-4xl md:text-5xl font-light leading-tight">
                                    Özel Lezzetus
                                </h2>

                                <p className="mt-3 text-lg md:text-xl">
                                    Position Absolute Acı Burger
                                </p>

                                <button onClick={() => setPage("order")}
                                    className="mt-6 bg-white text-[#CE2829] px-6 py-2 rounded-full text-sm font-semibold">
                                    SİPARİŞ VER
                                </button>
                            </div>
                        </div>

                        {/*  SAĞ TARAF */}
                        <div className="flex flex-col gap-6">

                            {/* SİYAH KART */}
                            <div className="bg-[#292929] text-white rounded-xl px-6 py-5 flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Hackathlon Burger Menü
                                    </h3>

                                    <button onClick={() => setPage("order")}
                                        className="mt-3 bg-white text-[#CE2829] px-5 py-2 rounded-full text-sm">
                                        SİPARİŞ VER
                                    </button>
                                </div>

                                <img
                                    src="/images/iteration-2-images/cta/kart-2.png"
                                    className="w-40 md:w-44"
                                />
                            </div>

                            {/*  AÇIK KART */}
                            <div className="relative rounded-xl overflow-hidden min-h-[160px] flex items-center p-6">

                                <img
                                    src="/images/iteration-2-images/cta/kart-3.png"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-black/30"></div>

                                <div className="relative z-10 text-white">
                                    <h3 className="font-bold text-xl">
                                        <span className="text-[#CE2829]">Çoooook</span> hızlı <br />
                                        npm gibi kurye
                                    </h3>

                                    <button onClick={() => setPage("order")}
                                        className="mt-3 bg-white text-[#CE2829] px-5 py-2 rounded-full text-sm">
                                        SİPARİŞ VER
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* 🍕 ÜRÜN BAŞLIK */}
                <div className="text-2xl text-center mt-10">
                    <p className="text-red-500 italic">
                        en çok paketlenen menüler
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        Acıktıran Kodlara Doyuran Lezzetler
                    </h2>
                </div>

                <div className="flex justify-center gap-4 mt-6 flex-wrap">

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <span>🍜</span>
                        <span>Ramen</span>
                    </div>

                    <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full">
                        <span>🍕</span>
                        <span>Pizza</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <span>🍔</span>
                        <span>Burger</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <span>🍟</span>
                        <span>French fries</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <span>🍔</span>
                        <span>Fast food</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <span>🥤</span>
                        <span>Soft drinks</span>
                    </div>

                </div>

                {/* 🍕 ÜRÜN KARTLARI */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-10 px-4 pb-10">

                    <div className="bg-white rounded-xl p-4 shadow">
                        <img src="/images/iteration-2-images/pictures/food-1.png" className="w-full rounded-lg" />
                        <h3 className="mt-3 font-bold">Terminal Pizza</h3>
                        <div className="flex justify-between mt-2 text-sm text-gray-500">
                            <span>4.9</span>
                            <span>(200)</span>
                        </div>
                        <div className="mt-2 font-bold">60₺</div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow">
                        <img src="/images/iteration-2-images/pictures/food-2.png" className="w-full rounded-lg" />
                        <h3 className="mt-3 font-bold">Position Absolute Acı Pizza</h3>
                        <div className="flex justify-between mt-2 text-sm text-gray-500">
                            <span>4.8</span>
                            <span>(150)</span>
                        </div>
                        <div className="mt-2 font-bold">80₺</div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow">
                        <img src="/images/iteration-2-images/pictures/food-3.png" className="w-full rounded-lg" />
                        <h3 className="mt-3 font-bold">useEffect Tavuklu Burger</h3>
                        <div className="flex justify-between mt-2 text-sm text-gray-500">
                            <span>4.7</span>
                            <span>(180)</span>
                        </div>
                        <div className="mt-2 font-bold">70₺</div>
                    </div>

                </div>

                <Footer />

            </div>

        </div>
    );
}

export default HomePage;