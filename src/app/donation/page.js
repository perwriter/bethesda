import React from 'react';

export default function DonationPage() {
  return (
    <div className="max-w-screen-lg mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Support Our Cause</h1>

      <p className="text-center mb-12 text-lg">
        Your donations help us to continue our mission. You can contribute via any of the following channels:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* PayPal Donation */}
        <div className="border p-6 rounded-lg shadow-md bg-white text-center">
          <img src="../paypal.png" alt="PayPal" className="w-32 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Donate via PayPal</h2>
          <p className="mb-4">
            You can donate securely using PayPal. Click the button below to proceed:
          </p>
          <a
            href="https://www.paypal.com/donate"
            target="_blank"
            className="block w-full text-center py-2.5 bg-secondary text-white rounded hover:bg-primary"
            rel="noreferrer"
          >
            Donate via PayPal
          </a>
        </div>

        {/* Mpesa Donation */}
        <div className="border p-6 rounded-lg shadow-md bg-white text-center">
          <img src="../m-pesa.png" alt="Mpesa" className="w-32 object-fit mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Donate via Mpesa</h2>
          <p className="mb-4">
            You can send your donation via Mpesa to our Paybill number:
          </p>
          <div className="text-lg font-bold mb-2">Paybill: 123456</div>
          <div className="text-lg font-bold">Account: DONATE</div>
        </div>

        {/* I&M Bank Donation */}
        <div className="border p-6 rounded-lg shadow-md bg-white text-center">
          <img src="../bank.png" alt="I&M Bank" className="w-32 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Donate via I&M Bank</h2>
          <p className="mb-4">
            You can deposit directly into our I&M Bank account. Here are the details:
          </p>
          <div className="text-lg font-bold mb-2">Bank: I&M Bank</div>
          <div className="text-lg font-bold mb-2">Account Name: Bethesda</div>
          <div className="text-lg font-bold">Account Number: 123456789</div>
        </div>
      </div>
    </div>
  );
}
