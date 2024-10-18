import React, { useEffect, useState } from "react";
import APIVirtualQabul from "../../services/virQabulCom";

function AdminQabulxona() {
  const [datas, setDatas] = useState([]);

  const fechtData = async () => {
    try {
      const response = await APIVirtualQabul.getInstitutQabulxona();
      setDatas(response.data.reverse());
    } catch (error) {
      console.error("Xatolik yuz berdi!", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await APIVirtualQabul.delInstitutQabulxona(id);
      fechtData();
    } catch (error) {
      console.error("Xatolik yuz berdi!", error);
    }
  };

  useEffect(() => {
    fechtData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-2xl font-semibold text-blue-400 text-center py-4">
        Vertual qabulxonaga kelgan murojatlar
      </h1>
      <div className="grid gap-3">
        {datas &&
          datas.map((data) => {
            return (
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
                    <p className="text-base inline-block text-slate-500">
                      <span className="text-red-500 font-semibold">
                        Email:{" "}
                      </span>
                      {data.email}
                      {/* Palonchini uylash */}
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
            );
          })}
      </div>
    </div>
  );
}

export default AdminQabulxona;
