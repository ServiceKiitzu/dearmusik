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
          為提供使用者最佳網站體驗，我們蒐集cookies進行網站行為分析，以持續優化網頁內容，若您繼續瀏覽本網站，即表示您已同意線上隱私權聲明。詳細請參閱我們的Cookie政策。
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
