import React from "react";

const logos = ["LONGi","Hoymiles","Huawei","Sungrow","TNB","SEDA"];

export default function LogoTicker() {
  return (
    <div className="relative mx-auto mt-12 w-full overflow-hidden border-y border-white/10 py-6">
      <div className="animate-[ticker_20s_linear_infinite] whitespace-nowrap opacity-80">
        {logos.map((l, i) => (
          <span key={i} className="mx-10 inline-block text-sm tracking-wider text-white/70">
            {l}
          </span>
        ))}
        {/* duplicate for seamless loop */}
        {logos.map((l, i) => (
          <span key={`d${i}`} className="mx-10 inline-block text-sm tracking-wider text-white/70">
            {l}
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { to { transform: translateX(-50%);} }`}</style>
    </div>
  );
}
