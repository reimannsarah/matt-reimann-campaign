import { appStrings } from "../../assets/text/appStrings"

const Platform = () => {
  return (
    <div className="mt-[350px] mx-36 bg-white p-14 rounded-lg">
      <h1>Title</h1>
      <p>{appStrings.platform_intro.p1}</p>
      <p>{appStrings.platform_intro.p2}</p>
      <p>{appStrings.platform_intro.p3}</p>
      <div>
        {appStrings.platform.map((item, index) => {
          return (
            <div key={index} className="">
              <h1>{item.title}</h1>
              <ul>
                <li>{item.point1}</li>
                <li>{item.point2}</li>
                <li>{item.point3}</li>
                {item.point4 && <li>{item.point4}</li>}
                {item.point5 && <li>{item.point5}</li>}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Platform