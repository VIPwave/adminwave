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
    { name: '멜론', images: ['/guide/streaming/melonGuide.png'] },
    { name: '지니', images: ['/guide/streaming/genieGuide.png'] },
    { name: '벅스', images: ['/guide/streaming/bugsGuide.png'] },
    { name: 'FLO', images: ['/guide/streaming/floGuide.png'] },
    { name: 'VIBE', images: ['/guide/streaming/vibeGuide.png'] },
    {
      name: 'Spotify',
      images: [
        '/guide/streaming/spotifyGuide.png',
        '/guide/streaming/spotifyGuide2.png',
      ],
    },
    { name: 'Apple Music', images: ['/guide/streaming/applemusicGuide.png'] },
    {
      name: 'YouTube Music',
      images: ['/guide/streaming/youtubemusicGuide.png'],
    },
    {
      name: 'YouTube (PC / Mobile)',
      images: [
        '/guide/streaming/youtubeMVGuide1.jpg',
        '/guide/streaming/youtubeMVGuide2.jpg',
        '/guide/streaming/youtubeMVGuide3.jpg',
      ],
    },
  ],
  '음원 다운 가이드': [
    { name: '멜론 PC', images: ['/guide/download/melonPcDownload.jpg'] },
    {
      name: '멜론 Mobile',
      images: ['/guide/download/melonMobileDownload.jpg'],
    },
    { name: '지니 PC', images: ['/guide/download/geniePcDownload.jpg'] },
    {
      name: '지니 Mobile',
      images: ['/guide/download/genieMobileDownload.jpg'],
    },
    { name: '벅스 PC', images: ['/guide/download/bugsPcDownload.jpg'] },
    { name: '벅스 Mobile', images: ['/guide/download/bugsMobileDownload.jpg'] },
    { name: 'VIBE', images: ['/guide/download/vibeDownload.jpg'] },
    { name: 'KAKAO', images: ['/guide/download/kakaoDownload.jpg'] },
  ],
  '뮤비 다운 가이드': [
    { name: '멜론 캐시충전', images: ['/guide/download/melonMVDownload.jpg'] },
    { name: '멜론 PC', images: ['/guide/download/melonMVDownload3.jpg'] },
    { name: '멜론 Mobile', images: ['/guide/download/melonMVDownload2.jpg'] },
    { name: '벅스 PC', images: ['/guide/download/bugsMVDownload.jpg'] },
  ],
  '선물 가이드': [
    { name: '공지사항', images: ['/guide/gift/melonGift.jpg'] },
    { name: '멜론 Android', images: ['/guide/gift/melonAppGift.jpg'] },
    { name: '멜론 iOS', images: ['/guide/gift/meloniOSGift.jpg'] },
    { name: '멜론 PC', images: ['/guide/gift/melonPcGift.jpg'] },
  ],
  '음악 나누기 가이드': [
    { name: '지니', images: ['/guide/gift/genieMusicShare.jpg'] },
  ],
  '음악방송 가이드': [
    {
      name: '점수반영 및 투표 일정표',
      images: [
        '/guide/broadcast/voteCalendar.png',
        '/guide/broadcast/ratioTable.jpg',
      ],
    },
    {
      name: '음악중심',
      images: [
        '/guide/broadcast/musicCore1.jpg',
        '/guide/broadcast/musicCore2.png',
      ],
    },
    {
      name: '인기가요',
      images: [
        '/guide/broadcast/inkigayo1.png',
        '/guide/broadcast/inkigayo2.png',
        '/guide/broadcast/inkigayo3.png',
        '/guide/broadcast/inkigayo4.png',
      ],
    },
    {
      name: '엠카운트다운',
      images: [
        '/guide/broadcast/mcountdown1.png',
        '/guide/broadcast/mcountdown2.png',
      ],
    },
    {
      name: '뮤직뱅크',
      images: [
        '/guide/broadcast/musicbank1.png',
        '/guide/broadcast/musicbank2.png',
      ],
    },
    {
      name: '쇼챔피언',
      images: [
        '/guide/broadcast/showchamp1.png',
        '/guide/broadcast/showchamp2.png',
      ],
    },
    {
      name: '더쇼',
      images: [
        '/guide/broadcast/theShow1.png',
        '/guide/broadcast/theShow2.png',
      ],
    },
  ],
};
