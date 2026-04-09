function SizeSelector({ boyut, setFormData }) {

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            boyut: e.target.value
        }));
    };

    const sizes = ["S", "M", "L"];

    return (
        <div className="space-y-2 text-left">

            <h3 className="font-semibold">Boyut Seç *</h3>

            <div className="flex gap-6">

                {sizes.map((item) => {
                    const selected = boyut === item;

                    return (
                        <label
                            key={item}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            {/* gerçek input (gizli) */}
                            <input
                                type="radio"
                                name="boyut"
                                value={item}
                                checked={selected}
                                onChange={handleChange}
                                className="hidden"
                            />

                            {/* custom radio */}
                            <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center
                                ${selected
                                        ? "border-[#FDC913]"
                                        : "border-gray-400"
                                    }`}
                            >
                                {selected && (
                                    <div className="w-2.5 h-2.5 bg-[#FDC913] rounded-full"></div>
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

export default SizeSelector;