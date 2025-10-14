const HeaderBox = ({ type, title, user, subtext }: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-bank-gradient"> &nbsp;{user}!</span>
        )}
      </h1>
      {subtext && <p className="header-box-subtext">{subtext}</p>}
    </div>
  );
};

export default HeaderBox;
