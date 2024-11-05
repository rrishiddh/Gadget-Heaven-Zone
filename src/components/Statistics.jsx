import { useLoaderData } from "react-router-dom";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
  


const Statistics = () => {
  const dataForChart = useLoaderData();

  return (
    <>
      <div className="bg-[#9538E2] ">
        <div className="max-w-screen-2xl w-[90%] mx-auto ">
          <div className=" lg:w-[94%]  mx-auto text-center space-y-6  rounded-xl pt-6 text-white pb-32   ">
            <h1 className="text-3xl md:text-5xl font-bold lg:w-[80%] mx-auto">
              Statistics
            </h1>
            <p className="lg:w-[50%] w-[80%] mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart device to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl w-[90%] mx-auto ">

        <ComposedChart className="mt-20 mx-auto"
        width={850}
        height={400}
        data={dataForChart}
        margin={{
          top: 10,
          right: 20,
          bottom: 20,
          left: 10
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="product_title"
          label={{ value: "Brand Name", position: "insideBottomRight", offset: -15 }}
          scale="band"
        />
        <YAxis label={{ value: "Price", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="rating" stroke="#ff7300" />
      </ComposedChart>
      </div>
    </>
  );
};

export default Statistics;
