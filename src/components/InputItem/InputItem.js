import { InputItemContainer, Label, Input } from "./InputItem.styles";

const InputItem = ({
  label,
  type,
  isRequired,
  value,
  onChange,
  ...restProps
}) => {
  return (
    <InputItemContainer>
      <Label>{label + (isRequired ? "*" : "")}</Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        required={isRequired}
        {...restProps}
      />
    </InputItemContainer>
  );
};

export default InputItem;
