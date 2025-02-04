
import './App.css'
import pic from '../src/assets/image/pic.jpg'

function App() {
  return (
    <>
    <div className='flex items-center flex-col my-6'>
      <div>
        <div className='border border-black rounded-md  p-2 flex items-center flex-col mx-auto'>
              <img className='w-10 h-10 rounded-full' src={pic} alt="" />
            <div className='font-bold'>Rey Ermino</div>
            <div className='text-center'>A Passionate FullStack Developer who loves to program</div>
        </div>

        <div className='mt-3'>
            <div className='text-lg font-bold mb-1'>Contact Information</div>
            <div className='border border-black rounded-sm p-1'>
              <div className='border border-black p-1'>
                  <div>Email:  Rey Ermino@example.com</div>
                  <div>Phone:0998-765-3246</div>
                  <div>Address: Legazpi City, Albay</div>
              </div>
            </div>
        </div>

        <div className='mt-3'>
            <div className='text-lg font-bold mb-1'>Skills</div>
            <div className='border border-black rounded-sm p-1'>
              <div className='border border-black p-1'>
                  <ul className='list-disc pl-5'>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                  </ul>
              </div>
            </div>
        </div>

        <div className='mt-3'>
            <div className='text-lg font-bold mb-1'>Work Experience</div>
            <div className='border border-black rounded-sm p-1'>
            <div className='border border-black rounded-sm p-1'>
              <div className='text-lg font-bold'>Frontend Developer at Tech Group</div>
              <div className='mt-2 italic  text-gray-400'>Feb 2019 - Present</div>
              <div className='mt-2   text-gray-400'>Developing and maintaining the front end of the company website.</div>
            </div>
             
            </div>
        </div>


        <div className='mt-3'>
            <div className='border border-black rounded-sm p-1'>
            <div className='border border-black rounded-sm p-1'>
              <div className='text-lg font-bold'>Full Stack Developer at CloudStaff </div>
              <div className='mt-2 italic  text-gray-400'>Dec 2017 - Jan 2019</div>
              <div className='mt-2   text-gray-400'>Work on various frontend and backend projects for company clients.</div>
            </div>
            </div>
        </div>

     
      </div>
    </div>
    </>
  )
}

export default App
