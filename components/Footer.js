import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-200 mt-20">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img src="/Logo.png" alt="Logo" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-sm text-slate-400 leading-relaxed font-body font-medium">
              Your trusted, professional resource for USA immigration news, visa updates, and policy analysis.
            </p>
          </div>
          <div>
            <h4 className="font-bold headline-font text-white mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/category/visa-news" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Visa News</Link></li>
              <li><Link href="/category/visa-guides" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Visa Guides</Link></li>
              <li><Link href="/category/processing-times" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Processing Times</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold headline-font text-white mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Terms of Service</Link></li>
              <li><Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold headline-font text-white mb-6 uppercase tracking-widest text-sm">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors"><img src="/Twitter.jpg" alt="Twitter" className="w-8 h-8 rounded-full opacity-70 hover:opacity-100" /></Link>
              <Link href="/" className="text-slate-400 hover:text-white transition-colors"><img src="/Linkdin.png" alt="LinkedIn" className="w-8 h-8 rounded-full opacity-70 hover:opacity-100" /></Link>
              <Link href="/" className="text-slate-400 hover:text-white transition-colors"><img src="/Facebook.jpeg" alt="Facebook" className="w-8 h-8 rounded-full opacity-70 hover:opacity-100" /></Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center flex flex-col items-center justify-center">
          <p className="text-sm text-slate-500 font-medium">© 2024 The Digital Diplomat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
