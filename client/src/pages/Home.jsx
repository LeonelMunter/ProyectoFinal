import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center transition duration-200 dark:bg-gray-900">
      <span className="text-2xl font-bold dark:text-gray-400">{t("hello")}</span>
      <p className="text-3xl p-5 font-bold dark:text-gray-400">{t("welcome")}</p>
      <span className="text-2xl font-bold dark:text-gray-400">{t("bye")}</span>
    </div>
  );
};

export default Home;
