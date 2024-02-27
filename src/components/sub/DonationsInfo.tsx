import { appStrings } from "../../assets/text/appStrings";

const DonationsInfo = () => {

  return (
    <div className="mb-16 p-10 md:p-0 text-center">
      <div className="text-green md:bg-indigo rounded-tl-3xl rounded-br-3xl md:px-56 md:py-20 md:text-white">
        
        <h1 className="font-header text-green md:text-white text-5xl md:text-8xl text-center mb-14">{appStrings.donations.header}</h1>
        <div className="text-white flex flex-col gap-3">
          <h1 className="font-header text-2xl mini:text-3xl md:text-3xl">
            {appStrings.donations.subheader1}
          </h1>
          <p className="mini:text-lg md:text-xl md:mb-10">{appStrings.donations.info1}</p>
          <h1 className="font-header text-2xl mini:text-3xl">
            {appStrings.donations.subheader2}
          </h1>
          <p className="mini:text-lg md:text-xl md:mb-10">{appStrings.donations.info2}</p>
        </div>
        <div className="flex flex-row justify-center gap-5 mt-5 text-sm md:text-lg">
          <button className="bg-green md:border-2 md:border-white text-primary rounded-lg hover:bg-primary hover:text-green hover:border-2 hover:border-primary py-3 px-5">{appStrings.donations.button_copy}</button>

          <a href="https://secure.sos.state.or.us/oard/viewSingleRule.action?ruleVrsnRsn=20184" target="_blank">
            <button className="bg-green md:border-2 md:border-white text-primary shadow-2xl rounded-lg hover:bg-primary hover:text-green hover:border-2 hover:border-primary py-3 px-5">
              {appStrings.donations.learn_more}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DonationsInfo;
