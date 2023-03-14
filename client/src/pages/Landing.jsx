import { useTranslation } from "react-i18next";
import imagePresentation from "../assets/pictures/imgEngineer.png";
import { Link } from "react-router-dom";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-row justify-center items-center transition duration-200 dark:bg-gray-900">
      <div className="flex justify-end w-1/2">
        <div className="w-3/4">
          <p className="text-lg p-5 font-bold dark:text-gray-400 text-justify">{t("project-description-1")}</p>
          <p className="text-lg p-5 font-bold dark:text-gray-400 text-justify">{t("project-description-2")}</p>
        </div>
      </div>
      <div className="flex flex-col w-1/2 justify-center items-center">
        <h2 className="text-3xl p-5 font-bold dark:text-gray-300 uppercase">{t("project-name")}</h2>
        <img src={imagePresentation} alt="engineers and architects" className="w-3/4" />
        <Link to="/home" className="text-xl font-bold bg-indigo-400 rounded-full px-3 py-1 dark:text-gray-300">
          {t("see-more")}
        </Link>
      </div>
    </div>
  );
};

export default Landing;
