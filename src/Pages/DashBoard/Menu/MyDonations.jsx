import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyDonations = () => {
  const [donates, setDonates] = useState(null);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/donate/${user.email}`).then((res) => {
      setDonates(res.data);
    });
  }, []);

  console.log(donates);

  return (
    <div>
      <section className="container mt-12 mb-24 px-4 mx-auto ">
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 ">My Donations</h2>

            <span className="px-3 py-1 text-xs text-[#108864] bg-[#1088643b] rounded-full ">
              {donates?.length} Donates
            </span>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#108864] text-white">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        <span>Email</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Amount</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        Time
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        Transaction Id
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {donates?.map((donate) => (
                      <tr key={donate._id} className="bg-[#108864]/5">
                        <td className="px-4 py-4 text-sm text-black/80  whitespace-nowrap">
                          {donate?.name}
                        </td>

                        <td className="px-4 py-4 text-sm text-black/80  whitespace-nowrap">
                          {donate?.email}
                        </td>

                        <td className="px-4 py-4 text-sm text-black/80  whitespace-nowrap">
                          {donate?.amount}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          {new Date(donate?.date).toLocaleDateString()}
                        </td>
                        <td
                          title=""
                          className="px-4 py-4 text-sm text-black/80  whitespace-nowrap"
                        >
                          {donate?.transactionId}...
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyDonations;
