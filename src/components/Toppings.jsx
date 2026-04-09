function Toppings({ malzemeler, setFormData }) {

    const toppingList = [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        "Sucuk",
        "Ananas",
        "Jalapeno",
        "Sarımsak",
        "Biber",
        "Kabak"
    ];

    const handleChange = (e) => {
        const value = e.target.value;

        setFormData(prev => {
            let updated = [...prev.malzemeler];

            if (updated.includes(value)) {
                updated = updated.filter(item => item !== value);
            } else {
                if (!updated.includes(value) && updated.length >= 10) {
                    return prev;
                }
                updated.push(value);
            }

            return {
                ...prev,
                malzemeler: updated
            };
        });
    };

    return (
        <div className="space-y-3">

            <h3 className="font-semibold text-lg text-left">Ek Malzemeler</h3>

            <p className="text-gray-400 text-sm text-left">
                En fazla 10 malzeme seçebilirsiniz. 5₺
            </p>

            {malzemeler.length < 4 && (
                <p className="text-red-500 text-sm">
                    En az 4 malzeme seçmelisin
                </p>
            )}

            {malzemeler.length === 10 && (
                <p className="text-orange-500 text-sm">
                    Maksimum seçime ulaştın
                </p>
            )}

            {/* GRID */}
            <div className="grid grid-cols-3 gap-x-6 gap-y-3">

                {toppingList.map((item) => {
                    const checked = malzemeler.includes(item);

                    return (
                        <label
                            key={item}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            {/* gerçek input (gizli) */}
                            <input
                                type="checkbox"
                                value={item}
                                checked={checked}
                                onChange={handleChange}
                                className="hidden"
                            />

                            {/* custom checkbox */}
                            <div
                                className={`w-5 h-5 border rounded flex items-center justify-center
                                ${checked
                                        ? "bg-[#FDC913] border-[#FDC913]"
                                        : "bg-white border-gray-400"
                                    }`}
                            >
                                {checked && (
                                    <span className="text-white text-sm">✓</span>
                                )}
                            </div>

                            <span className="text-sm">{item}</span>
                        </label>
                    );
                })}

            </div>
        </div>
    );
}

export default Toppings;