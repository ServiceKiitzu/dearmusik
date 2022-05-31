import NewsNave from "../../components/NewsNav";
import styles from "../../styles/news/Details.module.scss";
import Image from "next/image";
import Link from "next/link";
import Previous from "../../assets/news/previous.svg";
import Img from "../../assets/news/img.svg";
import ImgText from "../../assets/news/img-text.svg";

const Details = () => {
  return (
    <div className={styles.container}>
      <NewsNave></NewsNave>
      <div className={styles.rightBlock}>
        <Link href={"/news"}>
          <div className={styles.previous}>
            <Image src={Previous}></Image>
          </div>
        </Link>

        <div className={styles.date}>20220530</div>
        <div className={styles.title}>
          歡迎加入黃玠國! <br /> 黃玠國裡，都是喜歡自由跟充滿愛的國人
        </div>
        <div className={styles.content}>
          世界上有一些大家都知道的微行國家，像梵蒂岡、新加坡等。但其實還有比這些更小的“私人國家”存在，國家的面積也許只是一個足球場，一小片屋聚，一棟房或一間臥室的大小，小小國甚至發行自己的貨幣和護照，通常他們是為了捍衛自己的權益，保護其珍貴的事物，對抗不平等的政策，而建立的理想國。
          <br />
          <br />
          2007年黃玠發行第一張專輯「綠色的日子」，當時的文案裡就有一句「我想用我的音樂改變這個世界。」這幾年相繼有很多食安問題，土地、居住正義，學運等，當黃玠越是接觸，也越發好奇，他開始找紀錄片來看，關於戰爭、環保人權等等各式各樣的議題，深感這個世界距離公平和自由，甚至愛，還有很遠的距離。於是黃玠與朋友瞎聊天時，開玩笑的說，「不然來建立一個黃玠國，裡面都是喜歡自由跟充滿愛的人」。
          <br />
          <br />
          但早在這之前，「黃玠國」更純粹的想法，是來自已故的知名導演、音樂人盧昌明，早期卡帶作品中的一只回郵，填寫即可加入「非凡族」，將不定期收到盧昌明的來信。
          黃玠：「覺得現在網路資訊太氾濫了，你貼在臉書上的話一下子就被洗版掉，你根本也不知道有沒有人在看。我也一直想像這樣，和想說話的對象說話，一些不適合在粉絲頁說的，去年年底開始我在粉絲頁上請想和我通信的人留下自己的e-mail，利用一些工作的空擋，和他們寫寫信，最早的想法只是一個筆友的概念。」
        </div>
      </div>
      <div className={styles.img}>
        <Image src={Img}></Image>
      </div>
      <div className={styles.imgText}>
        <Image src={ImgText}></Image>
      </div>
    </div>
  );
};

export default Details;
