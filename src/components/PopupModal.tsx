"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PopupModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [closedToday, setClosedToday] = useState(false);
  const [closedPopups, setClosedPopups] = useState<number[]>([]);

  const popups = [
    {
      id: 1,
      image: "/popup/popup_1.gif",
      alt: "팝업 1",
    },
    {
      id: 2,
      image: "/popup/popup_2.png",
      alt: "팝업 2",
    },
    {
      id: 3,
      image: "/popup/popup_3.png",
      alt: "팝업 3",
    },
  ];

  useEffect(() => {
    // 오늘 하루 닫기 체크
    const today = new Date().toDateString();
    const closedTodayData = localStorage.getItem("popupClosedToday");

    if (closedTodayData === today) {
      setClosedToday(true);
      return;
    }

    // 팝업 표시 (약간의 지연 후)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = (popupId: number) => {
    setClosedPopups((prev) => [...prev, popupId]);
  };

  const handleCloseAll = () => {
    setClosedPopups([1, 2, 3]);
  };

  const handleCloseToday = () => {
    const today = new Date().toDateString();
    localStorage.setItem("popupClosedToday", today);
    setClosedPopups([1, 2, 3]);
  };

  if (closedToday || !isVisible) {
    return null;
  }

  return (
    <div className="absolute top-30 left-4 z-50 flex gap-4 md:flex-row flex-col">
      {popups.map(
        (popup, index) =>
          !closedPopups.includes(popup.id) && (
            <div
              key={popup.id}
              className="relative bg-white rounded-lg shadow-lg md:static absolute"
              style={{
                top: "0px",
                left: "0px",
                zIndex: 50 - index,
              }}
            >
              {/* 이미지 */}
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <Image
                  src={popup.image}
                  alt={popup.alt}
                  fill
                  className="object-cover rounded-t-lg"
                  priority
                />
              </div>

              {/* 버튼들 */}
              <div
                className="rounded-b-lg overflow-hidden"
                style={{ backgroundColor: "#f7f7f7" }}
              >
                <div className="flex w-[300px] md:w-[400px]">
                  <button
                    onClick={() => handleClose(popup.id)}
                    className="flex-1 h-[30px] font-medium border-r border-r-gray-300 cursor-pointer"
                    style={{
                      backgroundColor: "#f7f7f7",
                      color: "#666666",
                      fontSize: "11px",
                    }}
                  >
                    창 닫기
                  </button>
                  <button
                    onClick={handleCloseAll}
                    className="flex-1 h-[30px] font-medium border-r border-r-gray-300 cursor-pointer"
                    style={{
                      backgroundColor: "#f7f7f7",
                      color: "#666666",
                      fontSize: "11px",
                    }}
                  >
                    모든 창닫기
                  </button>
                  <button
                    onClick={handleCloseToday}
                    className="flex-1 h-[30px] font-medium cursor-pointer"
                    style={{
                      backgroundColor: "#f7f7f7",
                      color: "#666666",
                      fontSize: "11px",
                    }}
                  >
                    오늘하루 닫기
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default PopupModal;
