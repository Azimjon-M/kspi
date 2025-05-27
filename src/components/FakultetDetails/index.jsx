import React from "react";
import Breadcrumb from "../Breadcrumb";
import TextTranslate from "../TextTranslate";
import Card from "../Card";

const FakultetDetails = ({ fakultet }) => {
  console.log(fakultet);

  return (
    <div className="mb-10">
      <div className="bg-[#EEF3F8]">
        <Breadcrumb
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: "Fakultetlar" },
            { text: `${fakultet?.name_uz}` },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-[24px] text-center font-bold my-8 text-[#5f4fa1]">
          {fakultet?.name_uz}
        </h1>

        {/* Data */}
        <div className="md:flex justify-center lg:justify-between mb-8">
          <Card
            lavozim="Fakultet dekani"
            rasm="/images/dekan.jpg"
            fish="Aliyev Bobur Anvarovich"
            unvon="Kimyo fanlari doktori-professor"
            qabul="Qabul kunlari Dushanba - Juma, 15:00 - 17:00"
            tel="+998901234567"
            email="bobur@example.com"
            telegram="https://t.me/bobur"
            instagram="https://instagram.com/bobur"
            facebook="https://facebook.com/bobur"
            youtube="https://youtube.com/bobur"
          />
          <Card
            lavozim="Dekan o'rinbosari"
            rasm="/images/dekan.jpg"
            fish="Aliyev Bobur Anvarovich"
            unvon="Kimyo fanlari doktori-professor"
            qabul="Qabul kunlari Dushanba - Juma, 15:00 - 17:00"
            tel="+998901234567"
            email="bobur@example.com"
            telegram="https://t.me/bobur"
            instagram="https://instagram.com/bobur"
            facebook="https://facebook.com/bobur"
            youtube="https://youtube.com/bobur"
          />
          <Card
            lavozim="Dekan o'rinbosari"
            rasm="/images/dekan.jpg"
            fish="Aliyev Bobur Anvarovich"
            unvon="Kimyo fanlari doktori-professor"
            qabul="Qabul kunlari Dushanba - Juma, 15:00 - 17:00"
            tel="+998901234567"
            email="bobur@example.com"
            telegram="https://t.me/bobur"
            instagram="https://instagram.com/bobur"
            facebook="https://facebook.com/bobur"
            youtube="https://youtube.com/bobur"
          />
        </div>
        <div className="border border-[#cecece] p-4 shadow-md">
          <h2 className="text-center font-poppins font-semibold text-lg mb-6">Fakultet haqida</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto in,
            corrupti placeat asperiores maiores distinctio nam consequuntur
            deleniti id doloribus voluptates libero. Consequuntur, asperiores.
            Neque veniam asperiores corporis recusandae voluptates! Nostrum
            quaerat est nulla doloribus voluptatem excepturi alias aut
            reprehenderit doloremque? Corporis exercitationem aut, debitis natus
            illo ut repudiandae, recusandae tempore itaque, incidunt facere et
            voluptatum totam dolor! Possimus, ex. Fuga adipisci voluptas porro
            delectus hic ipsum facere maiores minima dolores at quas, aspernatur
            dicta nobis, unde enim voluptate eligendi placeat nulla magnam
            optio? Mollitia rerum voluptatum ipsam nobis dicta! Iusto reiciendis
            eum id, dolorem obcaecati nesciunt architecto cumque deleniti
            cupiditate iure! Delectus, itaque. Atque deserunt iste sequi ratione
            facere quae molestiae eaque ipsa quam odio est ipsam, deleniti
            distinctio. Similique recusandae qui suscipit quo non mollitia rem,
            laudantium odio eaque enim ut quidem perferendis eos eveniet
            delectus maiores accusantium hic cumque vitae dolor eum? Quod dolore
            est doloribus sed? Ipsa consectetur cumque accusamus tempora eum
            suscipit deleniti ipsum! Assumenda non consectetur delectus unde
            laudantium. Recusandae explicabo facilis, minus reprehenderit,
            obcaecati ab, vel saepe possimus a officiis voluptatibus animi
            quibusdam. Quaerat sapiente quod ut optio impedit delectus cumque
            eum vero debitis sit illum, vitae vel laboriosam provident
            laudantium eveniet, voluptatem asperiores. Perspiciatis id doloribus
            tempore aliquid, voluptatum nobis reiciendis quis? Officiis sint
            minus praesentium, eos neque expedita. Quo aliquam delectus quae
            nemo deserunt. Voluptate voluptatum illo culpa consequatur, commodi
            qui nemo odio maiores nam repellendus quaerat aut cupiditate nihil
            fuga.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FakultetDetails;
