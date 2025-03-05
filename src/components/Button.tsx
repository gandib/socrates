const Button = ({
  icon,
  title,
  style,
}: {
  icon?: string;
  title: string;
  style?: string;
}) => {
  return (
    <button
      className={`flex text-white h-10 justify-center rounded-[56px] items-center py-[17px] px-6 ${style}`}
    >
      {icon && <img className="h-5" src={icon} alt="" />}
      <span className="text-sm font-semibold text-center">{title}</span>
    </button>
  );
};

export default Button;
