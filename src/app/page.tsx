
export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">
          KZAI
        </h1>
        <p className="mt-4 text-lg font-serif">
          Problem Solving for AI based Applications
        </p>
      </main>

      <footer className="text-center pb-4">
        <p className="text-sm text-gray-500">
          Contact: <a href="mailto:kozanakyel@gmail.com" className="text-blue-500 hover:underline">kozanakyel@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}