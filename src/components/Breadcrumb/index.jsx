import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ steps }) => {
  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          {steps.map((step, index) => (
            <li key={index}>
              {step.link ? (
                <Link to={step.link}>{step.text}</Link>
              ) : (
                <span className="inline-flex gap-2 items-center">
                  {step.text}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
