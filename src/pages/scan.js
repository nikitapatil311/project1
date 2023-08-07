import React, { useState } from "react";
import BarcodeScanner from "../../components/BarcodeScanner";
import debounce from "lodash.debounce";
import { useSession, signIn } from "next-auth/react";

const ScanPage = () => {
  const [scannedBarcode, setScannedBarcode] = useState(null);
  const { data: session } = useSession();

  // Function to handle barcode detection with debouncing
  const handleBarcodeDetected = debounce((result) => {
    // The barcode data is available in the `result` object
    const barcodeData = result.codeResult.code;
    console.log("Barcode detected:", barcodeData);

    // Update the state with the scanned barcode data
    setScannedBarcode(barcodeData);
  }, 1000); // Adjust the debounce delay as per your requirement

  if (session) {
    return (
      <div>
        <h1>Scan Page</h1>
        <BarcodeScanner onDetected={handleBarcodeDetected} />

        {scannedBarcode && (
          <div>
            <p>Scanned Barcode: {scannedBarcode}</p>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="p-4 border border-gray-300 rounded-md shadow-md max-w-md mx-auto mt-8">
        <p className="text-xl font-semibold mb-2">
          Hey there, barcode explorer!Sign in to unlock the barcode galaxy! 🚀🛒
        </p>

        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    );
  }
};

export default ScanPage;
