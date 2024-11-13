import React, { useEffect, useState } from "react";
import APIVirtualQabul from "../../services/korHaqHabBer";
import NotFoundPage from "../../pages/NotFoundPage";

function AdminKorrupsiyaQabulxona() {
  const [datas, setDatas] = useState([]);
  const [isToken, setIsToken] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsToken(!!token);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await APIVirtualQabul.getInstitutQabulxona();
      setDatas(response.data.reverse());
    } catch (error) {
      console.error("Xatolik yuz berdi!", error);
      setError("Ma'lumotlarni yuklashda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await APIVirtualQabul.delInstitutQabulxona(id);
      fetchData();
    } catch (error) {
      console.error("Xatolik yuz berdi!", error);
      setError("O'chirishda xatolik yuz berdi.");
    }
  };

  useEffect(() => {
    if (isToken) {
      fetchData();
    }
  }, [isToken]);

  if (!isToken) {
    return <NotFoundPage />;
  }

  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-2xl font-semibold text-blue-400 text-center py-4">
        Korrupsiya haqidagi murojatlar
      </h1>
      <div className="grid gap-3">
        {datas.length > 0 ? (
          datas.map((data) => (
            <div
              key={data.id}
              className="collapse collapse-arrow bg-gray-50 shadow-md"
            >
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                <h2>{data.fish}</h2>
                <p className="text-base text-slate-500">
                  <span className="text-red-500 font-semibold">Mavzu: </span>
                  {data.mavzu}
                </p>
              </div>
              <div className="collapse-content">
                <p>{data.xabar}</p>
                <div className="mt-5">
                  <p className="text-base inline-block text-slate-500 mr-5">
                    <span className="text-red-500 font-semibold">
                      Telefon:{" "}
                    </span>
                    {data.telefon_nomer}
                  </p>
                  <p className="text-base inline-block text-slate-500 mr-5">
                    <span className="text-red-500 font-semibold">Email: </span>
                    {data.email}
                  </p>
                  <p className="text-base inline-block text-slate-500">
                    <span className="text-red-500 font-semibold">Vaqt: </span>
                    {data.created_at}
                  </p>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="px-3 py-0.5 mt-5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold"
                    onClick={() => handleDelete(data.id)}
                  >
                    O'chirish
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Hech qanday ma'lumot topilmadi.</p>
        )}
      </div>
    </div>
  );
}

export default AdminKorrupsiyaQabulxona;
