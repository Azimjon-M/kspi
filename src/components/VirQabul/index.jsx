import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";
import TextTranslate from "../TextTranslate";
import { Formik, useFormik } from "formik";
import APIVirtualQabul from "../../services/virQabulCom";

const VirQabulCom = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    // Initial values
    initialValues: {
      fish: "",
      telefon_nomer: "",
      email: "",
      mavzu: "",
      xabar: "",
    },
    // on submit
    onSubmit: async (values, onSubmitProps) => {
      const data = new FormData();
      for (let key in values) {
        data.append(key, values[key]);
      }
      try {
        await APIVirtualQabul.postVirtualQabul(data);
        onSubmitProps.resetForm();
        setSuccessMessage("Murojaatingiz muvaffaqiyatli yuborildi");
      } catch (error) {
        console.error("Xatolik yuz berdi", error);
        setSuccessMessage("");
      }
    },
  });

  return (
    <div className="px-5 py-3 md:px-10 lg:px-20">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="qabulxona" /> },
          ]}
        />
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-2 lg:py-6 px-4 mx-auto max-w-screen-md">
          <h1 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
            <TextTranslate id="qabulxona" />
          </h1>
          <h2 className="py-2 text-lg font-bold lg:mb-10 text-center text-[#004269] dark:text-gray-400 sm:text-xl">
            <TextTranslate id="qabulxonaTaklif" />
          </h2>
          {successMessage && (
            <div className="mb-4 text-green-600 text-center text-2xl">
              {successMessage}
            </div>
          )}
          <Formik>
            <form onSubmit={formik.handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="fish"
                  className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-300"
                >
                  <TextTranslate id="qabulxonaFish" />
                </label>
                <input
                  type="text"
                  id="fish"
                  name="fish"
                  value={formik.values.fish}
                  onChange={formik.handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-[#004269] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="md:grid grid-cols-2 gap-4">
                <div className="mb-6 md:mb-0">
                  <label
                    htmlFor="telefon_nomer"
                    className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-300"
                  >
                    <TextTranslate id="qabulxonaTelefon" />
                  </label>
                  <input
                    type="text"
                    id="telefon_nomer"
                    name="telefon_nomer"
                    value={formik.values.telefon_nomer}
                    onChange={formik.handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-[#004269] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-300"
                  >
                    <TextTranslate id="qabulxonaEmail" />
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-[#004269] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="mavzu"
                  className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-300"
                >
                  <TextTranslate id="qabulxonaMavzu" />
                </label>
                <input
                  type="text"
                  id="mavzu"
                  name="mavzu"
                  value={formik.values.mavzu}
                  onChange={formik.handleChange}
                  className="block p-3 w-full text-sm text-[#004269] bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="xabar"
                  className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-400"
                >
                  <TextTranslate id="qabulxonaXabar" />
                </label>
                <textarea
                  id="xabar"
                  name="xabar"
                  value={formik.values.xabar}
                  onChange={formik.handleChange}
                  rows="6"
                  className="block p-2.5 w-full text-sm text-[#004269] bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 w-full text-sm font-medium text-center btn xl:justify-between bg-[#004269] text-white rounded-bl-lg sm:w-fit hover:bg-[#004369ce] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <TextTranslate id="qabulxonaYuborish" />
              </button>
            </form>
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default VirQabulCom;
