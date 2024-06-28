function OrderPage() {
  return (
    <div className="bg-slate-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6">Sipariş Sayfası</h2>

        {/* Adres Bilgileri ve Ödeme Seçenekleri */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold">Adres Bilgileri</h3>
            <div className="p-4 border rounded-md mt-2">
              <p className="font-semibold">Ev</p>
              <p>06000 - Ankara/Etimesgut</p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold">Ödeme Seçenekleri</h3>
            <div className="p-4 border rounded-md mt-2">
              <p>
                Banka/Kredi Kartı veya Alışveriş Kredisi ile ödemenizi güvenle
                yapabilirsiniz.
              </p>
            </div>
          </div>
        </div>

        {/* Teslimat Adresi */}
        <div className="mb-6">
          <h3 className="text-lg font-bold">Teslimat Adresi</h3>
          <div className="p-4 border rounded-md mt-2">
            <button className="p-2 border border-dashed rounded-md w-full text-left mb-4">
              + Yeni Adres Ekle
            </button>
            <div className="flex gap-4 mb-4">
              <div className="flex-1 border p-4 rounded-md">
                <p className="font-semibold">Ev</p>
                <p>(530) *** ** 12</p>
                <p>06000 - Ankara/Etimesgut</p>
              </div>
              <div className="flex-1 border p-4 rounded-md">
                <p className="font-semibold">Ayesoft</p>
                <p>(530) *** ** 12</p>
                <p>06000 - Ankara/Etimesgut</p>
                <p className="text-xs text-gray-500">Kurumsal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sipariş Özeti */}
        <div className="p-4 border rounded-md mb-6">
          <h3 className="text-lg font-bold">Sipariş Özeti</h3>
          <div className="flex justify-between mt-4">
            <span>Ürünün Toplamı:</span>
            <span className="font-bold">8.448,99 TL</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Kargo Toplam:</span>
            <span className="font-bold">29,99 TL</span>
          </div>
          <div className="flex justify-between mt-2 text-green-600">
            <span>150 TL ve Üzeri Kargo Bedava (Satıcı Karşılar):</span>
            <span className="font-bold">-29,99 TL</span>
          </div>
          <div className="flex justify-between mt-4 text-lg font-bold">
            <span>Toplam:</span>
            <span>8.448,99 TL</span>
          </div>
        </div>

        {/* Kaydet ve Devam Et Butonları */}
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Kaydet ve Devam Et
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Kaydet ve Devam Et
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
