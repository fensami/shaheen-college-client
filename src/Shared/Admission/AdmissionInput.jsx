import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AdmissionInput = () => {
  const {user} = useContext(AuthContext)
  const data = useLoaderData()
  console.log(data);
  const { college_name } = data


  const resetForm = () => {
    const form = document.getElementById('admissionForm');
    form.reset();
  };

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const collegeName = form.collegeName.value;
    const candidateName = form.candidateName.value;
    const subject = form.subject.value;
    const candidateEmail = form.candidateEmail.value;
    const candidatePhoneNumber = form.candidatePhoneNumber.value;
    const address = form.address.value;
    const dateOfBirth = form.dateOfBirth.value;
    const photoUrl = form.photoUrl.value;
    console.log(collegeName, candidateName, subject, candidateEmail, candidatePhoneNumber, address, dateOfBirth, photoUrl);

    const addCollege = {
      collegeName,
      candidateName,
      subject,
      candidateEmail,
      candidatePhoneNumber,
      address,
      dateOfBirth,
      photoUrl
    }
    resetForm()
   fetch('https://shaheen-college-server.vercel.app/allAdmissionCollege',{
    method: "POST",
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(addCollege)
   })
   .then(res => res.json())
   .then(data => console.log(data))
   Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Successfully applied',
    showConfirmButton: false,
    timer: 1500
  })

  }


  return (
    <div className="text-black">
      




      <>
        <div className="md:w-1/2  bg-[#bb9368] my-12 rounded-lg mx-auto px-4 py-8">
          <h1 className="text-3xl text-white font-bold mb-4 text-center"></h1>
          <form id="admissionForm" onSubmit={handleSubmit} className='font-bold'>

            <div className=" mb-4">
              <label className="block mb-2 text-white">
                College_Name
              </label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3"
                type="text"
                name='collegeName'
                value={college_name}
                required
              />
            </div>


            <div className="mb-4">
              <label className="block mb-2 text-white" htmlFor="name">
                Candidate Name
              </label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3"
                type="text"
                name='candidateName'
                placeholder='Candidate Name'
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-white">
                Subject Select
              </label>
              <select
                className="w-full border rounded py-2 px-3"
                name='subject' placeholder="select"
              >
                <>
                  {/* <option >Select a subject</option> */}
                  <option value="Science">Science</option>
                  <option value="Commaerce">Commaerce</option>
                  <option value="Arts">Arts</option>

                </>
              </select>
            </div>

            

            <div className="mb-4">
              <label className="block mb-2 text-white">
                Candidate Email
              </label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3"
                type="email"
                value={user.email}
                name='candidateEmail'
                placeholder='Candidate Email'
                required

              />
            </div>

          

            <div className="mb-4">
              <label className="block mb-2 text-white" htmlFor="price">
                Candidate Phone number
              </label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3"
                type="number"
                name='candidatePhoneNumber'
                placeholder='Phone Number'
                required

              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-white" htmlFor="rating">
                Address
              </label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3"
                type="text"
                name='address'
                placeholder='Address'
                required

              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-white">
                Date Of Birth
              </label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3"
                type="date"
                name='dateOfBirth'
                placeholder='Available Quantity'
                required
              />
            </div>

            <div className=" mb-4">
              <label className="block mb-2 text-white">
                Picture URL
              </label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3"
                type="text"
                name='photoUrl'
                placeholder='Picture Url'
                required
              />
            </div>

            

           <div className="text-center">
           <button  className="btn btn-outline font-bold border-2 border-black ">Submit</button>
           </div>

          </form>
        </div>
      </>

    </div>
  );
};

export default AdmissionInput;