import { appStrings } from "../../assets/text/appStrings";
import { imageUrls } from "../../assets/imgs/imageUrls";

const Platform = () => {
  return (
    <div>
      <img src={imageUrls.mobile_skyline} className="md:hidden" alt="" />
      <div className="p-10 mb-24 md:mt-36 md:mx-36 bg-white md:p-14 md:rounded-lg">
        <h1 className="font-header text-primary text-4xl md:text-6xl mb-5">{appStrings.platform_intro.title}</h1>
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
                <ul className="flex flex-col gap-4 text-secondary md:text-lg">
                  <li>{item.point1}</li>
                  <li>{item.point2}</li>
                  <li>{item.point3}</li>
                  {item.point4 && <li>{item.point4}</li>}
                  {item.point5 && <li>{item.point5}</li>}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Platform;
