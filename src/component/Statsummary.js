import React from 'react';

const Statsummary = ({title, figure, detailsiconstyle, detailsicon, details, timer, icon}) => {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-uppercase mb-1">{title}</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">{figure}</div>
              <div className="mt-2 mb-0 text-muted text-xs">
                <span className={detailsiconstyle}><i className={detailsicon}></i> {details}</span>
                <span>{timer}</span>
              </div>
            </div>
            <div className="col-auto">
              <i className={icon}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statsummary;