import { ReactNode } from 'react';
import ResponsiveNavbar from '../ui/dashboard/ResponsiveNavbar';

export default function PharmaLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ResponsiveNavbar />
      <main>{children}</main>
    </div>
  );
}
