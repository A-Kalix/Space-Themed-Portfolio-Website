import StarsCanvas from "@/components/StarsCanvas";

export default function Home() {
  return (
    <main className="home-container">
      <StarsCanvas />
      
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="home-title">Ahmed Khalil | Portfolio</h1>
        <p className="home-subtitle">Environment initialized. Development in progress.</p>
      </div>
    </main>
  );
}
