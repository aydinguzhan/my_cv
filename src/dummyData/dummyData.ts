import { MAIN_PAGENATION } from "../enums/mainPageRouter";

export const navbarList: any = [
  {
    title: "Anasayfa",
    routeAdress: "ANASAYFA",
  },
  {
    title: "Input",
    routeAdress: "INPUT_OLUSTUR",
  },
  {
    title: "Form",
    routeAdress: "FORM_OLUSTUR",
  },
  {
    title: "Table",
    routeAdress: "TABLE_OLUSTUR",
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
    buttonRouterAdress: MAIN_PAGENATION.INPUT_OLUSTUR,
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

export const inputStr = `
  <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="bg-transparent"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-6">
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              className="bg-transparent"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Select
              aria-label="Default select example"
              className="bg-transparent"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="col-md-6">
            <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Check this switch"
              />
              <Form.Check // prettier-ignore
                disabled
                type="switch"
                label="disabled switch"
                id="disabled-custom-switch"
              />
            </Form>
          </div>
        </div>
      </div>
`;
