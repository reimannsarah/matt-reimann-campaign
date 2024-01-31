import DonationsInfo from "../sub/DonationsInfo"

const Donations = () => {
  return (
    <div className="mt-16 mini:mx-80">
      <h1 className="font-header text-white mb-8 md:mb-0 text-4xl md:text-8xl text-center">Donations</h1>
      <DonationsInfo />
    </div>
  )
}

export default Donations