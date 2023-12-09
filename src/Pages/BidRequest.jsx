const BidRequest = () => {

  
    return (
      <div>
        <div className="overflow-auto  ">
          <table className=" w-full md:w-[80%] mx-auto">
            <tr className="flex items-center justify-between gap-5 shadow-sm rounded-md shadow-[#015987] p-5  my-2 ">
              <td className="font-semibold text-[#015987] ">{Job_title} </td>
              <td>{userEmail}</td>
              <td>{deadline} </td>
              <td className="bg-[#015987] text-amber-300 rounded-md font-semibold py-1.5 px-5 ">
                Status
              </td>
              <td className="bg-[#015987] text-amber-300 rounded-md font-semibold py-1.5 px-5">
                Complete
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
};
export default BidRequest;