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
    title : "Github hesabım",
    subTitle : "Keylogger , netflix clone , Js algoritma pratiği ve daha fazlası için...",
    buttonTitle : "Git",
    buttonRouterAdress : MAIN_PAGENATION.FORM_OLUSTUR ,
    _onClick : () =>{
      window.location.href ="https://github.com/aydinguzhan"
    }
  },
  {
    id : Math.random(),
    title : "Linkedin Hesabım",
    subTitle : "Çalışma hayatım, mesleki paylaşımlarım ve dahası için...",
    buttonTitle : "Detaylar",
    buttonRouterAdress : MAIN_PAGENATION.ARA ,
    _onClick : () =>{ window.location.href ="https://www.linkedin.com/in/aydnoguz/"}
  },
  {
    id : Math.random(),
    title : "Benim ile İletişime Geç",
    subTitle : "Teknoloji süreklilik gerektirir.İletişim için...",
    buttonTitle : "Bana Ulaş!",
    buttonRouterAdress : MAIN_PAGENATION.ILETISIM,
    _onClick : ()=>{window.location.href ="mailto:aydinoguzhan2335@gmail.com?subject=Merhaba&body=İletişime geçmek istiyorum."}
    
  },

]



