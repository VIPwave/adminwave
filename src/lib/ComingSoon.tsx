export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-40 animate-wave1"></div>
        {/* 위에서 내려오는 그라데이션 애니메이션 */}
        {/* <div className="absolute inset-0  h-1/2 bg-gradient-to-b from-primary to-transparent opacity-20 animate-wave2"></div> */}
      </div>
      <h1 className="text-2xl font-bold z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-900 shadow-lg custom-pulse">
        VIP wave
      </h1>
      <style jsx>{``}</style>
    </div>
  );
}
