import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: '流行', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: '电子', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: '摇滚', value: 'ROCK' },
  { title: '拉丁', value: 'LATIN' },
  { title: '电影配乐', value: 'FILM_TV' },
  { title: '乡村音乐', value: 'COUNTRY' },
  { title: '世界音乐', value: 'WORLDWIDE' },
  { title: '雷鬼', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const links = [
  { name: '发现', to: '/', icon: HiOutlineHome },
  { name: '附近', to: '/around-you', icon: HiOutlinePhotograph },
  { name: '热门歌手', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: '热门榜单', to: '/top-charts', icon: HiOutlineHashtag },
];
