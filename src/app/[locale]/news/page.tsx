import { useTranslations } from "next-intl";
const News = () => {
    const t = useTranslations("NewsPage")

    return (
        <>
       <div className="relative flex justify-center items-start h-[50vh] md:h-[50vh] overflow-hidden">
  <img className="w-full h-full md:block object-cover object-center" src="/NewsMainPic.png" alt="hero picture" />
  <div className="absolute left-0 h-full w-full bg-slate-900/20 backdrop-blur md:bg-slate-900/20 md:backdrop-blur md:w-2/4">
    <div className="hidden md:block absolute top-0 right-0 h-full w-1/2">
    </div>
  </div>
  <div className="absolute inset-0 flex flex-col justify-center items-start z-10 p-2 sm:p-16 md:p-18">
    <div className="flex items-center">
      <div>
        <p className="text-white text-sm leading-loose md:leading-loose mt-16 flex items-center ml-4"><img className="w-3 mr-3" src="/red.svg" alt="red dot" /> {t("Simi-Tilte")}</p>
      </div>
    </div>
    <div className="mt-4 ml-4">
      <h1 className="text-5xl md:text-5xl md:w-7/12 w-full text-white">{t("title")}</h1>
    </div>
  </div>
  <div className="absolute inset-0 bg-slate-900/20 opacity-10"></div> 
</div>

      <main className="text-center p-10 bg-gray-100">
        <div className="flex justify-center flex-wrap gap-6 mt-10">
        
        


          <div className="bg-white hover:shadow-xl cursor-pointer	transition-all duration-200 transform hover:scale-90  rounded-lg overflow-hidden w-[370px] text-left">
            <img src="/Positive-Impact.jpeg" alt="Positive Impact in Nässjö" className="w-full h-64" />
            <div className="p-5 ">
              <h3 className="text-xl mb-3 font-semibold pb-1">{t("NewsBox1-Title")}</h3>
              <p className="font-thin text-sm pb-5 text-slate-500	">{t("NewsBox1-paragraf")}</p>
              <p className="text-sm text-gray-500 mt-2 pb-5">{t("NewsBox1-Date")}</p>
              <a href="#" className="text-blue-500 font-bold text-custom-black">{t("NewsBox1-ReadMore")}</a>
            </div>
          </div>





          <div className="bg-white hover:shadow-xl cursor-pointer	transition-all duration-200 transform hover:scale-90  rounded-lg overflow-hidden w-[370px] text-left">
            <img src="/parkingtimeChangemaker.jpeg" alt="Prking Time & Changemaker" className="w-full h-64" />
            <div className="p-5 ">
              <h3 className="text-xl mb-3 font-semibold pb-1">{t("NewsBox2-Title")}</h3>
              <p className="font-thin text-sm pb-5 text-slate-500	">{t("NewsBox2-paragraf")}</p>
              <p className="text-sm text-gray-500 mt-2 pb-5">{t("NewsBox2-Date")}</p>
              <a href="#" className="text-blue-500 font-bold text-custom-black">{t("NewsBox2-ReadMore")}</a>
            </div>
          </div>



          <div className="bg-white hover:shadow-xl cursor-pointer	transition-all duration-200 transform hover:scale-90  rounded-lg overflow-hidden w-[370px] text-left">
            <img src="/SKAPA3.png" alt="Prking Time & Changemaker" className="w-full h-64" />
            <div className="p-5 ">
              <h3 className="text-xl mb-3 font-semibold pb-1">{t("NewsBox3-Title")}</h3>
              <p className="font-thin text-sm pb-5 text-slate-500	">{t("NewsBox3-paragraf")}</p>
              <p className="text-sm text-gray-500 mt-2 pb-5">{t("NewsBox3-Date")}</p>
              <a href="#" className="text-blue-500 font-bold text-custom-black">{t("NewsBox3-ReadMore")}</a>
            </div>
          </div>




        </div>
      </main>






      <div className="text-center p-10 pb-24 pt-7 bg-gray-100 ">
      <h3 className="text-sm mb-2 font-semibold">{t("Subscribe-section-semititle")}</h3>
        <h1 className="text-4xl mb-2 font-semibold">{t("dont-miss")}</h1>
        <p className="mb-5 font-thin text-base pb-5 text-slate-500">{t("Subscribe-paragraf")}</p>
        
        

        <input type="email" placeholder="example@example.com" className="p-2 border rounded-l-full w-64" />
        <input type="submit" value={t("Subscribe-button")}  className="bg-black text-white px-5 py-1 relative  rounded-r-full h-[40px] cursor-pointer" />

      
 
      </div>




        </>
    )
};

export default News
