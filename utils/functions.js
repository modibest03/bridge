import Image from 'next/image';

export const chainNames = (value) => {
  if (value) {
    switch (value.toString()) {
      case '4':
        return 'Ethereum';
        break;
      case '97':
        return 'Binance Smart Chain';
        break;

      case '322':
        return 'Kucoin';
        break;
      case '80001':
        return 'Polygon';
        break;
      case '43113':
        return 'Avalanche';
        break;
      case '4002':
        return 'Fantom';
        break;
      default:
        return '-';
    }
  }
};

export const renderChain = (value) => {
  if (value) {
    switch (value.toString()) {
      case '4':
        return (
          <Image
            src='/etherium.png'
            alt='Etherrium Icon'
            width={32}
            height={32}
          />
        );
      case '97':
        return (
          <Image src='/binance.png' alt='Binance Icon' width={32} height={32} />
        );

      case '322':
        return (
          <Image src='/kucoin.png' alt='Kucoin Icon' width={32} height={32} />
        );
      case '80001':
        return (
          <Image src='/ellipse.png' alt='Polygon Icon' width={32} height={32} />
        );
      case '43113':
        return (
          <Image
            src='/avalanche.png'
            alt='Avalanche Icon'
            width={32}
            height={32}
          />
        );
      case '4002':
        return (
          <Image src='/fantom.png' alt='Fantom Icon' width={32} height={32} />
        );
      default:
        return '-';
    }
  }
};

export const debounce = (callback, wait) => {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
};
