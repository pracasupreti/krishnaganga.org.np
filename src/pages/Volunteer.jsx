import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Volunteer() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date().toISOString().split('T')[0];
    setCurrentDate(date); // ✅ use the setCurrentDate from useState
  }, []);
  
 

  return (
    <>
      <section className='container mx-auto my-8'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-center text-3xl font-bold'>
            <span className='pb-1' style={{ borderBottom: "4px solid transparent", borderImage: "linear-gradient(to right, red, yellow, blue) 1" }}><span className='font-[400]'>We need you,</span> Help us around</span>
          </h2>

          <form className='lg:w-[50%] md:w-[60%] w-[80%] shadow-lg px-4 py-2 mx-auto flex flex-col gap-4'>
            <label htmlFor="name">
              <p>Full Name :</p>
              <input type="text" name='name' className='name capitalize border px-4 py-1 w-full outline-none mb-2' id='name' />
            </label>
            <div className='flex flex-wrap gap-4 gap-y-0'>
              <p>Gender : </p>
              <div>
                <input type="radio" name="gender" value={'male'} /> Male
              </div>
              <div>
                <input type="radio" name="gender" value={'female'} /> Female
              </div>
              <div>
                <input type="radio" name="gender" value={'others'} /> Others
              </div>
            </div>
            <label htmlFor='dob'><p>Date Of Birth : </p>
              <input type="date" name="dob" id="dob" className='border w-full outline-none px-4 py-1' />
            </label>
            <label htmlFor='number'><p>Phone Number : </p>
              <div className='flex gap-2'>
                <select className='border px-4 py-1 outline-none w-1/2' onChange={(e) => { console.log('Selected Code:', e.target.value); }} name='countryCode' defaultValue='+1'>
                  <option value='+61'>🇦🇺 +61 (Australia)</option>
                  <option value='+55'>🇧🇷 +55 (Brazil)</option>
                  <option value='+86'>🇨🇳 +86 (China)</option>
                  <option value='+20'>🇪🇬 +20 (Egypt)</option>
                  <option value='+33'>🇫🇷 +33 (France)</option>
                  <option value='+49'>🇩🇪 +49 (Germany)</option>
                  <option value='+91'>🇮🇳 +91 (India)</option>
                  <option value='+62'>🇮🇩 +62 (Indonesia)</option>
                  <option value='+81'>🇯🇵 +81 (Japan)</option>
                  <option value='+60'>🇲🇾 +60 (Malaysia)</option>
                  <option value='+977'>🇳🇵 +977 (Nepal)</option>
                  <option value='+64'>🇳🇿 +64 (New Zealand)</option>
                  <option value='+92'>🇵🇰 +92 (Pakistan)</option>
                  <option value='+63'>🇵🇭 +63 (Philippines)</option>
                  <option value='+7'>🇷🇺 +7 (Russia)</option>
                  <option value='+65'>🇸🇬 +65 (Singapore)</option>
                  <option value='+82'>🇰🇷 +82 (South Korea)</option>
                  <option value='+34'>🇪🇸 +34 (Spain)</option>
                  <option value='+44'>🇬🇧 +44 (UK)</option>
                  <option value='+1'>🇺🇸 +1 (USA)</option>
                  <option value='+39'>🇮🇹 +39 (Italy)</option>

                  {/* Add more or generate from a list */}
                </select>
                <input type='text' maxLength={10} pattern='[0-9]*' inputMode='numeric' name="number" id="number" className='border w-full px-4 py-1 outline-none' onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                }} />
              </div>
            </label>
            <label htmlFor="email">
              <p>Email-Address : </p>
              <input type="email" id='email' name='email' className='w-full px-4 py-1 outline-none border' placeholder='example@gmail.com' />
            </label>
            <label htmlFor="address">
              <p>Current Address : </p>
              <input type="text" id='address' name='address' className='w-full px-4 py-1 outline-none border' placeholder='123 Main St, City, State, ZIP' />
            </label>
            <label htmlFor="nationality">
              <p>Nationality : </p>
              <input type="text" id='nationality' name='nationality' className='w-full px-4 py-1 outline-none border' />
            </label>
            <label htmlFor="availability">
              <p>Availability</p>
              <div className='flex flex-col gap-2'>
                <div className='flex gap-6 gap-y-0 flex-wrap'>
                  <span>Monday : </span>
                  <div>
                    <input type="checkbox" name="monday" value="7AM-10AM" /> (7AM-10AM)
                  </div>
                  <div>
                    <input type="checkbox" name="monday" value="10AM-4PM" /> (10AM-4PM)
                  </div>
                  <div>
                    <input type="checkbox" name="monday" value="4PM-11PM" /> (4PM-11PM)
                  </div>
                </div>

                <div className='flex gap-6 gap-y-0 flex-wrap'>
                  <span>Tuesday : </span>
                  <div>
                    <input type="checkbox" name="tuesday" value="7AM-10AM" /> (7AM-10AM)
                  </div>
                  <div>
                    <input type="checkbox" name="tuesday" value="10AM-4PM" /> (10AM-4PM)
                  </div>
                  <div>
                    <input type="checkbox" name="tuesday" value="4PM-11PM" /> (4PM-11PM)
                  </div>
                </div>

                <div className='flex gap-6 gap-y-0 flex-wrap'>
                  <span>Wednesday : </span>
                  <div>
                    <input type="checkbox" name="wednesday" value="7AM-10AM" /> (7AM-10AM)
                  </div>
                  <div>
                    <input type="checkbox" name="wednesday" value="10AM-4PM" /> (10AM-4PM)
                  </div>
                  <div>
                    <input type="checkbox" name="wednesday" value="4PM-11PM" /> (4PM-11PM)
                  </div>
                </div>

                <div className='flex gap-6 gap-y-0 flex-wrap'>
                  <span>Thursday : </span>
                  <div>
                    <input type="checkbox" name="thursday" value="7AM-10AM" /> (7AM-10AM)
                  </div>
                  <div>
                    <input type="checkbox" name="thursday" value="10AM-4PM" /> (10AM-4PM)
                  </div>
                  <div>
                    <input type="checkbox" name="thursday" value="4PM-11PM" /> (4PM-11PM)
                  </div>
                </div>

                <div className='flex gap-6 gap-y-0 flex-wrap'>
                  <span>Friday : </span>
                  <div>
                    <input type="checkbox" name="friday" value="7AM-10AM" /> (7AM-10AM)
                  </div>
                  <div>
                    <input type="checkbox" name="friday" value="10AM-4PM" /> (10AM-4PM)
                  </div>
                  <div>
                    <input type="checkbox" name="friday" value="4PM-11PM" /> (4PM-11PM)
                  </div>
                </div>

                <div className='flex gap-6 gap-y-0 flex-wrap'>
                  <span>Saturday : </span>
                  <div>
                    <input type="checkbox" name="saturday" value="7AM-10AM" /> (7AM-10AM)
                  </div>
                  <div>
                    <input type="checkbox" name="saturday" value="10AM-4PM" /> (10AM-4PM)
                  </div>
                  <div>
                    <input type="checkbox" name="saturday" value="4PM-11PM" /> (4PM-11PM)
                  </div>
                </div>

                <div className='flex gap-6 gap-y-0 flex-wrap'>
                  <span>Sunday : </span>
                  <div>
                    <input type="checkbox" name="sunday" value="7AM-10AM" /> (7AM-10AM)
                  </div>
                  <div>
                    <input type="checkbox" name="sunday" value="10AM-4PM" /> (10AM-4PM)
                  </div>
                  <div>
                    <input type="checkbox" name="sunday" value="4PM-11PM" /> (4PM-11PM)
                  </div>
                </div>
              </div>
            </label>
            <label htmlFor="area">
              <p>Preferred Area of Volunteering</p>
              <select className='w-full border outline-none px-4 py-1' name="volunteer_area" id="area" onChange={(e) => {
                const inputField = document.getElementById('otherAreaInput');
                if (e.target.value === 'others') {
                  inputField.style.display = 'block'; // Show the input field when 'Others' is selected
                } else {
                  inputField.style.display = 'none'; // Hide it when another option is selected
                }
              }}>
                <option value="" disabled selected>Select an option</option>
                <option value="Counseling Support">Counseling Support</option>
                <option value="Recreational Activities (art/music)">Recreational Activities (art/music)</option>
                <option value="Administrative Help">Administrative Help</option>
                <option value="Outreach & Awareness">Outreach & Awareness</option>
                <option value="Mentoring">Mentoring</option>
                <option value="Event Support">Event Support</option>
                <option value="Medical Support (for professionals)">Medical Support (for professionals)</option>
                <option value="others">Others</option>
              </select>
              <input type="text" id="otherAreaInput" className='outline-none border px-4 py-1 w-full' style={{ display: 'none' }} placeholder="Please specify" />
            </label>

            <label htmlFor="area">
              <p>Do you have any previous volunteering experience?</p>
              <select className='w-full border outline-none px-4 py-1' defaultChecked='0' name="volunteer_experience" id="area" onChange={(e) => {
                const inputField = document.getElementById('yes');
                if (e.target.value === 'yes') {
                  inputField.style.display = 'block'; // Show the input field when 'Others' is selected
                } else {
                  inputField.style.display = 'none'; // Hide it when another option is selected
                }
              }}>
                <option value="" disabled selected>Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <input type="text" id="yes" className='outline-none border px-4 py-1 w-full' style={{ display: 'none' }} placeholder="Please specify" />
            </label>
            <label htmlFor="reason">
              <p>Why do you want to volunteer with us?</p>
              <textarea name="reason_volunteer" id="reason" className='w-full border outline-none px-4 py-1'></textarea>
            </label>


            <label htmlFor="skill">
              <p>Do you have any relevant qualifications, skills, or training?</p>
              <select className='w-full border outline-none px-4 py-1' defaultChecked='0' name="skill" id="skill" onChange={(e) => {
                const inputField = document.getElementById('yes1');
                if (e.target.value === 'yes1') {
                  inputField.style.display = 'block'; // Show the input field when 'Others' is selected
                } else {
                  inputField.style.display = 'none'; // Hide it when another option is selected
                }
              }}>
                <option value="" disabled selected>Select an option</option>
                <option value="yes1">Yes</option>
                <option value="no">No</option>
              </select>
              <input type="text" id="yes1" className='outline-none border px-4 py-1 w-full' style={{ display: 'none' }} placeholder="Please specify" />
            </label>

            <label htmlFor="addiction">
              <p>Do you have any medical conditions we should be aware of?</p>
              <select className='w-full border outline-none px-4 py-1' defaultChecked='0' name="addiction" id="addiction" onChange={(e) => {
                const inputField = document.getElementById('yes2');
                if (e.target.value === 'yes2') {
                  inputField.style.display = 'block'; // Show the input field when 'Others' is selected
                } else {
                  inputField.style.display = 'none'; // Hide it when another option is selected
                }
              }}>
                <option value="" disabled selected>Select an option</option>
                <option value="yes2">Yes</option>
                <option value="no">No</option>
              </select>
              <input type="text" id="yes2" className='outline-none border px-4 py-1 w-full' style={{ display: 'none' }} placeholder="Please specify" />
            </label>

            <label htmlFor="recovery">
              <p>Are you in recovery yourself?</p>
              <select className='w-full border outline-none px-4 py-1' defaultChecked='0' name="recovery_stage" id="recovery" onChange={(e) => {
                const inputField = document.getElementById('yes3');
                if (e.target.value === 'yes3') {
                  inputField.style.display = 'block'; // Show the input field when 'Others' is selected
                } else {
                  inputField.style.display = 'none'; // Hide it when another option is selected
                }
              }}>
                <option value="" disabled selected>Select an option</option>
                <option value="yes3">Yes</option>
                <option value="no">No</option>
              </select>
              <input type="text" id="yes3" className='outline-none border px-4 py-1 w-full' style={{ display: 'none' }} placeholder="Please specify" />
            </label>

            <label htmlFor="recovery">
              <p>Have you ever worked in a rehab or health-related setting before?</p>
              <select className='w-full border outline-none px-4 py-1' defaultChecked='0' name="work_experience" id="recovery" onChange={(e) => {
                const inputField = document.getElementById('yes4');
                if (e.target.value === 'yes4') {
                  inputField.style.display = 'block'; // Show the input field when 'Others' is selected
                } else {
                  inputField.style.display = 'none'; // Hide it when another option is selected
                }
              }}>
                <option value="" disabled selected>Select an option</option>
                <option value="yes4">Yes</option>
                <option value="no">No</option>
              </select>
              <input type="text" id="yes4" className='outline-none border px-4 py-1 w-full' style={{ display: 'none' }} placeholder="Please specify" />
            </label>

            <label htmlFor="e_name">
              <p>Emergency Contact Name:</p>
              <input type="text" id='e_name' className='border outline-none w-full px-4 py-1'/>
            </label>

            <label htmlFor='e_number'><p>Phone Number : </p>
              <div className='flex gap-2'>
                <select className='border px-4 py-1 outline-none w-[50%]' onChange={(e) => { console.log('Selected Code:', e.target.value); }} name='countryCode' defaultValue='+1'>
                  <option value='+61'>🇦🇺 +61 (Australia)</option>
                  <option value='+55'>🇧🇷 +55 (Brazil)</option>
                  <option value='+86'>🇨🇳 +86 (China)</option>
                  <option value='+20'>🇪🇬 +20 (Egypt)</option>
                  <option value='+33'>🇫🇷 +33 (France)</option>
                  <option value='+49'>🇩🇪 +49 (Germany)</option>
                  <option value='+91'>🇮🇳 +91 (India)</option>
                  <option value='+62'>🇮🇩 +62 (Indonesia)</option>
                  <option value='+81'>🇯🇵 +81 (Japan)</option>
                  <option value='+60'>🇲🇾 +60 (Malaysia)</option>
                  <option value='+977'>🇳🇵 +977 (Nepal)</option>
                  <option value='+64'>🇳🇿 +64 (New Zealand)</option>
                  <option value='+92'>🇵🇰 +92 (Pakistan)</option>
                  <option value='+63'>🇵🇭 +63 (Philippines)</option>
                  <option value='+7'>🇷🇺 +7 (Russia)</option>
                  <option value='+65'>🇸🇬 +65 (Singapore)</option>
                  <option value='+82'>🇰🇷 +82 (South Korea)</option>
                  <option value='+34'>🇪🇸 +34 (Spain)</option>
                  <option value='+44'>🇬🇧 +44 (UK)</option>
                  <option value='+1'>🇺🇸 +1 (USA)</option>
                  <option value='+39'>🇮🇹 +39 (Italy)</option>

                  {/* Add more or generate from a list */}
                </select>
                <input type='text' maxLength={10} pattern='[0-9]*' inputMode='numeric' name="e_number" id="e_number" className='border w-full px-4 py-1 outline-none' onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                }} />
              </div>
            </label>

            <label htmlFor="recovery">
              <p>Relation</p>
              <select className='w-full border outline-none px-4 py-1' defaultChecked='0' name="recovery_stage" id="recovery" onChange={(e) => {
                const inputField = document.getElementById('otherRealtion');
                if (e.target.value === 'otherRealtion') {
                  inputField.style.display = 'block'; // Show the input field when 'Others' is selected
                } else {
                  inputField.style.display = 'none'; // Hide it when another option is selected
                }
              }}>
                <option value="" disabled selected>Select an option</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="brother">Brother</option>
                <option value="sister">Sister</option>
                <option value="husband">Husband</option>
                <option value="wife">Wife</option>
                <option value="otherRelation">Others</option>
              </select>
              <input type="text" id="otherRealtion" className='outline-none border px-4 py-1 w-full' style={{ display: 'none' }} placeholder="Please specify" />
            </label>


            <label htmlFor="application date">
              <input type="date" value={currentDate} name="application_date" id="application_date" className='border w-full px-4 py-2 outline-none' />
            </label>

            <label htmlFor="policy">
              <input type="checkbox" name="policy" id="policy" className='w-4 h-4' />&nbsp; I agree to follow the center’s rules and confidentiality policy
            </label>

            
            <div className='flex gap-4'>
            <button type='submit' className='border outline-none px-4 py-1 hover:shadow-lg '>Submit</button>
            <button type='clear' className='border outline-none px-4 py-1 hover:shadow-lg'><Link to={'/volunteer'}>Clear</Link></button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Volunteer
