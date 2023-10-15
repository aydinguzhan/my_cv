import { useRef } from "react";
import { PageButton } from "../component/PageButton";
import { MAIN_PAGENATION } from "../enums/mainPageRouter";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export interface IFormCreatedPages {
  setPage: any;
}

export function FormCreatedPages({ setPage }: IFormCreatedPages) {
  const buttonArray = [
    {
      label: "Geri",
      icon: "pi pi-arrow-left",
      _onClick: () => {
        setPage(MAIN_PAGENATION.ANASAYFA);
      },
    },
  ];
  const submitButton = [
    {
      label: "Kaydet",
      icon: "pi pi-save",
      _onClick: () => { },
      type: "submit",
    },
    {
      label: "Temnizle",
      icon: "pi pi-eraser",
      _onClick: () => { },
      type: "reset",
    },
  ];

  const formikRef = useRef(null as any);
  return (
    <>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        innerRef={formikRef}
        onSubmit={(values: any) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
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
              <div
                className="my-3 "
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div>
                  <PageButton buttonArray={submitButton} />
                </div>
              </div>
            </div>
            <div className="my-2">
              <PageButton buttonArray={buttonArray} />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Maksimum 15 karakterden oluşmalıdır!")
    .required("*Zorunlu Alan"),
  lastName: Yup.string()
    .max(20, "Maksimum 20 karekterden oluşmalıdır!")
    .required("*Zorunlu Alan"),
  email: Yup.string().email("mail formatında değil!").required("*Zorunlu Alan"),
});
