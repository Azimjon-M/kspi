import React, { useState, useEffect } from 'react';
import APIBFanDasturlari from '../../services/mFanDasturlari';
import APIBFanDasturlariKurs from '../../services/mFanDasturlariKurs';
import APIBFanDasturlariTur from '../../services/mFanDasturlariTur';
import APIBFanDasturlariYonalish from '../../services/mFanDasturlariYonalish';
import TextTranslate from '../TextTranslate';
import { useSelector } from 'react-redux';

const MagFanDAsturlari = () => {
  const [kurslar, setKurslar] = useState([]);
  const [yonalishlar, setYonalishlar] = useState([]);
  const [turlar, setTurlar] = useState([]);
  const [fanDasturlar, setFanDasturlar] = useState([]);
  const [selectedKurs, setSelectedKurs] = useState('');
  const [selectedYonalish, setSelectedYonalish] = useState('');
  const [selectedTur, setSelectedTur] = useState('');
  const isLang = useSelector((state) => state.reducerLang.isLang);
  

  useEffect(() => {
    APIBFanDasturlariKurs.get()
      .then(response => setKurslar(response.data))
      .catch(error => console.error('Error fetching kurslar:', error));
  }, []);


  useEffect(() => {
    if (selectedKurs) {
      APIBFanDasturlariYonalish.get()
        .then(response => {
          const filteredYonalishlar = response.data.filter(item => item.fan_dastur_kurs_id === parseInt(selectedKurs));
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
  }, [selectedKurs]);

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
          <label className="block text-sm font-medium text-gray-700"><TextTranslate id="selectKurs" />:</label>
          <select 
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            value={selectedKurs} 
            onChange={e => setSelectedKurs(e.target.value)}
          >
            <option value=""><TextTranslate id="inSelectKurs" /></option>
            {kurslar.map(kurs => (
              <option key={kurs.id} value={kurs.id}>{kurs[`name_${isLang}`]}</option>
            ))}
          </select>
        </div>

        {/* Yonalish Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700"><TextTranslate id="selectYonalish" />:</label>
          <select 
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" 
            value={selectedYonalish} 
            onChange={e => setSelectedYonalish(e.target.value)} 
            disabled={!selectedKurs}
          >
            <option value=""><TextTranslate id="inSelectYonalish" /></option>
            {yonalishlar.map(yonalish => (
              <option key={yonalish.id} value={yonalish.id}>{yonalish[`name_${isLang}`]}</option>
            ))}
          </select>
        </div>

        {/* Tur Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700"><TextTranslate id="selectTur" />:</label>
          <select 
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" 
            value={selectedTur} 
            onChange={e => setSelectedTur(e.target.value)} 
            disabled={!selectedYonalish}
          >
            <option value=""><TextTranslate id="inSelectTur" /></option>
            {turlar.map(tur => (
              <option key={tur.id} value={tur.id}>{tur[`name_${isLang}`]}</option>
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
              <li key={fan.id} className="bg-gray-100 rounded-md p-3 flex justify-between items-center">
                <a href={fan.fayl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium hover:underline">{fan[`name_${isLang}`]}</a>
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

export default MagFanDAsturlari;
