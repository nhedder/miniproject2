import BasicGrid from "../components/BasicGrid";
import CustomCard from "../components/CustomCard";
import VideoPlayer from "../components/VideoPlayer";
export default function Homepage() {
  // Save in pages/Homepage.jsx
  return (
    <div className="Homepage">
      <h1>Home</h1>
      <CustomCard title="Green Lizzo"> LOOK MA NO HANDS</CustomCard>
      <BasicGrid/>
      <VideoPlayer />
    </div>
  );
}