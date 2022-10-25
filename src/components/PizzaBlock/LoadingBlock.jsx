import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={520}
      viewBox="0 0 280 520"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="136" cy="129" r="120" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="421" rx="0" ry="0" width="104" height="30" />
      <rect x="147" y="413" rx="30" ry="30" width="134" height="44" />
      <rect x="0" y="263" rx="6" ry="6" width="280" height="29" />
    </ContentLoader>
  );
}

export default LoadingBlock;
