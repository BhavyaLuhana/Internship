import { useState } from "react";

export default function LoanEMICalculator() {
  const [principal, setPrincipal] = useState(50000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(interestRate);
    const N = parseInt(tenure);
    
    if (P > 0 && annualRate > 0 && N > 0) {
      const R = annualRate / 12 / 100; // Convert annual rate to monthly
      const numerator = P * R * Math.pow(1 + R, N);
      const denominator = Math.pow(1 + R, N) - 1;
      const calculatedEMI = numerator / denominator;
      setEmi(calculatedEMI.toFixed(2));
    } else {
      setEmi(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white shadow-lg p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Loan EMI Calculator</h2>
        
        <label className="block mb-2">Principal Amount (₹):</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Annual Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Loan Tenure (Months):</label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <button
          onClick={calculateEMI}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Calculate EMI
        </button>

        {emi !== null && (
          <div className="mt-4 text-center text-lg font-semibold text-green-700">
            Monthly EMI: ₹{emi}
          </div>
        )}
      </div>
    </div>
  );
}
