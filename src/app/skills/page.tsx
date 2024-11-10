import Image from "next/image";

export default function Skills() {
  return (
  <div className=" bg-slate-300 text-blue-950 flex ">
    <img src="https://icon2.cleanpng.com/20181115/coe/kisspng-soft-skills-clip-art-stock-illustration-vector-gra-soft-skills-1713921855919.webp"
    height={600} width={600}></img>
  
  <section id="skills">
    <h1 className="text-4xl flex justify-center"><b>Skills</b></h1>
    <ul> 
        <div className="text-xl text-center">
        <li><b>Specialization in Electronics Engineering</b></li>
        <li><b>Ms-Office</b></li>
        <li><b>Typescript</b></li>
        <li><b>HTML</b></li>
        <li><b>CSS</b></li>
        <li><b>Communication Skills</b></li>
        <li><b>Javascript</b></li>
        <li><b>Figma</b></li>
        </div>
    </ul>
    
</section> 

<section id="Work-Experience">
    <h1 className="text-4xl flex justify-center"><b>Work Experience</b></h1>
    <br/>
    <div className="text-xl text-center">

    <p><b>Company:</b>ABC Pvt Ltd</p>
    <br/>
    <p><b>Role:</b>FrontEnd Developer</p>
    <br/>
    <p><b>Institution:</b>ABC University Karachi</p>
    <br/>
    <p><b>Role:</b>Lecturer</p>
    <br/>


    
</div>
</section>

</div>
  )
}