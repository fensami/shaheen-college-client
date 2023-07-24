import { Link } from "react-router-dom";


const ResearchPaper = () => {
  return (
    <div className="my-8">
      <p className="text-center font-bold text-4xl">Our Research Paper</p>

      <div className="w-11/12 mx-auto">
        <Link className="underline" to='https://www.cell.com/'>You Can See Our Research paper</Link>
      </div>
    </div>
  );
};

export default ResearchPaper;