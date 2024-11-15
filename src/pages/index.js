import AboutMeSection from '@/component/AboutMeSection';
import ApproachSection from '@/component/ApproachSection';
import BlogSection from '@/component/BlogSection';
import FeaturesSection from '@/component/FeaturesSection';
import HeroSection from '@/component/HeroSection';
import IntegrateOrganizationSection from '@/component/IntegrateOrganizationSection';
import PlanSection from '@/component/PlanSection';
import VideoSection from '@/component/VideoSection';

export default function Home() {
    return (
        <>
            {/* <button className='fixed top-10 -right-10 w-36 h-16 bg-enquiry-gradient rounded-t-[10px] text-center p-2 text-white transform rotate-[270deg] font-clashdisplay z-50'>
            Have Any Question?
          </button> */}
            <HeroSection />
            <ApproachSection />
            <AboutMeSection />
            <VideoSection />
            <FeaturesSection />
            <IntegrateOrganizationSection />
            <PlanSection />
            <BlogSection />
        </>
    );
}
