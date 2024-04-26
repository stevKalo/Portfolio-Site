export default function VideoBackground() {
  return (
    <div className='video-background'>
      <video autoPlay muted loop playsInline controls>
        <source src='../../assets/drone/Drone-Loop.mp4' type='video/mp4' />
      </video>
    </div>
  );
}
