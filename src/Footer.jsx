import React from "react";

function Footer (){
  return (
    <footer className="bg-slate-700 w-full">
      <div className="flex justify-center items-center h-20 px-4">
        <div className="text-center">
          <div className="text-white mb-4">
              นโยบาย
            <span className="text-white mx-2">|</span>
              เกี่ยวกับเรา
            <span className="text-white mx-2">|</span>
              ติดต่อ
              <span className="text-white mx-2">|</span>
              ช่วยเหลือ
          </div>
          <p className="text-white">
            Copyright © 2024 AC-ED. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
