interface IButton {
  label: any;
  onClick: any
}
function Button({ label, onClick }: IButton) {
  return (
    <button className="button tableDynamicButton " onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
