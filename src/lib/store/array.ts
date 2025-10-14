import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCameraAlt,
  faCameraRetro,
  faEnvelope,
  faGlobe,
  faObjectGroup,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const mySkill = [
  {
    logo: faGlobe,
    judul: "Web Development",
    deskripsi:
      "Butuh website buat jualan online, atau website untuk admin kantor? Saya dapat membuatnya dengan menggunakan HTML, CSS dan juga Javascript. Dijamin responsif bisa dibuka di mana saja.",
  },
  {
    logo: faObjectGroup,
    judul: "Desain Grafis",
    deskripsi:
      "Desain yang menarik adalah kunci pertama untuk menarik perhatian. Saya dapat membantu menciptakan desain visual profesional untuk brand, media sosial, hingga kebutuhan digital marketing — memadukan estetika dengan pesan yang kuat agar identitas Anda terlihat menonjol.",
  },
  {
    logo: faCameraRetro,
    judul: "Fotografi",
    deskripsi:
      "Saya menyediakan layanan fotografi dengan sentuhan artistik yang memadukan teknik pencahayaan dan komposisi terbaik. Cocok untuk dokumentasi event, produk, maupun kebutuhan konten digital yang ingin tampil lebih hidup dan berkelas.",
  },
];

export const profilItems = [
  {
    icon: faUser,
    tulisan: "Aflah Mahdi Yazdi",
  },
  {
    icon: faCameraAlt,
    tulisan: "22 Desember 2005",
  },
  {
    icon: faEnvelope,
    tulisan: "Diyaz.hal22@gmail.com",
  },
  {
    icon: faPhone,
    tulisan: "+62-823-3304-4295",
  },
];

export const navItems = [
  { id: "section_1", label: "Home"},
  { id: "section_2", label: "About Me"},
  { id: "section_3", label: "My Skills"},
  { id: "section_4", label: "Certificate"},
  { id: "section_5", label: "Portofolio"},
];

export const socialMedia = [
  { href : "https://www.instagram.com/mas_yazz22/", aria: "Instagram", icon: faInstagram},
  { href : "https://www.linkedin.com/in/aflah-mahdi-yazdi-a69414355/", aria: "Linkedin", icon:faLinkedin },
  { href : "https://github.com/MasYaaz", aria: "Github", icon : faGithub },
]

