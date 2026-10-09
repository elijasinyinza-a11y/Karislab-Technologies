import Logo from "@/components/Logo";
import SiteNav from "@/components/SiteNav";
import TopBar from "@/components/TopBar";

export default function SiteHeader() {
  return (
    <header>
      <TopBar />
      <div className="relative border-b border-line-nav bg-white">
        <div className="page-container flex h-16 items-center justify-between md:h-20">
          <Logo imageClassName="h-auto w-[140px] md:w-[160px] xl:w-[170px]" />
          <SiteNav />
        </div>
      </div>
    </header>
  );
}
