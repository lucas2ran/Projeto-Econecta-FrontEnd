import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel() {

  // site oficial https://maxmarinich.github.io/react-alice-carousel/#basic

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

  const items = [
    <div>
      <img src="https://github.com/tjfaccipieri.png" role="presentation" />
      <p>Github Econecta</p>
    </div>,
    <img src="https://cdn.discordapp.com/attachments/1094734846821138462/1113110623115554897/screenshot-17-6.png" role="presentation" />,
    <img src="https://cdn.discordapp.com/attachments/1094734846821138462/1113110996052103281/set-items-secondary-use-upcycling_530689-775.png" role="presentation" />,
    <img src="https://cdn.discordapp.com/attachments/1094734846821138462/1113111083960520724/upcycle-plastic-bottles-5526525-4622611.png" role="presentation" />,
    <img src="" role="presentation" />,
  ];

  return (
    <AliceCarousel mouseTracking items={items} autoPlay infinite responsive={responsive} />
  )
}

export default Carousel