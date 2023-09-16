import { MAIN_PAGENATION } from "../enums/mainPageRouter";

export const navbarList: any = [
  {
    title: "Anasayfa",
    routeAdress: "ANASAYFA",
  },
  {
    title: "Ara",
    routeAdress: "ARA",
  },
  {
    title: "Form Oluştur",
    routeAdress: "FORM_OLUSTUR",
  },
];

export const ContentsCard : any = [
  {
    id : Math.random(),
    title : "Form işlemleri",
    subTitle : "Yeni Form içerikleri oluşturabilirsin.Daha fazlası için...",
    buttonTitle : "Detaylar",
    buttonRouterAdress : MAIN_PAGENATION.FORM_OLUSTUR 
  },
  {
    id : Math.random(),
    title : "Eski Kayıtlara Ulaş",
    subTitle : "Oluşturduğun içeriklerini arayarak bulabilirsin. Daha fazlası için..",
    buttonTitle : "Detaylar",
    buttonRouterAdress : MAIN_PAGENATION.ARA 
  },
  {
    id : Math.random(),
    title : "Bana Destek olabilirsin",
    subTitle : "Teknoloji süreklilik gerektirir.Bana destek olmak ister misin ?",
    buttonTitle : "Destek ol!",
    buttonRouterAdress : ""
  },

]
