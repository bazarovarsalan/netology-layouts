function IconSwitch({icon,onSwitch}) {
  return (
    <div
      className="IconSwitch"
      onClick={onSwitch}>
        <span className="material-icons">
          {icon}
        </span>
    </div>
  );
}

export default IconSwitch;