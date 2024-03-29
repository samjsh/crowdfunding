const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 25,
    width: "50%",
    backgroundColor: "#CDD7CD",
    borderRadius: 50,
    margin: "auto",
  };
  const fillerStyles = {
    height: "100%",
    // position: "relative",
    width: `${completed}%`,
    backgroundColor: "#92BF92",
    borderRadius: "inherit",
    textAlign: "right",
  };
  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: ".75rem",
    // verticalAlign: ''
  };
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};
export default ProgressBar;
