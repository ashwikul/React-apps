
export default function Button(props) {
  const { btnText = " ", btnHandler = () => { } } = props;
  return (
    <button onClick={btnHandler}>{btnText}</button>
  )
}