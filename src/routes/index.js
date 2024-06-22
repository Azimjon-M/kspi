import React from "react";
import Root from "../root/index";

import Main from "../pages/Main";
import News from "../pages/News";
import New from "../pages/New";
import VirQabulxona from "../pages/VirQabulxona";
import VideoMaruzalar from "../pages/VideoMaruzalar";
import Qabul from "../pages/Qabul";
import OnlineKuzatish from "../pages/OnlineKuzatish";
import Rekvizitlar from "../pages/Rekvizitlar";
import InstitutTuzilmasi from "../pages/InstitutTuzilmasi";
import InstitutKengashi from "../pages/InstitutKengashi";
import InstitutHaqida from "../pages/InstitutHaqida";
import Rektorat from "../pages/Tuzilma/Rektorat";
import Kafedralar from "../pages/Tuzilma/Kafedralar";
import Markazlar from "../pages/Tuzilma/Markazlar";
import Fakultetlar from "../pages/Tuzilma/Fakultetlar";
import Bolimlar from "../pages/Tuzilma/Bolimlar";
import Bakalavriyat from "../pages/Talabalar/Bakalavriyat";
import DTSvaMalaka from "../pages/Talabalar/Bakalavriyat/DTSvaMalaka";
import OquvRejalari from "../pages/Talabalar/Bakalavriyat/OquvRejalari";
import FanDasturlari from "../pages/Talabalar/Bakalavriyat/FanDasturlari";
import FanKatalogi from "../pages/Talabalar/Bakalavriyat/FanKatalogi";
import AbiturientBakalavriat from "../pages/Abiturient/Bakalavryat";
import AbiturientMagistratura from "../pages/Abiturient/Magistratura";
import AbiturientCallMarkaz from "../pages/Abiturient/CallMarkaz";
import AbiturientXorijiyTalaba from "../pages/Abiturient/HorijiyTalabalarQabul";
import AbiturientMeyoriy from "../pages/Abiturient/MeyyoriyHuquqiyHuj";
import Magistratura from "../pages/Talabalar/Magistratura";
import MagistrDTSvaMalaka from "../pages/Talabalar/Magistratura/MagistrDTSvaMalaka";
import MagistrOquvRejalari from "../pages/Talabalar/Magistratura/MagistrOquvRejalari";
import MagistrFanDasturlari from "../pages/Talabalar/Magistratura/MagistrFanDasturlari";
import MagistrFanKatalogi from "../pages/Talabalar/Magistratura/MagistrFanKatalogi";
import TalabalarTurarJoyi from "../pages/Talabalar/TalabalarTurarJoyi";
import AkademikLitsey from "../pages/Faoliyat/AkademikLitsey";
import IlmiyFaolyat from "../pages/Faoliyat/IlmiyFaolyat";
import JamoatchilikKengashiFaol from "../pages/Faoliyat/JamoatchilikKengashiFaol";
import MadMarFaolyat from "../pages/Faoliyat/MadMarFaolyat";
import OquvUslubiyFaolyat from "../pages/Faoliyat/OquvUslubiyFaolyat";
import YoshlarBnIshlashMvaM from "../pages/Faoliyat/YoshlarBnIshlashMvaM";
import Vakansiyalar from "../pages/Vakansiyalar";
import BarchaElonlar from "../pages/BarchaElonlar";
import ElonBatafsil from "../pages/ElonBatafsil";

export const routes = [
  {
    element: <Root />,
    path: "/",
    children: [
      {
        element: <Main />,
        path: "/",
      },
      {
        element: <News />,
        path: "/yangiliklar",
      },
      {
        element: <New />,
        path: "/yangiliklar/:id",
      },

      // Home Interactive xizmatlar
      {
        element: <VirQabulxona />,
        path: "/qabulxona",
      },
      {
        element: <VideoMaruzalar />,
        path: "/videomaruza",
      },
      {
        element: <Qabul />,
        path: "/qabul",
      },
      {
        element: <OnlineKuzatish />,
        path: "/kuzatish",
      },
      {
        element: <Rekvizitlar />,
        path: "/rekvizitlar",
      },

      // Navbar Institut
      {
        element: <InstitutTuzilmasi />,
        path: "/institut-tuzilma",
      },
      {
        element: <InstitutKengashi />,
        path: "/institut-kengashi",
      },
      {
        element: <InstitutHaqida />,
        path: "/institut-haqida",
      },

      // Navbar Tuzilma
      {
        element: <Rektorat />,
        path: "/rektorat",
      },
      {
        element: <Markazlar />,
        path: "/markazlar",
      },
      {
        element: <Kafedralar />,
        path: "/kafedralar",
      },
      {
        element: <Fakultetlar />,
        path: "/fakultetlar",
      },
      {
        element: <Bolimlar />,
        path: "/bolimlar",
      },
      //-------Talabalar---------
      {
        element: <Bakalavriyat />,
        path: "/bakalavriyat",
      },
      {
        element: <DTSvaMalaka />,
        path: "/dtsvaMalaka",
      },
      {
        element: <OquvRejalari />,
        path: "/oquvRejalari",
      },
      {
        element: <FanDasturlari />,
        path: "/fanDasturlari",
      },
      {
        element: <FanKatalogi />,
        path: "/fanKatalogi",
      },
      {
        element: <Magistratura />,
        path: "/magistratura",
      },
      {
        element: <MagistrDTSvaMalaka />,
        path: "/magistrDTSvaMalaka",
      },
      {
        element: <MagistrOquvRejalari />,
        path: "/magistrOquvRejalari",
      },
      {
        element: <MagistrFanDasturlari />,
        path: "/magistrFanDasturlari",
      },
      {
        element: <MagistrFanKatalogi />,
        path: "/magistrFanKatalogi",
      },
      {
        element: <TalabalarTurarJoyi />,
        path: "/talabalarTurarJoyi",
      },

      // Navbar Abiturient
      {
        element: <AbiturientBakalavriat />,
        path: "/abiturient-bakalavriat",
      },
      {
        element: <AbiturientMagistratura />,
        path: "/abiturient-magistratura",
      },
      {
        element: <AbiturientCallMarkaz />,
        path: "/call-markaz",
      },
      {
        element: <AbiturientMeyoriy />,
        path: "/abiturient-meyoriy",
      },
      {
        element: <AbiturientXorijiyTalaba />,
        path: "/abiturient-xorijiy-talabalar",
      },

      // Navbar Faoliyat
      {
        element: <AkademikLitsey />,
        path: "/akademik-litsey",
      },
      {
        element: <IlmiyFaolyat />,
        path: "/ilmiy-faoliyat",
      },
      {
        element: <JamoatchilikKengashiFaol />,
        path: "/jamoatchilik",
      },
      {
        element: <MadMarFaolyat />,
        path: "/madaniy",
      },
      {
        element: <OquvUslubiyFaolyat />,
        path: "/oquv-uslubiy",
      },
      {
        element: <YoshlarBnIshlashMvaM />,
        path: "/yoshlar-ishlash",
      },
      {
        element: <Vakansiyalar />,
        path: "/vakansiyalar",
      },

      // Barcha Elonlar
      {
        element: <BarchaElonlar />,
        path: "/barchaElonlar",
      },

      // Elon Batafsil
      {
        element: <ElonBatafsil />,
        path: "/elonBatafsil/:id",
      },
    ],
  },
];
