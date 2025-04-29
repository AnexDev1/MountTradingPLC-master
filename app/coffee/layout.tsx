import { ReactNode } from 'react';
import ResponsiveNavbar from '../ui/dashboard/ResponsiveNavbar';

export default function CoffeeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ResponsiveNavbar />
      <main>{children}</main>
    </div>
  );
}
