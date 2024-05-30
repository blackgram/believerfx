import React, { useEffect, useState, useRef } from "react";
import DashLayout from "./DashLayout";
import Image from "next/image";
import btc from "../../assets/bitcoin.png";
import ltc from "../../assets/litecoin.png";
import eth from "../../assets/ethereum.png";
import { MoonLoader } from "react-spinners";
import { FaRegCopy } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Funding = () => {
  const user = useSelector((state) => state.data.user.user);

  const [amountValue, setAmountValue] = useState(20);
  const [SelectedCrypto, setSelectedCrypto] = useState("");
  const [isDisabled, setIsDisabled] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [wallet, setWallet] = useState("");

  const handleCryptoOption = (opt) => {
    setSelectedCrypto(opt);
  };

  const handleGenerate = () => {
    setGenerating(true);

    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 2000);
  };

  useEffect(() => {
    SelectedCrypto == "" || amountValue < 20
      ? setIsDisabled(true)
      : setIsDisabled(false);

    switch (SelectedCrypto) {
      case "btc":
        setWallet("bc1q4tvsvmk06ammyw8u05r4q8j3er2fpfxzt2uhre");
        break;
      case "eth":
        setWallet("0xB0EF4dBf5E27Ef9Eb6e516f556AB50f0f0a7a3E8");
        break;
      case "ltc":
        setWallet("ltc1qhuv3ljpulsxfn9x943jelu8j74tc385sukhq78");
        break;
      default:
        "";
    }

    setGenerated(false);
  }, [SelectedCrypto, amountValue]);

  const handleCopyBtn = () => {
    const textArea = document.createElement("textarea");
    textArea.value = wallet;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);

    toast.success("copied to clipboard");
  };

  return (
    <DashLayout>
      <div className="p-4 lg:px-[10rem]">
        <div className="w-full text-center font-medium text-[24px]">
          Wallet Funding <br />{" "}
          <p className="font-sm text-[16px] text-ash italic">
            Deposit directly into your bfx wallet
          </p>
        </div>
        <div className="text-ash py-6">Current Balance: $0.00</div>
        <div>
          <div className="flex items-center lg:text-[20px] font-bold py-4 gap-4">
            <div>
              Amount: <br /> <p className="text-[10px]">(minimum $20)</p>
            </div>
            <input
              type="number"
              value={amountValue}
              className="text-white bg-nb3 rounded-md p-2  "
              onChange={(e) => setAmountValue(e.target.value)}
            />
          </div>

          <div className="w-full px-2 py-6 bg-nb3 min-h-[30rem] rounded-lg">
            <div className="text-center italic font-bold text-ash">
              Choose your preferred mode of payment
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-evenly py-8 px-4 ">
              <div
                className={`cursor-pointer max-w-[180px] xl:max-w-none flex flex-col items-center border-2 border-ash rounded-lg p-2 py-4 ${
                  SelectedCrypto == "btc" && "bg-primary"
                }`}
                onClick={() => handleCryptoOption("btc")}
              >
                <Image src={btc} height={200} width={200} alt="bitcoin" />
                <input
                  type="radio"
                  value="btc"
                  checked={SelectedCrypto === "btc"}
                  className="accent-nb3"
                />
              </div>
              <div
                onClick={() => handleCryptoOption("eth")}
                className={`cursor-pointer max-w-[180px] xl:max-w-none flex flex-col items-center border-2 border-ash rounded-lg p-2 py-4 ${
                  SelectedCrypto == "eth" && "bg-primary"
                }`}
              >
                <Image src={eth} height={200} width={200} alt="ethereum" />
                <input
                  type="radio"
                  value="eth"
                  checked={SelectedCrypto === "eth"}
                  className="accent-nb3"
                />
              </div>
              <div
                onClick={() => handleCryptoOption("ltc")}
                className={`cursor-pointer max-w-[180px] xl:max-w-none flex flex-col items-center border-2 border-ash rounded-lg p-2 py-4 ${
                  SelectedCrypto == "ltc" && "bg-primary"
                }`}
              >
                <Image src={ltc} height={200} width={200} alt="litecoin" />
                <input
                  type="radio"
                  value="ltc"
                  checked={SelectedCrypto === "ltc"}
                  className="accent-nb3"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              {generated ? (
                <div className="max-w-[85%]">
                  <div className="w-full text-[12px] sm:text-[14px] md:text-[16px] p-2 flex flex-col md:flex-row items-center gap-4 border border-ash rounded-sm  ">
                    <div className="w-full text-center">{wallet}</div>
                    <div
                      onClick={handleCopyBtn}
                      className="flex bg-primary p-2 cursor-pointer items-center justify-center"
                    >
                      Copy <FaRegCopy />
                    </div>
                    <Toaster />
                  </div>
                  <div className=" text-justify lg:text-center text-ash pt-6">
                    Note: Once payment is complete, receipt of payment should be
                    sent to <span className="text-primary">support@believersfx.com</span> for confirmation and your
                    trading account will be funded after confirmation is
                    complete (max 1hr). <br /> Confirmation mail should include your user
                    id: <span className="text-secondary">{user.uid}</span>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className={`bg-primary transition-all ease-in min-w-[180px] p-2 font-medium text-nb3 disabled:opacity-75 disabled:cursor-not-allowed `}
                  disabled={isDisabled}
                  title={
                    isDisabled
                      ? `Please select one payment method & Amount cannot be less than $100`
                      : ""
                  }
                  onClick={handleGenerate}
                >
                  {generating ? (
                    <div className="w-full  flex flex-col items-center justify-center">
                      {" "}
                      <MoonLoader size={30} /> <p>generating...</p>
                    </div>
                  ) : (
                    "Generate Wallet"
                  )}
                </button>
              )}
              {isDisabled ? (
                <p className="text-red-500 italic text-[10px]">
                  Please select an option and enter a valid amount.
                </p>
              ) : (
                ""
              )}
              
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Funding;
