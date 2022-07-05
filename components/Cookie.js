import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";

const Cookie = () => {
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (sessionStorage.getItem("notice")) {
        setIsOpened(true);
      }
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
          為提供使用者最佳網站體驗，我們蒐集cookies進行網站行為分析，以持續優化網頁內容，若您繼續瀏覽本網站，即表示您已同意線上隱私權聲明。詳細請參閱我們的
          <a
            href="https://drive.google.com/file/d/1XR8aKn-ZbhZqRM5FGaQ4V94xl2HWivuq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookie政策
          </a>
          。
        </p>
        <button
          onClick={() => {
            setIsOpened(false);
            sessionStorage.setItem("notice", false);
          }}
        >
          我知道了
        </button>
      </div>
    </Collapse>
  );
};

export default Cookie;
