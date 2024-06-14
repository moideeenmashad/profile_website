import "./Main.css";
import DownloadButton from "@/Components/Buttons/DownloadButton";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub, IoMail } from "react-icons/io5";
import userData from "@/Utils/user_data.json";
import userSocialProfile from "@/Utils/user_social_media_link.json";
import Tech_Stack from "@/Components/Tech_Stack/Tech_Stack";

const Introduction = () => {
  const socialMediaIcons = {
    linkedin: <FaLinkedinIn />,
    github: <IoLogoGithub />,
    email: <IoMail />,
  };
  return (
    <div className="introduction_bg" id="home">
      <div className="container sm_container_mg ">
        <div className="intoduction_brief_container">
          <div className="row align-items-center mb-56">
            <div className="col-12 col-md-12 col-lg-6">
              <h1 className="title text-color">{userData && userData.name}</h1>
              <h6 className="category_title text-color">
                {userData && userData.job_role}
              </h6>
              <p className="para text-color">
                {userData && userData.description}
              </p>
              <div className="d-flex">
                <DownloadButton />
                <div className="social_media mx-2">
                  {userSocialProfile &&
                    userSocialProfile
                      .filter(
                        (item) =>
                          item.title === "GitHub" ||
                          item.title === "LinkedIn" ||
                          item.title === "Email"
                      )
                      .map((item, index) => (
                        <a
                          key={index}
                          href={item.LinkTo}
                          className="btn_outline_primary social_media_icon align-items-center me-2"
                          target="_blank"
                          data-toggle="tooltip"
                          title={item.title}
                        >
                          {socialMediaIcons[item.iconId]}
                        </a>
                      ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 d-none d-lg-block">
              {/* <div className="card">
              <div className="card-body"></div>
            </div> */}
            </div>
          </div>
          <div className="tech_stack_container">
            <Tech_Stack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
