function DoughSelector({ hamur, setFormData }) {

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev, hamur: e.target.value
        }));
    }
    return (
        <div>
            <h3 className="font-semibold text-lg"> Hamur Seç *</h3>
            <select className="w-full border p-3 rounded-md bg-[#F3F3F3] text-gray-500"
                value={hamur} onChange={handleChange}>
                <option value="">--Hamur Kalınlığı Seç --</option>
                <option value="ince">İnce</option>
                <option value="orta">Orta</option>
                <option value="kalın">Kalın</option>
            </select>
        </div>
    );
}
export default DoughSelector;