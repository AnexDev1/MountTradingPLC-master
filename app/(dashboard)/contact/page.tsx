import Navbar from '@/app/ui/dashboard/Navbar';
import Contact from '@/app/ui/hero/contact';

const page = () => {
  return (
    <div className={`min-h-screen`}>
      <Navbar />
      <Contact />
    </div>
  );
};

export default page;
