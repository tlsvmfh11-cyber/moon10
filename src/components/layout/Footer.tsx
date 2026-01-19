export default function Footer() {
    return (
      <footer className="bg-guide-card py-16 border-t border-guide-text/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">GANGNAM DALTO</h2>
          <p className="text-guide-text/60 text-sm mb-8">
            Beginner's Guide to Hyper Public.<br />
            Gangnam-gu, Seoul, Republic of Korea
          </p>
          <p className="text-xs text-guide-text/40">
            &copy; {new Date().getFullYear()} DALTO. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
