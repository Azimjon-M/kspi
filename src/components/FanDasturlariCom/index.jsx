import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TextTranslate from "../TextTranslate";
import APIBFanDasturlari from '../../services/bFanDasturlari';
import APIBFanDasturlariKurs from '../../services/bFanDasturlariKurs';
import APIBFanDasturlariTur from '../../services/bFanDasturlariTur';
import APIBFanDasturlariYonalish from '../../services/bFanDasturlariYonalish';
import APIBFanDasturlariTalimTur from '../../services/bFanDasturlariTalimTur';

const FanDasturlariCom = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [kurslar, setKurslar] = useState([]);
  const [yonalishlar, setYonalishlar] = useState([]);
  const [turlar, setTurlar] = useState([]);
  const [fanDasturlar, setFanDasturlar] = useState([]);
  const [talimTurlar, setTalimTurlar] = useState([]);

  const [selectedKurs, setSelectedKurs] = useState('');
  const [selectedTalimTur, setSelectedTalimTur] = useState('');
  const [selectedYonalish, setSelectedYonalish] = useState('');
  const [selectedTur, setSelectedTur] = useState('');

  useEffect(() => {
    APIBFanDasturlariKurs.get()
      .then(response => setKurslar(response.data))
      .catch(error => console.error('Error fetching kurslar:', error));
  }, []);

  useEffect(() => {
    if (selectedKurs) {
      APIBFanDasturlariTalimTur.get()
        .then(response => {
          const filteredTalimTurlar = response.data.filter(item => item.fan_dastur_kurs_id === parseInt(selectedKurs));
          setTalimTurlar(filteredTalimTurlar);
          setSelectedTalimTur(''); // Ta'lim turini bo'shatish
          setSelectedYonalish(''); // Yo'nalishni bo'shatish
          setTurlar([]); // Turlarni tozalash
          setSelectedTur(''); // Turni bo'shatish
        })
        .catch(error => console.error('Error fetching talim turlar:', error));
    } else {
      setTalimTurlar([]);
      setSelectedTalimTur('');
      setSelectedYonalish('');
      setYonalishlar([]);
      setTurlar([]);
      setSelectedTur('');
    }
  }, [selectedKurs]);

  useEffect(() => {
    if (selectedTalimTur) {
      APIBFanDasturlariYonalish.get()
        .then(response => {
          const filteredYonalishlar = response.data.filter(item => item.fan_dastur_talim_turi_id === parseInt(selectedTalimTur));
          setYonalishlar(filteredYonalishlar);
          setSelectedYonalish(''); // Yo'nalishni bo'shatish
          setTurlar([]); // Turlarni tozalash
          setSelectedTur(''); // Turni bo'shatish
        })
        .catch(error => console.error('Error fetching yonalishlar:', error));
    } else {
      setYonalishlar([]);
      setSelectedYonalish('');
      setTurlar([]);
      setSelectedTur('');
    }
  }, [selectedTalimTur]);

  useEffect(() => {
    if (selectedYonalish) {
      APIBFanDasturlariTur.get()
        .then(response => {
          const filteredTurlar = response.data.filter(item => item.fan_dastur_yonalish_id === parseInt(selectedYonalish));
          setTurlar(filteredTurlar);
          setSelectedTur(''); // Turni bo'shatish
        })
        .catch(error => console.error('Error fetching turlar:', error));
    } else {
      setTurlar([]);
      setSelectedTur('');
    }
  }, [selectedYonalish]);

  useEffect(() => {
    if (selectedTur) {
      APIBFanDasturlari.get()
        .then(response => setFanDasturlar(response.data.filter(item => item.fan_dastur_turi_id === parseInt(selectedTur))))
        .catch(error => console.error('Error fetching fan dasturlar:', error));
    } else {
      setFanDasturlar([]);
    }
  }, [selectedTur]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <h1 className="text-3xl font-bold text-center mb-8"><TextTranslate id="fanDasturlari" /></h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Kurs Selection */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><TextTranslate id="selectKurs" />:</label>
          <select 
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg active:shadow-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedKurs} 
            onChange={e => setSelectedKurs(e.target.value)}
          >
            <option value=""><TextTranslate id="inSelectKurs" /></option>
            {kurslar.map(kurs => (
              <option key={kurs.id} value={kurs.id}>{kurs[`name_${Lang}`]}</option>
            ))}
          </select>
        </div>

        {/* Talim turi Selection */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><TextTranslate id="selectTalimTur" />:</label>
          <select 
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg active:shadow-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedTalimTur} 
            onChange={e => setSelectedTalimTur(e.target.value)}
            disabled={!selectedKurs}
          >
            <option value=""><TextTranslate id="inSelectTalimTur" /></option>
            {talimTurlar.map(talimTur => (
              <option key={talimTur.id} value={talimTur.id}>{talimTur[`name_${Lang}`]}</option>
            ))}
          </select>
        </div>

        {/* Yonalish Selection */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><TextTranslate id="selectYonalish" />:</label>
          <select 
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg active:shadow-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={selectedYonalish} 
            onChange={e => setSelectedYonalish(e.target.value)} 
            disabled={!selectedTalimTur}
          >
            <option value=""><TextTranslate id="inSelectYonalish" /></option>
            {yonalishlar.map(yonalish => (
              <option key={yonalish.id} value={yonalish.id}>{yonalish[`name_${Lang}`]}</option>
            ))}
          </select>
        </div>

        {/* Tur Selection */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><TextTranslate id="selectTur" />:</label>
          <select 
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg active:shadow-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={selectedTur} 
            onChange={e => setSelectedTur(e.target.value)} 
            disabled={!selectedYonalish}
          >
            <option value=""><TextTranslate id="inSelectTur" /></option>
            {turlar.map(tur => (
              <option key={tur.id} value={tur.id}>{tur[`name_${Lang}`]}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Fan Dastur List */}
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl text-center font-bold mb-4"><TextTranslate id="fanDasturlariRoyxati" /></h2>
        {fanDasturlar.length > 0 ? (
          <ul className="space-y-2">
            {fanDasturlar.map(fan => (
              <li key={fan.id} className="bg-gray-100 rounded-md py-3 px-8 flex justify-between items-center">
                <a href={fan.fayl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium hover:underline">{fan[`name_${Lang}`]}</a>
                <span className="text-gray-500">{fan.sana}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center"><TextTranslate id="malumotTopilmadi" /> :(</p>
        )}
      </div>
    </div>
  );
};

export default FanDasturlariCom;
