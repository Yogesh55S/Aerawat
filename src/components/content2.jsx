import img1 from '../assets/img.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img2.jpg';
import img6 from '../assets/img.jpg';
import "../css/content.css";
const cards = [
  { image: img1, title: 'Fine Jewellery' },   // Large
  { image: img2, title: 'Shringaar' },        // Small
  { image: img3, title: 'Kalapatt' },         // Large
  { image: img4, title: 'Crystals' },         // Large
  { image: img5, title: 'Crystals' },         // Small
  { image: img6, title: 'Treasured Gifts' },  // Large
];

const FullScreenGrid = () => {
  return (
    <div className="w-full h-[750px] flex items-center justify-center bg-white third">
      <div className="flex flex-col gap-[10px] h-full max-w-[1440px] px-[50px] py-[70px]">
        
        <div className="flex gap-[10px]">
          
          <div className="w-[658px] h-[300px] rounded-[8px] border border-gray-300 overflow-hidden relative card">
            <img src={cards[0].image} alt="Fine Jewellery" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-white/80 text-center py-3">
              <h3 className="text-[#6a1b1a] text-lg font-semibold">{cards[0].title}</h3>
            </div>
          </div>

          <div className="w-[431px] h-[300px] rounded-[8px] border border-gray-300 overflow-hidden relative card">
            <img src={cards[1].image} alt="Shringaar - A beautiful decorative item" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-white/80 text-center py-3">
              <h3 className="text-[#6a1b1a] text-lg font-semibold">{cards[1].title}</h3>
            </div>
          </div>

          <div className="w-[431px] h-[300px] rounded-[8px] border border-gray-300 overflow-hidden relative card">
            <img src={cards[2].image} alt="Kalapatt - A traditional art form" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-white/80 text-center py-3">
              <h3 className="text-[#6a1b1a] text-lg font-semibold">{cards[2].title}</h3>
            </div>
          </div>
        </div>

        <div className="flex gap-[10px]">
          <div className="w-[431px] h-[300px] rounded-[8px] border border-gray-300 overflow-hidden relative card">
            <img src={cards[3].image} alt="Crystals - A collection of sparkling gems" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-white/80 text-center py-3">
              <h3 className="text-[#6a1b1a] text-lg font-semibold">{cards[3].title}</h3>
            </div>
          </div>

          <div className="w-[431px] h-[300px] rounded-[8px] border border-gray-300 overflow-hidden relative card">
            <img src={cards[4].image} alt="Crystals - A small decorative item" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-white/80 text-center py-3">
              <h3 className="text-[#6a1b1a] text-lg font-semibold">{cards[4].title}</h3>
            </div>
          </div>

          <div className="w-[658px] h-[300px] rounded-[8px] border border-gray-300 overflow-hidden relative card">
            <img src={cards[5].image} alt="Treasured Gifts - A collection of valuable items" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-white/80 text-center py-3">
              <h3 className="text-[#6a1b1a] text-lg font-semibold">{cards[5].title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenGrid;
