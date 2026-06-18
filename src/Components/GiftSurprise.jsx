import React, { useState } from 'react';

function GiftSurprise({ onClose }) {
  const [isOpened, setIsOpened] = useState(false);
  const [claimedCoupons, setClaimedCoupons] = useState({});

  const coupons = [
    {
      id: 'icecream',
      title: 'Late-Night Ice Cream Date 🍦',
      desc: 'Redeemable at any time for your favorite sweet treats with all the toppings.',
      color: 'bg-rose-50 border-rose-200 text-rose-800'
    },
    {
      id: 'hugs',
      title: 'Unlimited Cozy Movie Hugs 🍿',
      desc: 'Guarantees premium snuggles and complete control of the TV remote.',
      color: 'bg-pink-50 border-pink-200 text-pink-800'
    },
    {
      id: 'dinner',
      title: 'Romantic Home-Cooked Dinner 🍝',
      desc: 'Includes a custom chef-style menu, candlelight, and zero dishwashing duties.',
      color: 'bg-amber-50 border-amber-200 text-amber-800'
    }
  ];

  const handleClaim = (id) => {
    setClaimedCoupons(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <div className="p-8 text-center animate-slide-up">
      {/* Modal Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-pacifico text-2xl text-rose-500">🎁 Sweet Surprise</h2>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-100 hover:bg-rose-200 text-rose-600 transition-colors cursor-pointer"
        >
          &times;
        </button>
      </div>

      {!isOpened ? (
        /* Closed Gift State */
        <div className="flex flex-col items-center justify-center py-10">
          <p className="text-rose-600 font-medium mb-6 font-caveat text-2xl">
            You've received a gift! Click the box to open it...
          </p>

          <button
            onClick={() => setIsOpened(true)}
            className="w-48 h-48 focus:outline-none cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            {/* SVG Gift Box */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-gift-shake drop-shadow-md"
            >
              {/* Lid */}
              <rect x="20" y="25" width="60" height="15" rx="3" fill="#f43f5e" />
              <rect x="46" y="25" width="8" height="15" fill="#fbcfe8" />
              {/* Box Body */}
              <rect x="25" y="40" width="50" height="45" rx="4" fill="#fda4af" />
              <rect x="46" y="40" width="8" height="45" fill="#fbcfe8" />
              {/* Ribbon Bow */}
              <path d="M50 25 C40 10, 30 20, 50 25 C70 20, 60 10, 50 25 Z" fill="#f43f5e" stroke="#fff" strokeWidth="1" />
            </svg>
          </button>
        </div>
      ) : (
        /* Open Gift State - Coupon Reveal */
        <div className="space-y-6">
          <p className="text-rose-600 font-medium font-caveat text-2xl mb-2">
            Surprise! Here are your Monthsary Love Coupons:
          </p>

          <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2" style={{
            scrollbarWidth: 'none',  /* Firefox */
            msOverflowStyle: 'none',  /* IE and Edge */
          }}>
            {coupons.map(coupon => (
              <div
                key={coupon.id}
                className={`p-4 border-2 border-dashed rounded-2xl text-left transition-all duration-300 relative overflow-hidden ${coupon.color}`}
              >
                {claimedCoupons[coupon.id] && (
                  <div className="absolute right-4 top-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm animate-bounce">
                    Claimed! 💖
                  </div>
                )}

                <h3 className="font-semibold text-lg pr-16">{coupon.title}</h3>
                <p className="text-sm mt-1 opacity-90">{coupon.desc}</p>

                <div className="mt-3 flex justify-end">
                  <button
                    disabled={claimedCoupons[coupon.id]}
                    onClick={() => handleClaim(coupon.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm transition-all duration-300 cursor-pointer ${claimedCoupons[coupon.id]
                        ? 'bg-rose-200 text-rose-500 cursor-default'
                        : 'bg-rose-500 hover:bg-rose-600 text-white hover:scale-105 active:scale-95'
                      }`}
                  >
                    {claimedCoupons[coupon.id] ? 'Redeemed' : 'Claim Coupon'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Sweet! Thank You 💖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GiftSurprise;
