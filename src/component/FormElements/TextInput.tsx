


export interface ITextInputProps {
    placeHolder : string,
    setValue : any
}

export function TextInput({placeHolder, setValue}: ITextInputProps) {

  return (
    <div className="card flex justify-content-center">
      <input placeholder={placeHolder} type="text" onChange={(e: any) => setValue(e.target.value)} />
    </div>
  );
}
