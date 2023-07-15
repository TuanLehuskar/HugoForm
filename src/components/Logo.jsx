export default function Logo({ style, icon, title, width = "100px" }) {
  return (
    <div className={`row ${style}`}>
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-auto">
            <img src={icon} className="img-fluild" width={width} />
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-auto">
            <h5 className="text-yellow">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
