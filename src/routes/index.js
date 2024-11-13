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
import OtishBallari from "../pages/Abiturient/Bakalavryat/OtishBallari";
import QabulKvota from "../pages/Abiturient/Bakalavryat/QabulKvota";
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
import ProfessorlarFikri from "../pages/Faoliyat/XalqaroFaoliyat/ProfessorlarFikri";
import XalqaroHamkorlar from "../pages/Faoliyat/XalqaroFaoliyat/XalqaroHamkorlarPage";
import XalqaroYangiliklar from "../pages/Faoliyat/XalqaroFaoliyat/XalqaroYangiliklarPage";
import XalqaroElonlar from "../pages/Faoliyat/XalqaroFaoliyat/XalqaroElonlarPage"; 
import YoshlarBnIshlashMvaM from "../pages/Faoliyat/YoshlarBnIshlashMvaM";
import Vakansiyalar from "../pages/Vakansiyalar";
import BarchaElonlar from "../pages/BarchaElonlar";
import ElonBatafsil from "../pages/ElonBatafsil";
import XalqaroHamkorlarBatafsil from "../pages/Faoliyat/XalqaroFaoliyat/XalqaroHamkorlarBatafsil";
import SearchPage from "../pages/Search";
import NormativHuj from "../pages/NormativHuj";
import IchkiIdoraviyHuj from "../pages/IchkiIdoraviyHuj";
import KorrupsyaHaqHabBerish from "../pages/KorrupsyaHaqHabBerish";
import AuthorPage from "../pages/Author";
import OchiqMalumotlar from "../pages/OchiqMalumotlar";

import HujjatORpf from "../pages/hujjatORpf";
import HujjatORQ from "../pages/hujjatORQ";
import HujjatORVMq from "../pages/hujjatORVMq";
import HujjatIIHMh from "../pages/hujjatIIHMh";

import ID from "../components/Id"

// magistratura
const routes = [
    {
        id: ID,
        element: Main,
        path: "/",
    },
    {
        id: ID,
        element: News,
        path: "/yangiliklar",
    },
    {
        id: ID,
        element: New,
        path: "/yangiliklar/:id",
    },
    {
        id: ID,
        element: OchiqMalumotlar,
        path: "/ochiq-malumotlar",
    },
    //-------Interactive xizmatlar---------
    {
        id: ID,
        element: VirQabulxona,
        path: "/qabulxona",
    },
    {
        id: ID,
        element: VideoMaruzalar,
        path: "/videomaruza",
    },
    {
        id: ID,
        element: Qabul,
        path: "/qabul",
    },
    {
        id: ID,
        element: OnlineKuzatish,
        path: "/kuzatish",
    },
    {
        id: ID,
        element: Rekvizitlar,
        path: "/rekvizitlar",
    },
    //-------Institut---------
    {
        id: ID,
        element: InstitutTuzilmasi,
        path: "/institut-tuzilma",
    },
    {
        id: ID,
        element: InstitutKengashi,
        path: "/institut-kengashi",
    },
    {
        id: ID,
        element: InstitutHaqida,
        path: "/institut-haqida",
    },
    {
        id: ID,
        element: HujjatORpf,
        path: "/hujjatlar/o'zbekiston-respublikasi-prezidentining-farmonlar",
    },
    {
        id: ID,
        element: HujjatORQ,
        path: "/hujjatlar/o'zbekiston-respublikasi-qonunlari",
    },
    {
        id: ID,
        element: HujjatORVMq,
        path: "/hujjatlar/o'zbekiston-respublikasi-vazirlar-mahkamasining-qarorlari",
    },
    {
        id: ID,
        element: HujjatIIHMh,
        path: "/hujjatlar/institut-ichki-me'yoriy-huquqiy-hujjatlari",
    },
    //-------Tuzilma---------
    {
        id: ID,
        element: Rektorat,
        path: "/rektorat",
    },
    {
        id: ID,
        element: Markazlar,
        path: "/markazlar",
    },
    {
        id: ID,
        element: Kafedralar,
        path: "/kafedralar",
    },
    {
        id: ID,
        element: Fakultetlar,
        path: "/fakultetlar",
    },
    {
        id: ID,
        element: Bolimlar,
        path: "/bolimlar",
    },
    //-------Talabalar---------
    {
        id: ID,
        element: Bakalavriyat,
        path: "/bakalavriyat",
    },
    {
        id: ID,
        element: DTSvaMalaka,
        path: "/dtsvaMalaka",
    },
    {
        id: ID,
        element: OquvRejalari,
        path: "/oquvRejalari",
    },
    {
        id: ID,
        element: FanDasturlari,
        path: "/fanDasturlari",
    },
    {
        id: ID,
        element: FanKatalogi,
        path: "/fanKatalogi",
    },
    {
        id: ID,
        element: Magistratura,
        path: "/magistratura",
    },
    {
        id: ID,
        element: MagistrDTSvaMalaka,
        path: "/magistrDTSvaMalaka",
    },
    {
        id: ID,
        element: MagistrOquvRejalari,
        path: "/magistrOquvRejalari",
    },
    {
        id: ID,
        element: MagistrFanDasturlari,
        path: "/magistrFanDasturlari",
    },
    {
        id: ID,
        element: MagistrFanKatalogi,
        path: "/magistrFanKatalogi",
    },
    {
        id: ID,
        element: TalabalarTurarJoyi,
        path: "/talabalarTurarJoyi",
    },
    // Navbar Abiturient
    {
        id: ID,
        element: AbiturientBakalavriat,
        path: "/abiturient-bakalavriat",
    },
    {
        id: ID,
        element: OtishBallari,
        path: "/abiturient-bakalavriat/o'tish-ballari",
    },
    {
        id: ID,
        element: QabulKvota,
        path: "/abiturient-bakalavriat/qabul-kvotalari",
    },
    {
        id: ID,
        element: AbiturientMagistratura,
        path: "/abiturient-magistratura",
    },
    {
        id: ID,
        element: AbiturientCallMarkaz,
        path: "/call-markaz",
    },
    {
        id: ID,
        element: AbiturientMeyoriy,
        path: "/abiturient-meyoriy",
    },
    {
        id: ID,
        element: AbiturientXorijiyTalaba,
        path: "/abiturient-xorijiy-talabalar",
    },
    //-------Faoliyat---------
    {
        id: ID,
        element: AkademikLitsey,
        path: "/akademik-litsey",
    },
    {
        id: ID,
        element: IlmiyFaolyat,
        path: "/ilmiy-faoliyat",
    },
    {
        id: ID,
        element: JamoatchilikKengashiFaol,
        path: "/jamoatchilik",
    },
    {
        id: ID,
        element: MadMarFaolyat,
        path: "/madaniy",
    },
    {
        id: ID,
        element: OquvUslubiyFaolyat,
        path: "/oquv-uslubiy",
    },
    {
        id: ID,
        element: ProfessorlarFikri,
        path: "/professorlar-fikri",
    },
    {
        id: ID,
        element: XalqaroYangiliklar,
        path: "/xalqaro-yangiliklar",
    },
    {
        id: ID,
        element: XalqaroElonlar,
        path: "/xalqaro-elonlar",
    },
    {
        id: ID,
        element: XalqaroHamkorlar,
        path: "/xalqaro-hamkor-tashkilotlar",
    },
    {
        id: ID,
        element: XalqaroHamkorlarBatafsil,
        path: "/xalqaro-hamkor-tashkilotlar/:lang/:id",
    },
    {
        id: ID,
        element: YoshlarBnIshlashMvaM,
        path: "/yoshlar-ishlash",
    },
    {
        id: ID,
        element: Vakansiyalar,
        path: "/vakansiyalar",
    },
    {
        id: ID,
        element: NormativHuj,
        path: "/faoliyat/normativ-hujjatlar",
    },
    {
        id: ID,
        element: IchkiIdoraviyHuj,
        path: "/faoliyat/ichki-idoraviy-hujjatlar",
    },
    {
        id: ID,
        element: KorrupsyaHaqHabBerish,
        path: "/faoliyat/korrupsya-haqida-habar-berish",
    },
    // Barcha Elonlar
    {
        id: ID,
        element: BarchaElonlar,
        path: "/barchaElonlar",
    },

    // Elon Batafsil
    {
        id: ID,
        element: ElonBatafsil,
        path: "/elonBatafsil/:id",
    },
    // Search
    {
        id: ID,
        element: SearchPage,
        path: "/qidiruv",
    },
    //-------Authors---------
    {
        id: ID,
        element: AuthorPage,
        path: "/authors",
    },
];

export default routes;
