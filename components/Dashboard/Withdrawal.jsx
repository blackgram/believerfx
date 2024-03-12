import React,{useState} from "react";
import DashLayout from "./DashLayout";
import Image from "next/image";
import btc from "../../assets/bitcoin.png";
import ltc from "../../assets/litecoin.png";
import eth from "../../assets/ethereum.png";
import { MoonLoader } from "react-spinners";
import { FaRegCopy } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";


const Withdrawal = () => {

    const [amountValue, setAmountValue] = useState(20);
    const [SelectedCrypto, setSelectedCrypto] = useState("");
    const [isDisabled, setIsDisabled] = useState(null);
    const [generating, setGenerating] = useState(false);
    const [generated, setGenerated] = useState(false);
    const [wallet, setWallet] = useState("");
  
    const handleCryptoOption = (opt) => {
      setSelectedCrypto(opt);
    };
  

  return (
    <DashLayout>
      <div className="p-4 lg:px-[10rem]">
        <div className="w-full text-center font-medium text-[24px]">
          Withdrawal <br />{" "}
          <p className="font-sm text-[16px] text-ash italic">
            Made some profit? Withdraw into crpto wallet here
          </p>
        </div>
        <div className="text-ash pt-6">Current Balance: $0.00</div>
        <div className="text-ash pb-6">Withdrawable Balance: $0.00</div>
      </div>
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
            
          </div>
        </div>
    </DashLayout>
  );
};

export default Withdrawal;
