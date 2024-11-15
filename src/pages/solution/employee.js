import EmployeContextSection from '@/component/EmployeContextSection';
import EmployeFeatureSection from '@/component/EmployeFeatureSection';
import EmployeGamificationSection from '@/component/EmployeGamificationSection';
import EmployeHeroSection from '@/component/EmployeHeroSection';
import EmployeOrganizationSection from '@/component/EmployeOrganizationSection';
import EmployeProductivitySection from '@/component/EmployeProductivitySection';
import PlanSection from '@/component/PlanSection';
import React from 'react';

const Employee = () => {
    return (
        <>
            <EmployeHeroSection />
            <EmployeFeatureSection />
            <EmployeContextSection />
            <EmployeProductivitySection />
            <EmployeGamificationSection />
            <EmployeOrganizationSection />
            <PlanSection />
        </>
    );
};

export default Employee;
