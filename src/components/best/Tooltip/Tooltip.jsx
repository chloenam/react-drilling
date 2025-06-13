import React from "react";

const Tooltip = ({ isOpen, onClick, onClose }) => {
  return (
    <div className="box__tooltip-info">
      <button
        type="button"
        className="button__tooltip"
        aria-expanded={isOpen ? "ture" : "false"}
        tabIndex={isOpen ? "-1" : "0"}
        onClick={onClick}
      >
        <span className="for-a11y">안내창</span>
      </button>
      {isOpen && (
        <div className="box__tooltip">
          <button type="button" className="button__closed" onClick={onClose}>
            <span className="for-a11y">안내창 닫기</span>
          </button>
          <p className="text__title">베스트 선정 기준</p>
          <ul className="list__text">
            <li className="list-item">
              G마켓 베스트 랭킹은 상품의 판매수량, 매출을 기반으로, 각각의
              가중치 및 카테고리 가격대 가중치를 반영하여 선정됩니다.
            </li>
            <li className="list-item">
              베스트 랭킹은 최근 2시간 판매 데이터로 집계되며, 실시간 업데이트
              됩니다.
            </li>
            <li className="list-item">
              베스트 상품과 연관 있는 개인화 추천 광고 모듈이 노출될 수
              있습니다.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
