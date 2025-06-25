import React, { useState } from "react";
import AgreeHeader from "../AgreeHeader/AgreeHeader";
import AgreeAllCheck from "../AgreeAllCheck/AgreeAllCheck";
import AccordionList from "../AccordionList/AccordionList";

const agreeData = [
  {
    title: "일반규정",
    content: [
      "목적 : 주문, 결제 및 배송서비스",
      "항목 : 구매자정보, 주문비밀번호, 상품 구매/취소/반품/교환/환불 정보,수령인 정보, 결제정보, 송장정보, 은행계좌정보, 휴대폰번호(휴대폰결제시), 해외카드번호(해외카드 결제 시), 현금영수증 정보",
      "보유기간 : 관련 법률에 따라 5년간 보존",
    ],
  },
  {
    title: "수하물규정",
    content: [
      "목적 : 주문, 결제 및 배송서비스, 수하물 운반",
      "항목 : 구매자정보, 주문비밀번호, 상품 구매/취소/반품/교환/환불 정보,수령인 정보, 결제정보, 송장정보, 은행계좌정보, 휴대폰번호(휴대폰결제시), 해외카드번호(해외카드 결제 시), 현금영수증 정보",
      "보유기간 : 관련 법률에 따라 3년간 보존",
    ],
  },
  {
    title: "취소/환불규정",
    content: [
      "목적 : 주문, 결제",
      "항목 : 구매자정보, 주문비밀번호, 상품 구매/취소/반품/교환/환불 정보,수령인 정보, 결제정보, 송장정보, 은행계좌정보, 휴대폰번호(휴대폰결제시), 해외카드번호(해외카드 결제 시), 현금영수증 정보",
      "보유기간 : 관련 법률에 따라 10년간 보존",
    ],
  },
  {
    title: "개인정보 수집∙이용 동의",
    content: [
      "수집·이용 목적 : 항공권 예약 및 확인, 관련 문의 응대",
      "항목 : 예약자 정보 : 이름, 이메일, 연락처",
      "탑승자 정보 : 이름, 생년월일, 성별",
    ],
  },
  {
    title: "개인정보 제3자 이용동의",
    content: [
      <>
        제공받는 자 :{" "}
        <strong className="text__point">제공되는 해당 여행사명 기재</strong>
      </>,
      <>
        제공 목적 :{" "}
        <strong className="text__point">
          항공권 예약 및 확인, 관련 문의 응대
        </strong>
      </>,
      "항목 : 예약자 정보 : 이름, 이메일, 연락처",
      "탑승자 정보 :이름, 생년월일, 성별",
      "개인정보 수집·이용에 대한 동의를 거부할 권리가 있으며, 동의를 거부할경우 서비스 제공에 제한을 받을 수 있습니다.",
    ],
  },
  {
    title: "고유식별정보 수집 이용 동의",
    content: [
      "수집 · 이용 목적 : 항공권 예약 및 결제, 발권",
      <>
        보유 및 이용 기간 :{" "}
        <strong className="text__point">
          서비스 개시(탑승일) 후 1개월 또는 법령에 따른 보존 기간
        </strong>
      </>,
      "위의 고유식별정보 수집에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 서비스 제공에 제한을 받을 수 있습니다.",
    ],
  },
  {
    title: "고유식별정보 제3자 제공 동의",
    content: [
      <>
        제공받는 자 : <strong className="text__point">항공사</strong>
      </>,
      "항목 : 여권번호",
      <>
        {" "}
        보유 및 이용 기간 :{" "}
        <strong className="text__point">
          서비스 개시(탑승일) 후 1개월 또는 법령에 따른 보존 기간
        </strong>
      </>,
      "위의 고유식별정보 개인정보 제3자 제공에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 서비스 제공에 제한을 받을 수 있습니다.",
    ],
  },
];

const Agree = () => {
  const [checkedList, setCheckedList] = useState(
    new Array(agreeData.length).fill(false)
  );

  const allChecked = checkedList.every((value) => Boolean(value));

  const handleAllCheck = (checked) => {
    setCheckedList(new Array(agreeData.length).fill(checked));
  };

  const handleItemCheck = (index, checked) => {
    const update = [...checkedList];
    update[index] = checked;
    setCheckedList(update);
  };

  return (
    <div className="section__component section__data--rules">
      <div className="box__component box__form-checkbox-wrap">
        <AgreeHeader />
        <AgreeAllCheck
          checked={allChecked}
          onChange={(e) => handleAllCheck(e.target.checked)}
        />
        <AccordionList
          data={agreeData}
          checkedList={checkedList}
          onCheck={handleItemCheck}
        />
      </div>
    </div>
  );
};

export default Agree;
