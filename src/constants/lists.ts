// used to mark unsupported tokens, these are hosted lists of unsupported tokens


const COINGECKO_LIST = 'https://gist.githubusercontent.com/mosqueiro/7fdb03b3ce24bc194d17cafcb526ba07/raw/0017eae2dd637288ccce9189bd1bae07e2e20ac0/pancakeswap.json'
const BA_LIST = 'https://raw.githubusercontent.com/The-Blockchain-Association/sec-notice-list/master/ba-sec-list.json'

export const UNSUPPORTED_LIST_URLS: string[] = [BA_LIST]

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [

  COINGECKO_LIST,
  ...UNSUPPORTED_LIST_URLS // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
