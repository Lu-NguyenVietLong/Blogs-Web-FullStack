import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="flex items-center">
      <div className="flex-1">
        <div className="relative h-[500px] w-full">
          <Image src="/contact.png" alt="" fill />
        </div>
      </div>
      <div className="flex-1">
        <div className="w-[80%] m-auto text-center">
          <div className="mt-5">
            <input
              className="outline-none bg-[#575555] text-[#c0bbbb] pl-[17px] pr-[37px] py-[10px] rounded-[5px] text-[14px] w-full"
              placeholder="Name and Sumame"
            ></input>
          </div>
          <div className="mt-5">
            <input
              className="outline-none bg-[#575555] text-[#c0bbbb] pl-[17px] pr-[37px] py-[10px] rounded-[5px] text-[14px] w-full"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="mt-5">
            <input
              className="outline-none bg-[#575555] text-[#c0bbbb] pl-[17px] pr-[37px] py-[10px] rounded-[5px] text-[14px] w-full"
              placeholder="Phone Number (Optional)"
            ></input>
          </div>
          <div className="mt-5">
            <textarea
              className="outline-none bg-[#575555] text-[#c0bbbb] pl-[17px] pr-[37px] py-[10px] rounded-[5px] text-[14px] w-full"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="mt-5">
            <button className=" bg-[#9a2dff] text-[#c0bbbb] pl-[17px] pr-[37px] py-[10px] rounded-[5px] text-[14px] w-full">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
