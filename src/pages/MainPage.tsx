import { CardComponent } from "../component/CardComponenet";
import { ContentsCard } from "../dummyData/dummyData";
export interface IMainPage {}

export function MainPage(props: IMainPage) {
  return (
    <div className="row w-100 my-5 gap-2 justify-content-center align-items-center">
      {ContentsCard.map((item: any) => {
        return <CardComponent item={item} />;
      })}
    </div>
  );
}
