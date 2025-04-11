import React from "react";

const ContactUs = () => {
  return (
    <section className="w-full h-auto py-6 px-4">
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3032.5210227216608!2d70.925123!3d40.5300768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38baee945e333c8f%3A0xdbb4218e631b6996!2sKokand%20Pedagogical%20Institute!5e0!3m2!1sen!2s!4v1707112878107!5m2!1sen!2s"
        className="border-0 w-full h-[200px] md:h-[280px] md:w-[100%] xl:max-w-7xl xl:h-[480px] mx-auto"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        samesite="None"
      ></iframe>
    </section>
  );
};

export default ContactUs;
