import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";

const Cookie = () => {
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    let timer1 = setTimeout(() => {
      setIsOpened(true);
    }, 1000);
    // clean timeout
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <Collapse isOpened={isOpened}>
      <div>
        <p>
          我們使用 Cookies
          來提供最佳的網站體驗，包含個人化內容、廣告、社交媒體功能與流量分析。我們也向社交媒體、廣告和分析合作伙伴分享有關您使用我們網站的資訊。詳細請參閱我們的
          Cookie 政策。
        </p>
        <button
          onClick={() => {
            setIsOpened(false);
          }}
        >
          我知道了
        </button>
      </div>
    </Collapse>
  );
};

export default Cookie;
