import React from "react";
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="container w-[92%] md:w-[80%] mx-auto rounded-2xl bg-white/80 border border-slate-200 shadow-xl text-slate-900 dark:bg-slate-900/70 dark:border-white/10 dark:text-white">
        <div className="px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/20 text-amber-700 dark:bg-amber-300/10 dark:text-amber-200">
              <BookOpen className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold">BookSearch</p>
              {/* <p className="text-sm text-slate-300">
                Open Library powered discovery.
              </p> */}
            </div>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-300">
            {/* <p>Built for fast, friendly book browsing.</p> */}
            <p className="mt-1">© 2026 BookSearch. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
