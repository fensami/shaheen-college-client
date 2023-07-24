import CollegeCard from "../CollegeCard/CollegeCard";
import CollegeGraduateGallery from "../CollegeGraduateGallery/CollegeGraduateGallery";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import ReviewAndFeedback from "../ReviewAndFeedback/ReviewAndFeedback";


const Home = () => {
  return (
    <div>
      <CollegeCard></CollegeCard>
      <CollegeGraduateGallery></CollegeGraduateGallery> 
      <ResearchPaper></ResearchPaper> 
      <ReviewAndFeedback></ReviewAndFeedback>
      </div>
  );
};

export default Home;