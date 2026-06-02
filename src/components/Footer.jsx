import React from "react";
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="w-[90%] md:w-[80%] mx-auto rounded-2xl bg-white/85 border border-slate-200 shadow-xl text-slate-900 dark:bg-slate-900/80 dark:border-white/10 dark:text-white">
        <div className="px-6 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/20 text-amber-700 dark:bg-amber-300/10 dark:text-amber-200">
                <BookOpen className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">BookSearch</p>
                {/* <p className="text-sm text-slate-500 dark:text-slate-300">
                  Curated reads powered by Open Library.
                </p> */}
              </div>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-300">
              <p>© 2026 BookSearch. All Rights Reserved.</p>
            </div>
          </div>
          {/* <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
