import { appStrings } from "../../assets/text/appStrings";

const DonationsInfo = () => {

  return (
    <div className="mb-16">
      <div className="bg-white md:rounded-lg p-12">
        <div className="text-primary flex flex-col gap-3">
          <h1 className="font-header text-3xl">
            {appStrings.donations.subheader1}
          </h1>
          <p>{appStrings.donations.info1}</p>
          <h1 className="font-header text-3xl">
            {appStrings.donations.subheader2}
          </h1>
          <p>{appStrings.donations.info2}</p>
        </div>
        <div className="flex flex-row justify-center gap-5 mt-5">
          <button className="bg-primary border-2 border-primary text-white rounded-lg hover:bg-white hover:text-primary hover:border-2 hover:border-primary py-3 px-5">{appStrings.donations.button_copy}</button>

          <a href="https://secure.sos.state.or.us/oard/viewSingleRule.action?ruleVrsnRsn=20184" target="_blank">
            <button className="bg-primary border-2 border-primary text-white rounded-lg hover:bg-white hover:text-primary hover:border-2 hover:border-primary py-3 px-5">
              {appStrings.donations.learn_more}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DonationsInfo;
