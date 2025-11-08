import { Modal } from "antd";
import React, { useState } from "react";

const Project = ({ props }) => {
  const [toggle, setToggle] = useState(false);
  const handleModal = () => {};
  const { image, title, github, demo, description } = props;
  console.log(props);
  return (
    <article className="portfolio_item">
      <a onClick={() => setToggle(true)}>
        <div className="portfolio_item-image">
          <img src={image} />
        </div>
        <h3>{title}</h3>
        <div className="portfolio_item-cta">
          <a href={github} className="btn" target="_blank">
            Github
          </a>
          <a href={demo} className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </div>
      </a>

      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={toggle}
        // onOk={handleOk}
        onCancel={() => setToggle(false)}
      >
        {/* <div className={toggle ? "modal-container show" : "modal-container"}> */}
        <div className="modal modal-container show">
          <div className="modal-title">
            <button onClick={() => setToggle(false)}>close</button>
            <h2>{title}</h2>
          </div>

          <div className="modal-body">
            <img src={image} alt="" />
            <div>
              <p>{description}</p>
              <div className="btn-div">
                {github && (
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                )}
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </Modal>
    </article>
  );
};

export default Project;
