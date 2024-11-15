import EmployerAnalyticsSection from "@/component/EmployerAnalyticsSection";
import EmployerESGSection from "@/component/EmployerESGSection";
import EmployerFeatureSection from "@/component/EmployerFeatureSection";
import EmployerHeroSection from "@/component/EmployerHeroSection";
import EmployerIntegrationSection from "@/component/EmployerIntegrationSection";
import EmployerOrganizationSection from "@/component/EmployerOrganizationSection";
import PlanSection from "@/component/PlanSection";
import React from "react";

const Employer = () => {
  return (
    <>
      <EmployerHeroSection />
      <EmployerFeatureSection />
      <EmployerIntegrationSection />
      <EmployerAnalyticsSection />
      <EmployerESGSection />
      <EmployerOrganizationSection />
      <PlanSection />
    </>
  );
};

export default Employer;
