import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  Suspense,
} from "react";
import "./index.css";
import dummyData from "../../components/emartmall2/dummyData/dummyData";
import TabList from "../../components/emartmall2/TabList/TabList";
import useChangeCss from "../../hook/useChangeCSS";
import ErrorBoundary from "../../components/common/ErrorBoundary";

const TabContent = React.lazy(() =>
  import("../../components/emartmall2/TabContent/TabContent")
);

const ForceError = () => {
  throw new Error("강제로 발생시킨 에러!");
};

const Portal = () => {
  const catalogs = dummyData.catalogs;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [status, setStatus] = useState("loading");
  const [forceError, setForceError] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => setStatus("error"), 2000);
    const errorTimer = setTimeout(() => setStatus("success"), 4000);
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(errorTimer);
    };
  }, []);

  const selectedBrand = useMemo(
    () => catalogs[selectedIndex],
    [catalogs, selectedIndex]
  );
  const items = useMemo(() => selectedBrand.items, [selectedBrand]);

  const handleTabClick = useCallback((index) => setSelectedIndex(index), []);

  useChangeCss([
    "//script.gmarket.co.kr/pc/css/application/kr/smilefresh/app.css",
    "//script.gmarket.co.kr/starro/desktop/css/smilefresh/smilefresh.css",
  ]);

  if (status === "loading") {
    return (
      <div className="box__loading box__full is-active">
        <p>⏳ 로딩중입니다...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="box__error box__full is-active">
        <p>❌ 데이터를 불러오는 중 오류가 발생했습니다.</p>
      </div>
    );
  }

  return (
    <ErrorBoundary onReset={() => setForceError(false)}>
      <div className="main main--6week is-active">
        <button
          onClick={() => setForceError(true)}
          style={{ width: "100%", marginBottom: "16px" }}
        >
          🚨 에러 발생시키기
        </button>

        <TabList
          catalogs={catalogs}
          selectedIndex={selectedIndex}
          onTabClick={handleTabClick}
        />

        <Suspense
          fallback={
            <div className="box__loading is-active">⏳ 로딩중입니다...</div>
          }
        >
          {forceError ? <ForceError /> : <TabContent items={items} />}
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default Portal;
