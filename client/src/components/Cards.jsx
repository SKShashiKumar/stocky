
export default function Cards({ item }) {
  const a ={
    'width': '400px',
    'minHeight': '200px'
  }
  return (
      <div className="col-sm-4" style={a}>
        <div className="container m-2 bg-grey">
          <div className="row">
            <div className="col-sm-6 p-2">
              <h6>{item.heads}</h6>
            </div>
            <div className="col-sm-6 p-2">
              <div className="row">
                <div className="col-sm-12 p-3">
                  <img
                    src={item.src}
                    alt={item.alt}
                    align="right"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 p-2 text-center">
              <h2>{item.vals}</h2>
            </div>
          </div>
        </div>
      </div>
  );
}
