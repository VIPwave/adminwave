export interface Guide {
  name: string;
  images: string[];
}

export type TAB =
  | '스트리밍 가이드'
  | '음원 다운 가이드'
  | '뮤비 다운 가이드'
  | '선물 가이드'
  | '음악 나누기 가이드'
  | '음악방송 가이드';

export const TABS: TAB[] = [
  '스트리밍 가이드',
  '음원 다운 가이드',
  '뮤비 다운 가이드',
  '선물 가이드',
  '음악 나누기 가이드',
  '음악방송 가이드',
];

export const FILTERS: Record<TAB, Guide[]> = {
  '스트리밍 가이드': [
    { name: '멜론', images: ['/melonGuide.png'] },
    { name: '지니', images: ['/genieGuide.png'] },
    { name: '벅스', images: ['/bugsGuide.png'] },
    { name: 'FLO', images: ['/floGuide.png'] },
    { name: 'VIBE', images: ['/vibeGuide.png'] },
    { name: 'Spotify', images: ['/spotifyGuide.png', '/spotifyGuide2.png'] },
    { name: 'Apple Music', images: ['/applemusicGuide.png'] },
    { name: 'YouTube Music', images: ['/youtubemusicGuide.png'] },
    {
      name: 'YouTube (PC / Mobile)',
      images: ['/youtube.jpeg'],
    },
  ],
  '음원 다운 가이드': [
    { name: '멜론 PC', images: ['/melonPcDownload.jpg'] },
    { name: '멜론 Mobile', images: ['/melonMobileDownload.jpg'] },
    { name: '지니 PC', images: ['/geniePcDownload.jpg'] },
    { name: '지니 Mobile', images: ['/genieMobileDownload.jpg'] },
    { name: '벅스 PC', images: ['/bugsPcDownload.jpg'] },
    { name: '벅스 Mobile', images: ['/bugsMobileDownload.jpg'] },
    { name: 'VIBE', images: ['/vibeDownload.jpg'] },
    { name: 'KAKAO', images: ['/kakaoDownload.jpg'] },
  ],
  '뮤비 다운 가이드': [
    { name: '멜론 캐시충전', images: ['/melonMVDownload.jpg'] },
    { name: '멜론 PC', images: ['/melonMVDownload3.jpg'] },
    { name: '멜론 Mobile', images: ['/melonMVDownload2.jpg'] },
    { name: '벅스 PC', images: ['/bugsMVDownload.jpg'] },
  ],
  '선물 가이드': [
    { name: '공지사항', images: ['/melonGift.jpg'] },
    { name: '멜론 Android', images: ['/melonAppGift.jpg'] },
    { name: '멜론 iOS', images: ['/meloniOSGift.jpg'] },
    { name: '멜론 PC', images: ['/melonPcGift.jpg'] },
  ],
  '음악 나누기 가이드': [{ name: '지니', images: ['/genieMusicShare.jpg'] }],
  '음악방송 가이드': [
    {
      name: '점수반영 및 투표 일정표',
      images: ['/voteCalendar.png', '/ratioTable.jpeg'],
    },
    { name: '음악중심', images: ['/musicCore1.jpg', '/musicCore2.png'] },
    {
      name: '인기가요',
      images: [
        '/inkigayo1.png',
        '/inkigayo2.png',
        '/inkigayo3.png',
        '/inkigayo4.png',
      ],
    },
    { name: '엠카운트다운', images: ['/mcountdown1.png', '/mcountdown2.png'] },
    { name: '뮤직뱅크', images: ['/musicbank1.png', '/musicbank2.png'] },
    { name: '쇼챔피언', images: ['/showchamp1.png', '/showchamp2.png'] },
    { name: '더쇼', images: ['/theShow1.png', '/theShow2.png'] },
  ],
};
