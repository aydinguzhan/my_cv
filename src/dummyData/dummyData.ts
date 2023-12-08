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

export const ContentsCard: any = [
  {
    id: Math.random(),
    title: "Github hesabım",
    subTitle:
      "Keylogger , netflix clone , Js algoritma pratiği ve daha fazlası için...",
    buttonTitle: "Git",
    buttonRouterAdress: MAIN_PAGENATION.FORM_OLUSTUR,
    _onClick: () => {
      window.location.href = "https://github.com/aydinguzhan";
    },
  },
  {
    id: Math.random(),
    title: "Linkedin Hesabım",
    subTitle: "Çalışma hayatım, mesleki paylaşımlarım ve dahası için...",
    buttonTitle: "Detaylar",
    buttonRouterAdress: MAIN_PAGENATION.ARA,
    _onClick: () => {
      window.location.href = "https://www.linkedin.com/in/aydnoguz/";
    },
  },
  {
    id: Math.random(),
    title: "Benim ile İletişime Geç",
    subTitle: "Teknoloji süreklilik gerektirir.İletişim için...",
    buttonTitle: "Bana Ulaş!",
    buttonRouterAdress: MAIN_PAGENATION.ILETISIM,
    _onClick: () => {
      window.location.href =
        "mailto:aydinoguzhan2335@gmail.com?subject=Merhaba&body=İletişime geçmek istiyorum.";
    },
  },
];

export const formStr = `
   <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        innerRef={formikRef}
        onSubmit={(values: any) => {
          alert(JSON.stringify(values));
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <div className="field col-6 xxl:col-8 md:col-8 sm:col-4 m-auto p-4 my-3 bg-transparent text-white border border-white">
              <h4 className="title text-white field col">Form Oluştur</h4>
            </div>

            <div className="field col-6 xxl:col-8 md:col-8 sm:col-4 m-auto p-4 bg-transparent text-white border border-white">
              <div className="field col">
                <label htmlFor="firstName" className="col-4">
                  First Name
                </label>
                <Field
                  name="firstName"
                  type="text"
                  className="col-8 text-white bg-transparent border border-round-md"
                />
                <div className="text-end bg-red col-12">
                  <ErrorMessage name="firstName" />
                </div>
              </div>

              <div className="field col my-4 ">
                <label htmlFor="lastName" className="col-4">
                  Last Name
                </label>
                <Field
                  name="lastName"
                  type="text"
                  className="col-8 text-white bg-transparent border border-round-md"
                />
                <div className="text-end bg-red col-12">
                  <ErrorMessage name="lastName" />
                </div>
              </div>
              <div className="field col">
                <label htmlFor="lastName" className="col-4">
                  Email
                </label>
                <Field
                  name="email"
                  type="text"
                  className="col-8 text-white bg-transparent border border-round-md"
                />
                <div className="text-end bg-red col-12">
                  <ErrorMessage name="email" />
                </div>
              </div>
            
            </div>
            
          </Form>
        )}
      </Formik>
`;
