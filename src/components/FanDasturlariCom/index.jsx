import React, { useState, useEffect } from 'react';
import APIBFanDasturlari from '../../services/bFanDasturlari';
import APIBFanDasturlariKurs from '../../services/bFanDasturlariKurs';
import APIBFanDasturlariTur from '../../services/bFanDasturlariTur';
import APIBFanDasturlariYonalish from '../../services/bFanDasturlariYonalish';

const FanDasturlariCom = () => {
  const [kurslar, setKurslar] = useState([]);
  const [yonalishlar, setYonalishlar] = useState([]);
  const [turlar, setTurlar] = useState([]);
  const [fanDasturlar, setFanDasturlar] = useState([]);

  const [selectedKurs, setSelectedKurs] = useState('');
  const [selectedYonalish, setSelectedYonalish] = useState('');
  const [selectedTur, setSelectedTur] = useState('');

  // Fetch all Kurslar on initial load
  useEffect(() => {
    APIBFanDasturlariKurs.get()
      .then(response => setKurslar(response.data))
      .catch(error => console.error('Error fetching kurslar:', error));
  }, []);

  // Fetch Yonalishlar when a Kurs is selected
  useEffect(() => {
    if (selectedKurs) {
      APIBFanDasturlariYonalish.get()
        .then(response => {
          const filteredYonalishlar = response.data.filter(item => item.fan_dastur_kurs_id === parseInt(selectedKurs));
          setYonalishlar(filteredYonalishlar);
        })
        .catch(error => {
          console.error('Error fetching yonalishlar:', error);
          setYonalishlar([]);  // Clear out yonalishlar if there's an error
        });
    } else {
      setYonalishlar([]);  // Reset yonalishlar when no kurs is selected
    }
  }, [selectedKurs]);

  // Fetch Turlar when a Yonalish is selected
  useEffect(() => {
    if (selectedYonalish) {
      APIBFanDasturlariTur.get()
        .then(response => setTurlar(response.data.filter(item => item.fan_dastur_yonalish_id === parseInt(selectedYonalish))))
        .catch(error => console.error('Error fetching turlar:', error));
    }
  }, [selectedYonalish]);

  // Fetch Fan Dasturlar when a Tur is selected
  useEffect(() => {
    if (selectedTur) {
      APIBFanDasturlari.get()
        .then(response => setFanDasturlar(response.data.filter(item => item.fan_dastur_turi_id === parseInt(selectedTur))))
        .catch(error => console.error('Error fetching fan dasturlar:', error));
    }
  }, [selectedTur]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Fan Dastur</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Kurs Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Kurs:</label>
          <select 
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            value={selectedKurs} 
            onChange={e => setSelectedKurs(e.target.value)}
          >
            <option value="">Select Kurs</option>
            {kurslar.map(kurs => (
              <option key={kurs.id} value={kurs.id}>{kurs.name_uz}</option>
            ))}
          </select>
        </div>

        {/* Yonalish Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Yonalish:</label>
          <select 
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" 
            value={selectedYonalish} 
            onChange={e => setSelectedYonalish(e.target.value)} 
            disabled={!selectedKurs}
          >
            <option value="">Select Yonalish</option>
            {yonalishlar.map(yonalish => (
              <option key={yonalish.id} value={yonalish.id}>{yonalish.name_uz}</option>
            ))}
          </select>
        </div>

        {/* Tur Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tur:</label>
          <select 
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" 
            value={selectedTur} 
            onChange={e => setSelectedTur(e.target.value)} 
            disabled={!selectedYonalish}
          >
            <option value="">Select Tur</option>
            {turlar.map(tur => (
              <option key={tur.id} value={tur.id}>{tur.name_uz}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Fan Dastur List */}
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold mb-4">Fan Dastur List</h2>
        {fanDasturlar.length > 0 ? (
          <ul className="space-y-2">
            {fanDasturlar.map(fan => (
              <li key={fan.id} className="bg-gray-100 rounded-md p-3 flex justify-between items-center">
                <a href={fan.fayl} className="text-indigo-600 font-medium hover:underline">{fan.name_uz}</a>
                <span className="text-gray-500">{fan.sana}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No fan dasturlar available</p>
        )}
      </div>
    </div>
  );
};

export default FanDasturlariCom;
