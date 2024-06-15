import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parth Kapoor Dev",
  description: "Hi , I'm Parth Kapoor & this is my portfolio website🤗",
};

export default function SectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-[16rem] py-[6rem] max-md:px-8 ">
      {children}
    </div>
  );
}
