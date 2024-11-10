import Image from "next/image";

export default function About() {
  return (
  
  <div className="Right-Section bg-slate-200" >
    <h1 className="text-4xl bg-slate-400 text-center"><b>ABOUT US</b></h1>
    <br/>
    <div className="flex justify-center">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrA5wADUufxNYmKuH6uDaeO26t1ra3xRyXyw&s" height={200} width={200}></img>
    </div>
    <section id="personal-info">
        <h1 className="text-4xl flex justify-center"><b>PERSONAL INFORMATION</b></h1>
        <p className="text-xl text-blue-950"><b> Name:</b> Afshan Ahmar</p>        
        <p className="text-xl text-blue-950"><b> Mobile:</b> 1234-5678923</p>
        <p className="text-xl text-blue-950"><b> Email:</b> <a href="mailto:xyz@gamil.com">xyz@gmail.com</a></p>
<p className="text-xl text-blue-950"><b>linkedin:</b><a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad
    _flagship3_profile_self_edit_contact-info%3B4ih4vrRuTqapt7dhc%2F0%2BUw%3D%3D" >www.linkedin.com</a> </p>
</section>

<section id="EDUCATION" ><h1 className="text-center text-4xl"><b>Education </b></h1></section>
<p className="text-xl text-blue-950"><b> Masters:</b> M.Sc in Applied Physics from University of Karachi </p>
<p className="text-xl text-blue-950"><b> Bachelors:</b> B.Sc in Pre-Eng from XYZ Govt College for Women </p>
<p className="text-xl text-blue-950"><b> Intermediate:</b> F.Sc in Pre-Eng from XYZ Govt College for Women </p>
<p className="text-xl text-blue-950"><b> Matriculation</b> H.Sc in Science from XYZ model school  </p>
<section id="Certification">
          <h1 className="text-4xl text-center"><b> Certifications</b></h1> 
          <p className="text-xl text-blue-950">
            <b>DIT:</b> From Commit Institute Main Shahrae Faisal
          </p>
          <p className="text-xl text-blue-950"><b>Artificial Intelligence,Web 3.0 and Metaverse</b> From Governor House Karachi (Ongoing)</p>     
          <p className="text-xl text-blue-950"><b>M.Sc in APPLIED PHYSICS</b> From Karachi University </p> 
          <p className="text-xl text-blue-950"><b>Teachers Training Program</b> From National Institute of Programming Karachi</p>     
    <p className="text-xl text-blue-950"><b> Asian Physics Teachers Training Program</b> From Karchi</p>

            </section>




</div>
  )
}