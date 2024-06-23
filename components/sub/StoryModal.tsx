import React, { useState } from 'react'
import { Modal, Box, Typography, Button } from '@mui/material'
import { SxProps, Theme } from '@mui/material/styles'

interface StoryModalProps {
  open: boolean
  handleClose: () => void
}

const StoryModal: React.FC<StoryModalProps> = ({ open, handleClose }) => {
  const showScrollbar = useState(false)

  const modalStyle: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const modalContentStyle: SxProps<Theme> = {
    position: 'relative',
    width: '90%',
    maxWidth: '1200px',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: showScrollbar ? 'scroll' : 'auto',
    maxHeight: '70vh',
    margin: 'auto',
  }

  const contentStyle: SxProps<Theme> = {
    overflowY: 'auto',
    padding: '20px',
    position: 'relative',
  }

  const closeButtonWrapperStyle: SxProps<Theme> = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    zIndex: 1,
  }

  const closeButtonStyle: SxProps<Theme> = {
    position: 'relative',
  }

  return (
    <Modal open={open} onClose={handleClose} sx={modalStyle}>
      <Box sx={modalContentStyle}>
        <Typography variant="h6" fontWeight="bold">
          ストーリー
        </Typography>
        <Box sx={contentStyle}>
          <Typography variant="body1">
            小学生の時、私はプログラマーになりたかった。
            <br />
            学校でGWベーシックを勉強したのがきっかけになったのだが、
            当時はインターネットもYouTubeもなく、プログラミングスクールに行くのが唯一の方法だったが、村の近所のどのパソコン教室もプログラミングを教えてくれなかったのでやむを得ず諦めた。
            <br />
            その後中高校で学年トップになるほど勉強し、軍隊へ行き、大学を卒業して、就職した学校で英語教師を6年務めていた。
            私は韓国での生活が良くなかった。苦しいことが多かった。仕事をしたくなかった。月曜日が怖かった。
            そして、私が社会に貢献しているという実感が全然なかった。
            <br />
            <br />
            それからある日、あまりにもつらい出来事があり、反動で数ヶ月間いつも私の好きな宇宙、量子力学関連のYouTubeだけ見続けた。
            そこで偶然、YouTubeで開発者のために教えている無料映像がものすごく多いことがわかった。
            <br />
            そして、あるYouTuberが開発者をするには、米国や日本でするのが待遇が良いという話をするのを聞き、私はそこから日本語とコーディングを同時に勉強してみることにした。（英語専攻なのにアメリカを選択しなかった理由は…アメリカは韓国と離れすぎて行けば家族と生き別れをしそうだという理由からだった。）{' '}
            <br />
            勉強するために親と友人の反対を後にして、仕事をやめて、6ヶ月独学した。
            <br />
            <br />
            準備をして日本で正社員開発者として就職に成功した。夢のような就職をしたが、最初の職場は待遇が悪くスタートは非常に微妙だった。日本での生活も家賃と生活費で最初はギリギリだった。{' '}
            <br />
            それから、遅れ始めた理由で、他の開発者に比べて私の時間があまりないことに気づき、時間を効率的に使う戦略を立てた。これは仕事をやりながら開発と日本語と漢字を同時に勉強することだった。{' '}
            <br />
            お金問題と私の足りない時間は、コーディング講師をやりながら、開発の復習も、お金の問題も解決していった。やるべきことが多すぎるのでテレビを見る時間など不要なことをやめる事を少しづつ習慣化した。
            <br />
            周りをいつも整理し、常に効率性を考え、すべてのことをいつも計画する習慣を持ち、私は急速に成長した。
            <br />
            そんな中、いくつかの現場を巡り、SB社の日本全域の大型建物の5G無線アンテナ設計プログラムを作ることになった。{' '}
            <br />
            そこで2年間プログラムを作って、ある瞬間、韓国に行くようになった時、
            <br />
            ゲシュタルトの効果のせいか夕日が沈む風景に私の目に入ったのは夕暮れと家の風景ではなく、その屋上にアンテナが作り出す影だった。その多くの家の屋上のアンテナが作り出す影に、私は感動を受けました。{' '}
            <br />
            これはすごい経験だった。私の手で日本に5Gが導入されたようだ。
            <br />
            <br />
            このプロジェクトからプロジェクトリーダーまで経験をしてみて、私はフリーランサーに転向した。
            <br />
            私はそこで働いたときに感じたことを経験することによって一種の自信ができた。
            <br />
            それは、「私は計画を立てる習慣」があるということでした。
            その計画を立てる習慣は、序盤には何もないように見えるが、長期間になると途方もない違いになることを体験した。{' '}
            <br />
            自分自身を根拠なく信じるのではなく、私の「習慣」を信じたので、その後、何を忘れることがあっても、「ああ、私なら書いておきます」「わたしなら、それに対する対応策をどこか計画しておかなければ」
            このような自ら忘れてしまいながらも自らを信じる「自信感」を獲得することができた。 <br />
            月曜日が楽しかった。仕事だけするのに一日一日がとても楽しかった。昔に働きたくなかった私を振り返ってみると、いくら考えても私は開発者になる運命だった。
            <br />
            いつの間にか、小学生のころの夢を叶えたようだ。しかし、一度も強く夢を叶えなければならないという欲を出したことがあった。私はただ、「生きた」だけ、夢を見ず、夢を「生きた」。今は、夢のクリークを再調整する必要があるようだ。
            メタバースをしようか？電子マネーを作ろうか？他の国に行ってその国を発展させることができる開発をするか？
            <br />
            <br />
            どんなことを想像してもとても楽しいのだ。
          </Typography>
          <Box sx={closeButtonWrapperStyle}>
            <Button onClick={handleClose} sx={closeButtonStyle}>
              CLOSE
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default StoryModal
