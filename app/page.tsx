import Footer from './ui/dashboard/Footer';
import Navbar from './ui/dashboard/Navbar';
import Homepage from './ui/hero/homePage';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}