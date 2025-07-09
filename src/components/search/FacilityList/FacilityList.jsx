import React, { useState } from "react";
import FacilityItem from "./FacilityItem";
import "./Facility.css";

const icons = {
  pickup: "🚗",
  breakfast: "☕",
  pool: "🏊‍♂️",
  spa: "🛀",
  seminar: "📋",
  wifi: "📶",
  karaoke: "🎤",
  basketball: "🏀",
  volleyball: "🏐",
  campfire: "🔥",
};

const facilitiesData = [
  { id: "pickup", text: "픽업", icon: icons.pickup },
  { id: "breakfast", text: "무료조식", icon: icons.breakfast },
  { id: "pool", text: "수영장", icon: icons.pool },
  { id: "spa", text: "스파", icon: icons.spa },
  { id: "seminar", text: "세미나실", icon: icons.seminar },
  { id: "wifi", text: "인터넷(WiFi)", icon: icons.wifi },
  { id: "karaoke", text: "노래방", icon: icons.karaoke },
  { id: "basketball", text: "농구장", icon: icons.basketball },
  { id: "volleyball", text: "족구장", icon: icons.volleyball },
  { id: "campfire", text: "캠프파이어", icon: icons.campfire },
];

const FacilityList = () => {
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [allSelected, setAllSelected] = useState(true);

  const toggleFacility = (id) => {
    if (id === "all") {
      if (allSelected) {
        setSelectedFacilities([]);
        setAllSelected(false);
      } else {
        setSelectedFacilities(facilitiesData.map((e) => e.id));
        setAllSelected(true);
      }
    } else {
      let newSelected;
      if (selectedFacilities.includes(id)) {
        newSelected = selectedFacilities.filter((item) => item !== id);
      } else {
        newSelected = [...selectedFacilities, id];
      }
      setSelectedFacilities(newSelected);
      setAllSelected(newSelected.length === facilitiesData.length);
    }
  };

  return (
    <div className="box__facility-wrap">
      <div className="box__title">
        <span className="text__title">부대/편의시설</span>
        <button
          type="button"
          className={`button__select-all ${allSelected ? "selected" : ""}`}
          onClick={() => toggleFacility("all")}
          aria-pressed={allSelected}
        >
          ✅ 전체선택
        </button>
      </div>
      <div className="box__facility">
        {facilitiesData.map(({ id, text, icon }) => (
          <FacilityItem
            key={id}
            id={id}
            text={text}
            icon={icon}
            selected={selectedFacilities.includes(id)}
            onToggle={toggleFacility}
          />
        ))}
      </div>
    </div>
  );
};

export default FacilityList;
