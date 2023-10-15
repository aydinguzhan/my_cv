import { MAIN_PAGENATION } from "../enums/mainPageRouter";

export const goBack = (setPage : any)=>{
    return [
    {
      label: "Geri",
      icon: "pi pi-arrow-left",
      _onClick: () => {
        setPage(MAIN_PAGENATION.ANASAYFA);
      },
    },
  ]}