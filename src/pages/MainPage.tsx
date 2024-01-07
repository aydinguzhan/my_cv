import { CardComponent } from "../component/CardComponenet";
import { ContentsCard } from "../dummyData/dummyData";
export interface IMainPage {
  setPage: any;
}

export function MainPage({ setPage }: IMainPage) {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="typewriter girid col-6 col-xl-6 col-md-10 d-none d-sm-block justify-content-center aling-item-center mx-auto my-5"
      >
        <div>
          <h1
            style={{
              textAlign: "center",

            }}
          >
            Hey! I'm Javascript developer...
          </h1>
        </div>
      </div>
      <div className="row m-3 justify-content-center gap-2 ">
        {ContentsCard.map((item: any) => {
          return <CardComponent item={item} />;
        })}
      </div>
    </>
  );
}
