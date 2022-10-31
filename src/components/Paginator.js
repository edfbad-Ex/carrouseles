const Paginator = ({ dataLength, activeIndex, handlePageChange }) => {
  let dots = [];
  let classes = "";
  for (let index = 0; index < dataLength; index++) {
    classes = activeIndex === index ? "dot active" : "dot";
    dots.push(
      <div
        key={index}
        className={classes}
        onClick={() => handlePageChange(index)}
      ></div>
    );
  }
  return (
    <div className="container-paginator">
        <div className="paginator">
            {dots.map((dot) => dot)}
        </div>
    </div>
  );
};

export default Paginator;