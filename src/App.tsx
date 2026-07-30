import { useState, useMemo } from "react";

type ConversionDirection = "USD_TO_IRR" | "IRR_TO_USD";

function App() {
  const [exchangeRate, setExchangeRate] = useState<number | "">("");
  const [amount, setAmount] = useState<number | "">("");
  const [direction, setDirection] = useState<ConversionDirection>("USD_TO_IRR");

  // Calculate the conversion result using useMemo to avoid unnecessary recalculations
  const result = useMemo(() => {
    if (!amount || !exchangeRate) return 0;

    if (direction === "USD_TO_IRR") {
      return amount * exchangeRate;
    } else {
      return amount / exchangeRate;
    }
  }, [amount, exchangeRate, direction]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          مبدل ارز (دلار / ریال)
        </h1>

        <div className="space-y-4 text-right" dir="rtl">
          {/* Get the current exchange rate from the user */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              نرخ فعلی دلار (ریال)
            </label>
            <input
              type="number"
              value={exchangeRate}
              onChange={(e) => setExchangeRate(Number(e.target.value) || "")}
              placeholder="مثلا: ۵۰۰,۰۰۰"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Enter the amount to convert */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              مبلغ جهت تبدیل
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value) || "")}
              placeholder="مبلغ را وارد کنید"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Select the conversion direction */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              نوع تبدیل
            </label>
            <select
              value={direction}
              onChange={(e) =>
                setDirection(e.target.value as ConversionDirection)
              }
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
            >
              <option value="USD_TO_IRR">دلار به ریال</option>
              <option value="IRR_TO_USD">ریال به دلار</option>
            </select>
          </div>

          {/* result  */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
            <span className="text-sm text-gray-500 block mb-1">
              نتیجه تبدیل:
            </span>
            <span className="text-xl font-bold text-green-700">
              {result ? result.toLocaleString() : "۰"}
            </span>
            <span className="text-md text-green-700 mr-2">
              {direction === "USD_TO_IRR" ? "ریال" : "دلار"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
