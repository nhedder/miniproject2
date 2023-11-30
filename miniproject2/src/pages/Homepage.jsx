import BasicGrid from "../components/BasicGrid";
import CustomCard from "../components/CustomCard";
import VideoPlayer from "../components/VideoPlayer";
export default function Homepage() {
  // Save in pages/Homepage.jsx
  
  return (
    <div className="Homepage">
      <h1>Home</h1>
      <h2>Our developers are hard at work constructing our online store</h2>
      <img
        src="https://media3.giphy.com/media/tAeB6dptxnoli/giphy.gif?cid=ecf05e47w7dnkpkwvgek3aqcxh8qzmzj2w1tsunuiyswqleg&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        width="200px"
      />
      <h2>
        Until then, please visit us at our distillery on 123 Fake Street,
        Wairarapa
      </h2>
    </div>
  );
}
