import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-[#f8f9fa] min-h-screen font-body text-slate-900">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
