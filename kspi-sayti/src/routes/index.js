import React from "react";
import Root from "../root/index";


import Home from "../pages/Home";

    // INSITUT
import InsitutKengashi from "../pages/Insitut/InsitutKengashi";
import InstitutHaqida from '../pages/Insitut/InsitutHaqida';
import InstitutTuzilmasi from '../pages/Insitut/InsitutTuzilmasi';
import Rekvizitlar from '../pages/Insitut/Rekvizitlar';
import VirtualQabulhona from '../pages/Insitut/VirtualQabulxona';

    // FAOLIYAT
import JamoatchilikKengashiFaol from '../pages/Faoliyat/JamoatchilikKengashiFaol';
import MadMarFaolyat from '../pages/Faoliyat/MadMarFaolyat';
import OquvUslubiyFaolyat from '../pages/Faoliyat/OquvUslubiyFaolyat';
import AkademikLitsey from '../pages/Faoliyat/AkademikLitsey';
import IlmiyFaolyat from '../pages/Faoliyat/IlmiyFaolyat';
import YoshlarBnIshlashMvaM from '../pages/Faoliyat/YoshlarBnIshlashMvaM';

// import  from '';


export const routes = [
    {
        element: <Root />,
        path: '/',
        children: [
            {
                element: <Home />,
                path: '/'
            },
            {
                element: <InsitutKengashi />,
                path: '/insitut-kengashi'
            },
            {
                element: <InstitutHaqida />,
                path: '/institut-haqida'
            },
            {
                element: <InstitutTuzilmasi />,
                path: '/institut-tuzilmasi'
            },
            {
                element: <Rekvizitlar />,
                path: '/rekvizitlar'
            },
            {
                element: <VirtualQabulhona />,
                path: '/virtual-qabulhona'
            },
            {
                element: <JamoatchilikKengashiFaol />,
                path: '/jamoatchilik-kengashi-faol'
            },
            {
                element: <MadMarFaolyat />,
                path: '/mad-mar-faolyat'
            },
            {
                element: <OquvUslubiyFaolyat />,
                path: '/oquv-uslubiy-faolyat'
            },
            {
                element: <AkademikLitsey />,
                path: '/akademik-litsey'
            },
            {
                element: <IlmiyFaolyat />,
                path: '/ilmiy-faolyat'
            },
            {
                element: <YoshlarBnIshlashMvaM />,
                path: '/yoshlar-bn-ishlashMvaM'
            },
            // {
            //     element: < />,
            //     path: ''
            // },
        ],
    },
];