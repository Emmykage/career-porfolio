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
        title={title}
        closable={{ "aria-label": "Custom Close Button" }}
        open={toggle}
        onOk={null}
        onCancel={() => setToggle(false)}
        footer={null}
      >
        {/* <div className={toggle ? "modal-container show" : "modal-container"}> */}
        <div className="modal modal-container show ">
          <div className="bg-transparent">
            <img src={image} alt={title} className="h-96" />
            <div className="">
              <p className="my-4 text-white">{description}</p>
              <div className=" flex justify-between ">
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
