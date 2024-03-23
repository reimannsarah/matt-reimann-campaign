import { appStrings } from "../../assets/text/appStrings";
import { imageUrls } from "../../assets/imgs/imageUrls";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const Platform = () => {
  return (
    <motion.div variants={fadeIn(0.5)} initial="hidden" animate="visible">
      <img src={imageUrls.mobile_skyline} className="md:hidden" alt="" />
      <div className="p-10 mb-24 md:mt-36 md:mx-36 bg-white md:p-14 md:rounded-lg">
        <h1 className="font-header text-primary text-4xl md:text-6xl mb-5">
          {appStrings.platform_intro.title}
        </h1>
        <div className="text-sm flex flex-col gap-4 text-secondary md:text-lg">
          <strong>
            <p>{appStrings.platform_intro.p1}</p>
          </strong>
          <strong>
            <p>{appStrings.platform_intro.p2}</p>
          </strong>
          <strong>
            <p>{appStrings.platform_intro.p3}</p>
          </strong>
        </div>
        <div>
          {appStrings.platform.map((item, index) => {
            return (
              <div key={index} className="mt-10">
                <h1 className="font-header text-primary text-2xl mb-4 md:text-4xl">
                  {item.title}
                </h1>
                <strong><h1 className="text-secondary mb-5 md:text-lg">{item.subtitle}</h1></strong>
                {item.subGroup1 && (
                  <>
                    <h2 className="font-header text-primary text-lg mb-4 md:text-2xl mt-10">
                      {item.subGroup1.title}
                    </h2>
                    <ul className="flex flex-col gap-4 text-secondary list-disc list-outside pl-5 md:text-lg">
                      <li>{item.subGroup1.point1}</li>
                      <li>{item.subGroup1.point2}</li>
                      <li>{item.subGroup1.point3}</li>
                    </ul>
                  </>
                )}
                {item.subGroup2 && (
                  <>
                    <h2 className="font-header text-primary text-lg mb-4 md:text-2xl mt-10">
                      {item.subGroup2.title}
                    </h2>
                    <ul className="flex flex-col gap-4 text-secondary list-disc llist-outside pl-5 md:text-lg">
                      <li>{item.subGroup2.point1}</li>
                      <li>{item.subGroup2.point2}</li>
                      <li>{item.subGroup2.point3}</li>
                      <li>{item.subGroup2.point4}</li>
                      <li>{item.subGroup2.point5}</li>
                    </ul>
                  </>
                )}
                {!item.subGroup1 && !item.subGroup2 && (
                  <ul className="flex flex-col gap-4 text-secondary list-disc list-outside pl-5 md:text-lg">
                    <li>{item.point1}</li>
                    <li>{item.point2}</li>
                    <li>{item.point3}</li>
                    {item.point4 && <li>{item.point4}</li>}
                    {item.point5 && <li>{item.point5}</li>}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Platform;
