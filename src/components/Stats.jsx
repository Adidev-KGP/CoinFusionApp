import { stats } from "../constants";

const Stats = () => (
  <section className={`flex items-center flex-row justify-center flex-wrap sm:mb-20 mb-3`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`ml-10 mr-10 flex flex-column justify-center items-center`} >
        {stat.id !== 'stats-3' ? (
          <img src={stat.icon} alt="star" className="w-[100px] h-[100px] object-contain " />
        ) : (
          <img src={stat.icon} alt="star" className="w-[140px] h-[140px] object-contain mr-0" />
        )}

        {stat.id !== 'stats-3' ? (
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-4">
          {stat.title}
          </p>
        ) : (
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-0">
          {stat.title}
          </p>
        )}
      </div>
    ))}
  </section>
);

export default Stats;
