import { CardComponent } from "../component/CardComponenet";
import { ContentsCard } from "../dummyData/dummyData";
export interface IMainPage {
  setPage : any;
}

export function MainPage({setPage}: IMainPage) {
  return (
    <>
      <div className="typewriter girid col-5 col-xl-5 col-md-9 d-none d-sm-block justify-content-center aling-item-center mx-auto my-5">
        <h1 className="">Hey! I'm Javascript developer...</h1>
      </div>
    <div className="row m-3 justify-content-center gap-2 ">
    
      {ContentsCard.map((item: any) => {
        return <CardComponent item={item}/>;
      })}
    </div>
    </>
  );
}
