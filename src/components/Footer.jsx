function Footer() {
    return (
        <div className="bg-[#1C1C1C] text-white px-6 py-12">

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

                {/* SOL */}
                <div>
                    <img
                        src="./images/iteration-2-images/footer/logo-footer.svg"
                        className="mb-6 w-40"
                    />

                    <div className="space-y-4 text-sm text-gray-300">

                        <div className="flex items-center gap-3">
                            <img src="./images/iteration-2-images/footer/icons/icon-1.png" className="w-5" />
                            <p>341 Londonderry Road, İstanbul Türkiye</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <img src="./images/iteration-2-images/footer/icons/icon-2.png" className="w-5" />
                            <p>aciktim@teknolojikyemekler.com</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <img src="./images/iteration-2-images/footer/icons/icon-3.png" className="w-5" />
                            <p>+90 216 123 45 67</p>
                        </div>

                    </div>
                </div>

                {/* ORTA */}
                <div>
                    <h3 className="font-bold mb-4">Hot Menu</h3>

                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Terminal Pizza</li>
                        <li>5 Kişilik Hackathlon Pizza</li>
                        <li>useEffect Tavuklu Pizza</li>
                        <li>Beyaz Console Frosty</li>
                        <li>Tester Geçti Mutlu Burger</li>
                        <li>Position Absolute Acı Burger</li>
                    </ul>
                </div>

                {/* SAĞ */}
                <div>
                    <h3 className="font-bold mb-4">Instagram</h3>

                    <div className="grid grid-cols-3 gap-2">
                        <img src="/images/iteration-2-images/footer/insta/li-0.png" />
                        <img src="/images/iteration-2-images/footer/insta/li-1.png" />
                        <img src="/images/iteration-2-images/footer/insta/li-2.png" />
                        <img src="/images/iteration-2-images/footer/insta/li-3.png" />
                        <img src="/images/iteration-2-images/footer/insta/li-4.png" />
                        <img src="/images/iteration-2-images/footer/insta/li-5.png" />
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © 2023 Teknolojik Yemekler.
            </div>

        </div>
    );
}

export default Footer;