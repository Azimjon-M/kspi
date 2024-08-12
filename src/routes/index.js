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
import YoshlarBnIshlashMvaM from "../pages/Faoliyat/YoshlarBnIshlashMvaM";
import Vakansiyalar from "../pages/Vakansiyalar";
import BarchaElonlar from "../pages/BarchaElonlar";
import ElonBatafsil from "../pages/ElonBatafsil";
import SearchPage from "../pages/Search";

const routes = [
    {
        id: 1,
        element: Main,
        path: "/",
    },
    {
        id: 2,
        element: News,
        path: "/yangiliklar",
    },
    {
        id: 3,
        element: New,
        path: "/yangiliklar/:id",
    },

    // Home Interactive xizmatlar
    {
        id: 4,
        element: VirQabulxona,
        path: "/qabulxona",
    },
    {
        id: 5,
        element: VideoMaruzalar,
        path: "/videomaruza",
    },
    {
        id: 6,
        element: Qabul,
        path: "/qabul",
    },
    {
        id: 7,
        element: OnlineKuzatish,
        path: "/kuzatish",
    },
    {
        id: 8,
        element: Rekvizitlar,
        path: "/rekvizitlar",
    },

    // Navbar Institut
    {
        id: 9,
        element: InstitutTuzilmasi,
        path: "/institut-tuzilma",
    },
    {
        id: 10,
        element: InstitutKengashi,
        path: "/institut-kengashi",
    },
    {
        id: 11,
        element: InstitutHaqida,
        path: "/institut-haqida",
    },

    // Navbar Tuzilma
    {
        id: 12,
        element: Rektorat,
        path: "/rektorat",
    },
    {
        id: 13,
        element: Markazlar,
        path: "/markazlar",
    },
    {
        id: 14,
        element: Kafedralar,
        path: "/kafedralar",
    },
    {
        id: 15,
        element: Fakultetlar,
        path: "/fakultetlar",
    },
    {
        id: 16,
        element: Bolimlar,
        path: "/bolimlar",
    },
    //-------Talabalar---------
    {
        id: 17,
        element: Bakalavriyat,
        path: "/bakalavriyat",
    },
    {
        id: 18,
        element: DTSvaMalaka,
        path: "/dtsvaMalaka",
    },
    {
        id: 19,
        element: OquvRejalari,
        path: "/oquvRejalari",
    },
    {
        id: 20,
        element: FanDasturlari,
        path: "/fanDasturlari",
    },
    {
        id: 21,
        element: FanKatalogi,
        path: "/fanKatalogi",
    },
    {
        id: 22,
        element: Magistratura,
        path: "/magistratura",
    },
    {
        id: 23,
        element: MagistrDTSvaMalaka,
        path: "/magistrDTSvaMalaka",
    },
    {
        id: 24,
        element: MagistrOquvRejalari,
        path: "/magistrOquvRejalari",
    },
    {
        id: 25,
        element: MagistrFanDasturlari,
        path: "/magistrFanDasturlari",
    },
    {
        id: 26,
        element: MagistrFanKatalogi,
        path: "/magistrFanKatalogi",
    },
    {
        id: 27,
        element: TalabalarTurarJoyi,
        path: "/talabalarTurarJoyi",
    },

    // Navbar Abiturient
    {
        id: 28,
        element: AbiturientBakalavriat,
        path: "/abiturient-bakalavriat",
    },
    {
        id: 29,
        element: QabulKvota,
        path: "/abiturient-bakalavriat/qabul-kvotalari",
    },
    {
        id: 30,
        element: AbiturientMagistratura,
        path: "/abiturient-magistratura",
    },
    {
        id: 31,
        element: AbiturientCallMarkaz,
        path: "/call-markaz",
    },
    {
        id: 32,
        element: AbiturientMeyoriy,
        path: "/abiturient-meyoriy",
    },
    {
        id: 33,
        element: AbiturientXorijiyTalaba,
        path: "/abiturient-xorijiy-talabalar",
    },

    // Navbar Faoliyat
    {
        id: 34,
        element: AkademikLitsey,
        path: "/akademik-litsey",
    },
    {
        id: 35,
        element: IlmiyFaolyat,
        path: "/ilmiy-faoliyat",
    },
    {
        id: 36,
        element: JamoatchilikKengashiFaol,
        path: "/jamoatchilik",
    },
    {
        id: 37,
        element: MadMarFaolyat,
        path: "/madaniy",
    },
    {
        id: 38,
        element: OquvUslubiyFaolyat,
        path: "/oquv-uslubiy",
    },
    {
        id: 39,
        element: YoshlarBnIshlashMvaM,
        path: "/yoshlar-ishlash",
    },
    {
        id: 40,
        element: Vakansiyalar,
        path: "/vakansiyalar",
    },

    // Barcha Elonlar
    {
        id: 41,
        element: BarchaElonlar,
        path: "/barchaElonlar",
    },

    // Elon Batafsil
    {
        id: 42,
        element: ElonBatafsil,
        path: "/elonBatafsil/:id",
    },
    // Search
    {
        id: 43,
        element: SearchPage,
        path: "/qidiruv",
    },
];

export default routes;
