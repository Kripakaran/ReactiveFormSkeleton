import { AddressInfo } from './AddressInfo';
import { EducationInfo } from './EducationInfo';
import { EmploymentInfo } from './EmploymentInfo';
import { PersonalInfo } from './personalInfo';
import { RelationshipInfo } from './RelationshipInfo';
import { skills } from './skills';



export interface Register{
    personalInfo: PersonalInfo,
    addressInfo: AddressInfo,
    employmentInfo: EmploymentInfo,
    educationInfo: EducationInfo,
    relationshipInfo: RelationshipInfo,
    skills: skills
}