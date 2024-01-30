interface ButtonProps {
  copy: string,
  onClick: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.onClick} className="border-2 border-black py-3 px-5 bg-white rounded-lg">{props.copy}</button>
    </div>
  )
}

export default Button